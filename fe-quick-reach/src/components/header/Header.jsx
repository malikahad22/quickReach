import { Box } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import Button from '../../MuiComponent/Button/Button';
import { logout } from '../../redux/slices/authSlice';
import { home } from '../../routes/react-app-routes/private-routes/private-routes';


const Header = () => {

   const dispatch = useDispatch();
   const navigate = useNavigate();

   const Logout = () => {
      dispatch(logout());
      navigate('/');
      localStorage.clear();
   }

   return (
      <Box sx={{
         display: 'flex',
         justifyContent: 'space-around',
         height: '50px',
         alignItems: 'center'
      }}>
         <Box>
            <Link to={home}>LOGO</Link>
         </Box>
         <Box>
            <Button onClick={Logout} label='Logout' variant={'contained'} />
         </Box>
      </Box>
   )
}

export default Header