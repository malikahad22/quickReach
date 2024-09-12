import { Button as MuiButton } from '@mui/material';
import React from 'react'

// eslint-disable-next-line react/prop-types
const Button = ({ variant, onClick, label, disable }) => {
   return (
      <MuiButton disabled={disable} variant={variant} onClick={onClick}>{label}</MuiButton>
   )
}

export default Button;