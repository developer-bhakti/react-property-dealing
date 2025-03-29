import React from 'react'

const Dream = () => {
  return (
    <div className='mx-20 my-20 '>
        <div className='mb-9 '>
            <h1 className='font-normal text-3xl'>Let talk about your Dream home</h1>
        </div>
        <form className='flex items-center'>
            <input className='border-b-1 mr-7' type="text" placeholder='Name' />
            <input  className='border-b-1 mr-7' type="text" placeholder='Phone / Email'/>
            <button className='bg-[#4B2A63] text-white py-4 px-8 rounded-sm'>Send</button>
        </form>
    </div>
  )
}

export default Dream