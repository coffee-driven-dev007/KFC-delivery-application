import Order from "../models/Order.js"
import Product from "../models/Product.js"
import stripe from 'stripe'
import User from "../models/User.js"

// Place Order COD : /api/order/cod
export const placeOrderCOD = async (req, res) => {
    try {
        const { items, address } = req.body

        if (!address || !items || items.length === 0) {
            return res.json({ success: false, message: 'Invalid data' })
        }

        let amount = 0
        for (const item of items) {
            const product = await Product.findById(item.product)
            if (!product) {
                return res.json({ success: false, message: `Invalid product: ${item.product}` })
            }
            amount += product.offerPrice * item.quantity
        }

        amount += Math.floor(amount * 0.02)

        await Order.create({
            userId: req.userId,
            items,
            amount,
            address,
            paymentType: 'COD'
        })

        res.json({ success: true, message: 'Order Placed Successfully', amount })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}


export const placeOrderStripe = async (req, res) => {
    try {
        const { items, address } = req.body
        const { origin } = req.headers

        if (!address || !items || items.length === 0) {
            return res.json({ success: false, message: 'Invalid data' })
        }

        let productData = []
        let amount = 0

        for (const item of items) {
            const product = await Product.findById(item.product)
            if (!product) {
                return res.json({ success: false, message: `Invalid product: ${item.product}` })
            }

            productData.push({
                name: product.name,
                price: product.offerPrice,
                quantity: item.quantity,
            })

            amount += product.offerPrice * item.quantity
        }

        const order = await Order.create({
            userId: req.userId,
            items,
            amount,
            address,
            paymentType: 'Online',
            status: 'Pending'
        })

        const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY)

        const line_items = productData.map(item => ({
            price_data: {
                currency: 'usd',
                product_data: { name: item.name },
                unit_amount: Math.round(item.price * 1.02 * 100),
            },
            quantity: item.quantity,
        }))

        const session = await stripeInstance.checkout.sessions.create({
            line_items,
            mode: 'payment',
            success_url: `${origin}/loader?next=my-orders`,
            cancel_url: `${origin}/cart`,
            metadata: {
                orderId: order._id.toString(),
                userId: req.userId, // OK here (internal use)
            }
        })

        res.json({ success: true, url: session.url })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}



// Stripe Webhooks to verify payments actions : /stripe
export const stripeWebhooks = async (request, response) => {
    // Stripe gateway initialize
    const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY)

    const sig = request.headers['stripe-signature']
    let event

    try {
        event = stripeInstance.webhooks.constructEvent(
            request.body,
            sig,
            process.env.STRIPE_WEBHOOK_SECRET
        )
    } catch (error) {
        response.status(400).send(`Webhook Error: ${error.message}`)
    }

    // Handle the Event
    switch (event.type) {
        case 'payment_intent.succeeded': {
            const paymentIntent = event.data.object
            const paymentIntentId = paymentIntent.id

            // Getting Session Metadata
            const session = await stripeInstance.checkout.sessions.list({
                payment_intent: paymentIntentId,
            })

            const { orderId, userId } = session.data[0].metadata

            // Mark Payment as Paid
            await Order.findByIdAndUpdate(orderId, { isPaid: true })

            // Clear User Cart
            await User.findByIdAndUpdate(userId, { cartItem: {} })
            break;
        }

        case 'payment_intent.payment_failed': {
            const paymentIntent = event.data.object
            const paymentIntentId = paymentIntent.id

            // Getting Session Metadata
            const session = await stripeInstance.checkout.sessions.list({
                payment_intent: paymentIntentId,
            })

            const { orderId } = session.data[0].metadata
            await Order.findByIdAndDelete(orderId)
            break
        }


        default:
            console.error(`Unhandled event type ${event.type}`)
            break;
    }
    response.json({ received: true })

}

// Get Orders by User ID : /api/order/user
export const getUserOrders = async (req, res) => {
    try {
        const orders = await Order.find({
            userId: req.userId,
            $or: [{ paymentType: 'COD' }, { isPaid: true }]
        })
            .populate('items.product address')
            .sort({ createdAt: -1 })

        res.json({ success: true, orders })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}


// Get All Orders for Admin: /api/order/admin
export const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find({
            $or: [{ paymentType: 'COD' }, { isPaid: true }]
        }).populate('items.product address').sort({ createdAt: - 1 })
        res.json({ success: true, orders })
        console.log(orders)
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}