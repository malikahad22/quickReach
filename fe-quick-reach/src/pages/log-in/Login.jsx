import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material';
import * as yup from 'yup'
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import InputField from '../../MuiComponent/InputField/InputField';
import Button from '../../MuiComponent/Button/Button';
import { outerBox, innerBox } from './login-design';
import { getUser } from '../../routes/api-routes/api-routes';
import { get } from '../../api';
import { toastHandler } from '../../utils';
import { login } from '../../redux/slices/authSlice';
import { home } from '../../routes/react-app-routes/private-routes/private-routes';
import { signup } from '../../routes/react-app-routes/public-routes/public-routes';

const Login = () => {

   const [loading, setLoading] = useState(false);

   const navigate = useNavigate();
   const dispatch = useDispatch();
   const currentUser = useSelector(state => state.user.isloggedIn);

   useEffect(() => {
      currentUser && navigate(home);
   }, []);

   const loginSchema = yup.object().shape({
      email: yup.string().required('email is required').email('invalid email format'),
      password: yup.string()
         .required('password is required')
         .min(8, 'Pasword must be 8 or more characters')
         .matches(/(?=.*[a-z])(?=.*[A-Z])\w+/, 'Password ahould contain at least one uppercase and lowercase character')
         .matches(/\d/, 'Password should contain at least one number')
         .matches(/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/, 'Password should contain at least one special character'),
   });

   const formik = useFormik({
      initialValues: {
         email: '',
         password: ''
      },
      validationSchema: loginSchema,
      onSubmit: async (values, { resetForm }) => {
         setLoading(true);
         const { data, statusCode } = await get(getUser, { email: values.email });
         if (!!data.length === false && statusCode === 200) {
            toastHandler('User not found!', 'error');
            setLoading(false);
            resetForm();
            return;
         };

         toastHandler('Login Successfully', 'success');
         dispatch(login(data));
         resetForm();
         setLoading(false)
         navigate(home, { replace: true });
      }
   });

   return (
      <Box sx={outerBox}>
         <Box sx={{ ...innerBox }}>
            <Typography variant='h3' sx={{ fontWeight: 600, textAlign: 'left', mb: 2 }}>Login</Typography>
            <InputField
               label={'Email'}
               type={'text'}
               fullwidth
               name='email'
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               value={formik.values.email}
               helperText={formik.touched.email && formik.errors.email ? formik.errors.email : ''}

            />
            <InputField
               label={'Password'}
               type={'text'}
               name='password'
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               value={formik.values.password}
               helperText={formik.touched.password && formik.errors.password ? formik.errors.password : ''}
               fullwidth
            />
            <Link to={signup}>Dont have an account?</Link>

            <Button disable={loading} onClick={formik.handleSubmit} variant={'contained'} label={'Login'} />
         </Box>
      </Box>
   )
}
export default Login;