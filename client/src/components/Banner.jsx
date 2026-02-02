import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <div className='relative'>
            <img src={assets.main_banner_bg} alt="banner" className='w-full hidden md:block rounded-2xl' />
            <img src={assets.main_banner_bg_sm} alt="banner-sm" className='w-full md:hidden' />

            <div className='absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 px-4 md:pl-18 lg:pl-24'>



                <div className='flex items-center mt-6 font-medium'>
                    {/* <Link to={'/products'} className='group flex items-center gap-2 px-7 md:px-9 py-3 bg-primary hover:bg-primary-dull transition rounded text-white cursor-pointer'>
                        Shop Now
                        <img className='md:hidden transition group-focus: translate-x-1' src={assets.white_arrow_icon} alt="arrow" />
                    </Link> */}

                </div>
            </div></div>
    )
}

export default Banner