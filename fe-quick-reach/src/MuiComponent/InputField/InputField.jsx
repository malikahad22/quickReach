import React from 'react'
import TextField from '@mui/material/TextField';

// eslint-disable-next-line react/prop-types
const InputField = ({ label, type, fullwidth, width, onChange, value, name, helperText, onBlur }) => {
   return (
      <TextField
         label={label}
         type={type}
         width={fullwidth ? '100%' : width}
         onChange={onChange}
         value={value}
         helperText={helperText}
         onBlur={onBlur}
         name={name}
         // error={helperText && helperText === '' && helperText}

      />
   )
}

export default InputField