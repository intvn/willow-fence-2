import React from 'react'

const Hero = () => {
  return (
    <div className="flex justify-center items-center bg-darkGreen h-screen text-white rounded-b-3xl">
        <div className='flex flex-col justify-centerh-screen w-screen'>
            <div className='m-6 p-6'>
                <h1 className='text-9xl italic font-bold'>Suffolk Willow</h1>
            </div>
            <div className='m-6 -mt-4 p-6'>
                <p>Suffolk Willow is great and sells lots of cool things and stuff.</p>
            </div>
        </div>
    </div>
  )
}

export default Hero