import React from 'react'
import CustomDropdown from './CustomDropdown'

const HistoryCard = () => {
  return (
    <div className='text-white bg-[#222222] py-6 px-5 flex flex-col gap-6 rounded-3xl w-full'>
        <CustomDropdown />
        <div className='w-full flex justify-between items-center'>
            <p className='font-bold text-[#F9F9F9] text-3xl'>&#8377;{`84.00`}</p>
            <button className='bg-primary px-5 py-2 flex justify-center items-center gap-2 rounded-full text-[#0B0B0B]'>
                <p className='font-semibold'>Set Alert</p>
                <div className='rounded-sm bg-black px-1 pb-1 font-medium text-[#81EBAB]' style={{ lineHeight: '1' }}>
                    +
                </div>
            </button>
        </div>
    </div>
  )
}

export default HistoryCard