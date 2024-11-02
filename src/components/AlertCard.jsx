import React from 'react'

const AlertCard = ({ name, rate, date, country, code, flag }) => {
  return (
    <div className='p-6 flex justify-between bg-[#222222] rounded-3xl'>
        <div className='flex flex-col justify-between gap-8'>
            <div>
                <p className='font-semibold opacity-75 text-white'>{name}</p>
                <p className='font-bold text-[#F9F9F9] text-3xl'>&#8377;{`${rate}.00`}</p>
            </div>
            <div className='flex items-center gap-2'>
                <img src={flag} alt='flag' width={24} height={24} />
                <div className='flex items-center text-white gap-1'>
                    <p className='font-semibold'>{country}</p>
                    <p className='font-semibold text-sm opacity-50'>{code}</p>
                </div>
            </div>
        </div>
        <div className='flex gap-2'>
            <div className='bg-[#333333] rounded-md px-2 pb-[0.125rem] h-fit font-semibold text-xl text-white'>
                12
            </div>
            <p className='text-[#757575] opacity-50 font-semibold text-xl'>/</p>
            <div className='bg-[#333333] rounded-md px-2 pb-[0.125rem] h-fit font-semibold text-xl text-white'>
                10
            </div>
            <p className='text-[#757575] opacity-50 font-semibold text-xl'>/</p>
            <div className='bg-[#333333] rounded-md px-2 pb-[0.125rem] h-fit font-semibold text-xl text-white'>
                24
            </div>
        </div>
    </div>
  )
}

export default AlertCard