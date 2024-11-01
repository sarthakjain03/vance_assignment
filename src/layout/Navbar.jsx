import React from 'react'
import { Button, Typography } from '@mui/material'
import { ArrowDownwardRounded } from '@mui/icons-material'

const Navbar = () => {
  return (
    <div className='flex justify-center items-center border-b border-b-white/20'>
        <div className='flex justify-between items-center mx-10 my-4 w-3/4'>
            <img src='/logo.svg' height={30} width={150} alt='vance logo' />
            <div className='bg-[#81EBAB] px-4 py-2 flex gap-2 cursor-pointer rounded-full text-[#0B0B0B]'>
                <p className='font-semibold'>Download app</p>
                <div className='rounded-full bg-black flex justify-center items-center px-1'>
                    <ArrowDownwardRounded fontSize='10' sx={{ color: '#81EBAB', fontWeight: 600 }} />
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar