import { theme } from '../../theme/theme'

export const outerBox = {
   height: '100vh',
   width: '100%',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center',
   gap: 1,
}

export const innerBox = {
   display: 'flex',
   flexDirection: 'column',
   gap: 1,
   width: '40%',
   border: `0.5px solid ${theme.palette.primary.main}`,
   padding: 3,
   borderRadius: '5px',
   justifyContent: 'center',
   p: '20px',
   [theme.breakpoints.down('md')]: {
      width: '70%'
   }
}