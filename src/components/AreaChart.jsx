import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import "./areachart.css"

const chartOptions = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  tooltip: {
    style: {
      fontSize: "16px",
    },
  },
  grid: {
    show: true,
    strokeDashArray: 1,
    position: "back",
    borderColor: "rgba(255, 255, 255, 0.15)",
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
};

function AreaChart({
  data = [],
  colors,
  showYaxisLabels = true,
  height,
  xaxisLabels = [],
  yaxisTitle = "",
}) {
  const [series, setSeries] = useState([]);
  const [options, setOptions] = useState(chartOptions);

  useEffect(() => {
    setSeries(data);
    setOptions((prevState) => ({
      ...prevState,
      yaxis: {
        tickAmount: 5,
        labels: {
          show: showYaxisLabels,
          formatter: (value) => {
            return value.toFixed(2);
          },
          style: {
            fontWeight: 500,
            fontSize: '14px',
            color: 'rgba(255, 255, 255, 1)'
          }
        },
        title: {
          text: yaxisTitle,
          style: {
            color: undefined,
            fontSize: "16px",
            fontFamily: "Poppins, sans-serif",
            fontWeight: 500,
            cssClass: "apexcharts-yaxis-title",
          },
        },
      },
      xaxis: {
        categories: xaxisLabels,
        tickAmount: 10,
        labels: {
          formatter: (value) => {
            return value;
          },
          style: {
            fontWeight: 500,
            fontSize: '14px',
            color: 'rgba(255, 255, 255, 1)'
          }
        },
      },
      colors: colors,
      tooltip: {
        ...prevState.tooltip,
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
            const value = series[seriesIndex][dataPointIndex];
            return `<div style="background: #6B48FF; color: white; padding: 5px 10px; border-radius: 8px; font-size: 20px; font-weight: 600;">
                      ${value.toFixed(2)}L
                    </div>`;
          },
        x: {
          show: false,
          formatter: (value, { dataPointIndex }) => {
            return xaxisLabels[dataPointIndex];
          },
        },
        y: {
          formatter: (value, { seriesIndex, dataPointIndex }) => {
            return value;
          },
          title: {
            formatter: (seriesName) => null,
          },
        },
      },
    }));
  }, [data]);

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="area"
      height={height ?? ""}
    />
  );
}

export default AreaChart;
