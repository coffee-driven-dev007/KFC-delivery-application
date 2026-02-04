
import User from "../models/User.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


// Register User : (API End-Point-->) /api/user/register 
export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            return res.json({ success: false, message: 'Missing Details' })
        }

        const existingUser = await User.findOne({ email })

        if (existingUser)
            return res.json({ success: false, message: 'User Already Exists' })


        const hashedPassword = await bcrypt.hash(password, 10)

        // Create New User
        const user = await User.create({ name, email, password: hashedPassword })

        // Create Token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })

        res.cookie('token', token, {
            httpOnly: true, // Prevent JavaSCript to access cookie
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict', //CSRF Protection
            maxAge: 7 * 24 * 60 * 60 * 1000,// Cookie Expiration time

        })
        return res.json({ success: true, user: { email: user.email, name: user.name } })
    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }
}

// Login User : /api/user/login
export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password)
            return res.json({ success: false, message: 'Email and Password Are Required' })
        const user = await User.findOne({ email })

        if (!user) {
            return res.json({ success: false, message: 'Invalid Email or Password' })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        // Password not matching
        if (!isMatch)
            return res.json({ success: false, message: 'Invalid Email or Password' })

        // Create Token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })

        res.cookie('token', token, {
            httpOnly: true, // Prevent JavaSCript to access cookie
            secure: true,
            sameSite: 'none', //CSRF Protection
            maxAge: 7 * 24 * 60 * 60 * 1000,// Cookie Expiration time

        })
        return res.json({ success: true, user: { email: user.email, name: user.name } })
    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }
}

// Check Auth: /api/user/is-auth
export const isAuth = async (req, res) => {
    try {
        const user = await User.findById(req.userId).select('-password')
        return res.json({ success: true, user })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

// Logout User: /api/user/logout
export const logout = async (req, res) => {
    try {
        res.clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
        })

        return res.json({ success: true, message: 'Logged Out' })
    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }
}