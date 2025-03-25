import React from 'react'

const Hero = () => {
  return (
    <div className="flex justify-center items-center bg-darkGreen h-screen text-white rounded-b-3xl">
        <div className='flex flex-col justify-center h-screen w-screen'>
            <div className='m-6 p-6'>
                <h1 className='lg:text-9xl md:text-7xl font-monumentUltra uppercase drop-shadow-2xl'>Suffolk Willow</h1>
            </div>
            <div className='m-6 -mt-4 p-6 font-monumentReg'>
                <p>Suffolk Willow is great and sells lots of cool things and stuff.</p>
            </div>
        </div>
        <div className='flex h-3/4 w-1/2 mt-6 drop-shadow-2xl'>
          <img src="/assets/image1.jpeg" alt="" className="w-full h-full object-cover rounded-l-3xl" />
        </div>
    </div>
  )
}

export default Hero