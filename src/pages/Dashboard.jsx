import React from 'react'
import Navbar from '../layout/Navbar'

const Dashboard = () => {
  return (
    <div className='bg-black min-h-screen'>
        <Navbar />
        <div className='flex justify-center items-center relative'>
            <div className='h-[444px] w-[444px] rounded-full blur-2xl opacity-75 absolute' style={{ background: 'radial-gradient(50% 50% at 50% 50%, #4602D9 0%, #111111 100%)' }}></div>
            <div className='flex justify-center items-center flex-col mt-20 gap-12 relative z-10'>
                <img alt='megaphone' src='/megaphone.svg' />
                <p className='text-4xl font-bold text-center text-white'>
                    Access
                    <br />
                    rate alert dashboard
                </p>
            </div>
        </div>
    </div>
  )
}

export default Dashboard