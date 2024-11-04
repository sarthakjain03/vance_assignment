import React, { useState } from 'react'
import CustomDropdown from './CustomDropdown'
import SetAlertDialog from './SetAlertDialog';
import AreaChart from './AreaChart';

const options = [
  { image: "/uk.svg", name: "UK", currency: "£(GBP)", code: "GBP" },
  { image: "/uae.png", name: "UAE", currency: "(AED)", code: "AED" },
];

const tempChartData = [
  {name: 'UK (GBP)', data: [40, 50, 70, 80, 100, 120]}
];

const tempXAxisLabels = ['1Y', '2Y', '3Y', '4Y', '5Y', '6Y'];

const HistoryCard = ({ userID }) => {
  const [selectedCountry, setSelectedCountry] = useState(options[0]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <div className='text-white bg-[#222222] py-6 px-5 flex flex-col gap-6 rounded-3xl w-full'>
          <CustomDropdown options={options} selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} />
          <AreaChart height={300} data={tempChartData} xaxisLabels={tempXAxisLabels} colors={['#81EBAB']} />
          <div className='w-full flex justify-between items-center'>
              <p className='font-bold text-[#F9F9F9] text-3xl'>&#8377;{`84.00`}</p>
              <button className='bg-primary px-5 py-2 flex justify-center items-center gap-2 rounded-full text-[#0B0B0B]' onClick={() => setIsDialogOpen(true)}>
                  <p className='font-semibold'>Set Alert</p>
                  <div className='rounded-sm bg-black px-1 pb-1 font-medium text-[#81EBAB]' style={{ lineHeight: '1' }}>
                      +
                  </div>
              </button>
          </div>
      </div>
      {isDialogOpen && (
        <SetAlertDialog userID={userID} isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} selectedCountry={selectedCountry} />
      )}
    </>
  )
}

export default HistoryCard