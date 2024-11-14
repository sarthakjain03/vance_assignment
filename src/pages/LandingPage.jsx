import React from 'react'
import { Apple } from '@mui/icons-material'

const LandingPage = () => {
  return (
    <div className='flex flex-col gap-9 justify-center items-center min-h-screen py-10'>
      <div className='flex flex-col justify-center items-center gap-5'>
        <h1 className='font-bold text-5xl'>Send money to India at Google rates.</h1>
        <p className='text-gray-600 font-medium text-lg'>
          Say goodbye to forex fees - get the best value for your transfers
        </p>
      </div>
      <div className='flex gap-5 items-center'>
        <button className='border-2 border-gray-500 rounded-full bg-black flex items-center gap-2 px-6 py-2'>
          <img src='/apple.svg' width={30} />
          <div className='flex flex-col'>
            <span className='text-white font-medium text-sm'>Download on the</span>
            <span className='text-white font-bold text-lg'>App store</span>
          </div>
        </button>
        <button className='border-2 border-gray-500 rounded-full bg-black flex items-center gap-2 px-6 py-2'>
          <img src='/playstore.svg' width={30} />
          <div className='flex flex-col'>
            <span className='text-white font-medium text-sm'>Download on the</span>
            <span className='text-white font-bold text-lg'>Play store</span>
          </div>
        </button>
      </div>
      <div className='relative flex justify-center items-center'>
        <img src='/Testimonials.svg' width={650} />
        <img src='/image537.svg' width={400} className='absolute top-8 left-44' />
        <img src='/screen1.svg' width={183} className='absolute top-10 left-[14.2rem]' />
        <div className='absolute -bottom-52 w-full h-1/3 bg-gradient-to-t from-white'></div>
      </div>
    </div>
  )
}

export default LandingPage