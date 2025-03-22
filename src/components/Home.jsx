import React from 'react'
import Navbar from './Navbar'
import home from "../assets/home.png"

const Home = () => {
  return (
    <div className=''>
        <Navbar/>
        <div className='mt-10 py-10 px-40 mr-90'>
            <img className='' src={home} alt="" />
            <div className='text-right bg-white -mt-10 py-4 px-3 '>
            <p className=' flex items-center justify-center font-medium text-black text-xl mb-2'>Get personalised home interiors</p>
            <span className='flex flex-col font-bold text-3xl mb-4'>in just 50 days</span>
            <button className='bg-[#4B2A63] text-white'>SPEAK WITH A ONLINE CONSULTANT</button>
        </div>
        </div>
        
    </div>
  )
}

export default Home;