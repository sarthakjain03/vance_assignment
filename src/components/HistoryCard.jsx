import React, { useState, useEffect } from 'react'
import CustomDropdown from './CustomDropdown'
import SetAlertDialog from './SetAlertDialog';
import AreaChart from './AreaChart';
import { ep } from '../utils/endpoints';
import axios from 'axios';
import { CircularProgress } from '@mui/material';

const options = [
  { image: "/uk.svg", name: "UK", currency: "£(GBP)", code: "GBP" },
  { image: "/uae.png", name: "UAE", currency: "(AED)", code: "AED" },
];

const HistoryCard = ({ userID }) => {
  const [selectedCountry, setSelectedCountry] = useState(options[0]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [chartData, setChartData] = useState({
    labels: [], chart: []
  });

  const formatChartData = (allData) => {
    let tempLabels = [];
    let tempData = [];
    allData?.map((item) => {
      tempLabels.push(item.resDate);
      tempData.push(item.close);
    })
    setChartData({
      labels: tempLabels, chart: [{ name: `${selectedCountry?.name} ${selectedCountry?.currency}`, data: tempData }]
    });
  }

  const handleGetHistory = async (code, timeline) => {
    setLoading(true);
    try {
      const res = await axios.get(ep.getHistory(code, timeline));
      formatChartData(res?.data);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  }

  useEffect(() => {
    if(selectedCountry) {
      handleGetHistory(selectedCountry?.code, "1M");
    }
  }, [selectedCountry])  

  return (
    <>
      <div className='text-white bg-[#222222] py-6 px-5 flex flex-col rounded-3xl w-full'>
          <CustomDropdown options={options} selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} />
          <div className='pt-6 pb-1'>
            {loading ? <CircularProgress /> : (
              <AreaChart height={300} data={chartData?.chart ?? []} xaxisLabels={chartData?.labels ?? []} colors={['#81EBAB']} />
            )}
          </div>
          <div className='w-full flex justify-between items-center'>
              <p className='font-bold text-[#F9F9F9] text-3xl'>&#8377;{`${chartData?.chart?.length > 0 && Number(chartData?.chart[0]?.data[0])?.toFixed(2)}`}</p>
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