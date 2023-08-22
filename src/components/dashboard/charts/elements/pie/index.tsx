import { Pie } from 'react-chartjs-2'
import { TPieChart } from '../types'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

export const DashboardPieChart = ({ data, options }: TPieChart) => {
  ChartJS.register(ArcElement, Tooltip, Legend)
  return <Pie height='50px' options={options} data={data} />
}
