import React from 'react'
import { Box, Typography } from '@mui/material'
import { format, isSameDay } from 'date-fns'

type TFiltroDescricao = {
  dataInicial: Date
  dataFinal: Date
  other?: Array<{ name: string; value?: string }>
}

export const GraficoFiltroDescricao = ({
  dataInicial,
  dataFinal,
  other,
}: TFiltroDescricao) => {
  return (
    <Box display="flex" mt={1} justifyContent="space-between">
      {other?.map((item) => (
        <Typography key={item.name} variant="caption" color="white">
          {item.name}: {item.value || '-'}
        </Typography>
      ))}

      <Typography variant="caption" color="white">
        Data: {dataInicial && format(dataInicial, 'dd/MM/yyyy')}
        {dataFinal &&
          !isSameDay(dataFinal, dataInicial) &&
          ` - ${format(dataFinal, 'dd/MM/yyyy')}`}
      </Typography>
    </Box>
  )
}
