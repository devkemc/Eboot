export type TDataset = {
    label: string
    backgroundColor: Array<string>
    borderColor: Array<string>
    borderWidth: number
}

export type TDashboardChart = {
    title: string
    dataset?: TDataset
}
