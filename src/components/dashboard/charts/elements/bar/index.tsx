import React from 'react'
import { Bar } from 'react-chartjs-2'
import { TBarChart } from '../types'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

export const DashboardBarChart = ({ data, options }: TBarChart) => {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  )

  return data ? <Bar options={options} data={data} /> : null
}
