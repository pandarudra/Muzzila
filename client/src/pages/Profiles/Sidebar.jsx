import React from 'react';
// import { assets } from '../../assets/assets';
import "./Profile.css"
const Sidebar = () => {
    return (
        <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex bg-black'>
            <div className='bg-gray-800 h-[15%] rounded-flex flrx-col justify-around'>
                <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                    <img src="assets.home_icon" alt="" />
                    <p className='font-bold'>Home</p>
                </div>
               
            </div>
        </div>
    )
}

export default Sidebar;
