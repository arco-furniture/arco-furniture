import React from 'react'
import LineChart from './LineChart'
import { getPriceWithFormat } from '../utils/getPriceWithFormat'
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Title } from 'chart.js'

const ChartUserBuy = ({ chart }) => {
  ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Title)
  const dataItems = chart?.map((item) => item?.price?.reduce((a, b) => a + b, 0))

  const data = {
    labels: chart?.map((item) => item.day) || [],
    datasets: [
      {
        data: dataItems || [],
        backgroundColor: 'transparent',
        borderColor: '#4675ce',
        pointBorderColor: '#4675ce',
        pointBorderWidth: 3,
        pointHoverRadius: 6,
        pointHoverBorderColor: '#4675ce',
        pointBackgroundColor: '#fff',
        pointHoverBorderWidth: 4,
        tension: 0.4,
        fill: false,
      },
    ],
    borderWidth: 1,
  }
  const options = {
    plugins: {
      title: {
        font: {
          size: 14,
          fontFamily: 'PT Sans',
          fontWeight: 700,
        },
        display: true,
        text: 'Общая сумма заказов (за день)',
      },
      tooltip: {
        mode: 'nearest',
        intersect: false,
        displayColors: false,
        callbacks: {
          label(context) {
            return getPriceWithFormat(context.parsed.y) + ' ₽'
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          borderDash: [3],
        },
      },
      y: {
        ticks: {
          min: 1,
          callback: (value) => value / 1000 + 'K',
          stepSize: 40000,
        },
        grid: {
          borderDash: [3],
        },
      },
    },
  }

  return (
    <div className='box home-chart'>
      <LineChart data={data} options={options} />
    </div>
  )
}

export default ChartUserBuy
