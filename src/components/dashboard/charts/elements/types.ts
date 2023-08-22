import { ChartData, ChartOptions, ChartType } from 'chart.js'

export type TDefaultChart<TType extends ChartType = ChartType> = {
  data: ChartData<TType>
  options?: ChartOptions<TType>
}

export type TBarChart = TDefaultChart<'bar'>

export type TPieChart = TDefaultChart<'pie'>

export type TLineChart = TDefaultChart<'line'>
