import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

type TModalFiltro = {
  title: string
  open?: boolean
  handleClose?: (status: 'canceled' | 'completed') => void
  children?: React.ReactNode
  description?: string
  disableCompleted?: boolean
}

export const DashboardModalFiltro = ({
  open = false,
  title,
  description,
  children,
  handleClose,
  disableCompleted,
}: TModalFiltro) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {description && <DialogContentText>{description}</DialogContentText>}
        {children}
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose?.('canceled')}>cancelar</Button>
        <Button
          disabled={disableCompleted}
          onClick={() => handleClose?.('completed')}
        >
          ok
        </Button>
      </DialogActions>
    </Dialog>
  )
}
