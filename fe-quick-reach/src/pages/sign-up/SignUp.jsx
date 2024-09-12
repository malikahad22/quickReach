import { Link, useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import React, { useEffect, useState } from 'react'

import { login } from '../../routes/react-app-routes/public-routes/public-routes';
import { home } from '../../routes/react-app-routes/private-routes/private-routes';
import InputField from '../../MuiComponent/InputField/InputField';
import { login as Login } from '../../redux/slices/authSlice';
import { postUser } from '../../routes/api-routes/api-routes';
import { outerBox, innerBox } from './sign-up-design';
import Button from '../../MuiComponent/Button/Button';
import { toastHandler } from '../../utils';
import { post } from '../../api';


const SignUp = () => {

   const [loading, setLoading] = useState(false);

   const currentUser = useSelector(state => state.user.isloggedIn)

   const navigate = useNavigate();
   const dispatch = useDispatch();

   useEffect(() => {
      currentUser && navigate(home)
   }, []);

   const signupSchema = yup.object().shape({
      email: yup.string().required('email is required').email('email invalid format'),
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
      validationSchema: signupSchema,
      onSubmit: async (values, { resetForm }) => {
         setLoading(true);
         const { data, statusCode } = await post(postUser, values);
         if (statusCode === 201 || (statusCode === 200)) {
            toastHandler('User created Successfully', 'success');
            dispatch(Login(data));
            navigate(home);

         } else {
            toastHandler('User Not Created', 'error');
         }
         setLoading(false);
         resetForm();
      }
   });

   return (
      <Box sx={outerBox}>
         <Box sx={{ ...innerBox }}>
            <Typography variant='h3' sx={{ fontWeight: 600, textAlign: 'left', mb: 2 }}>SignUp</Typography>
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
            <Link to={login}>Have an account?</Link>

            <Button disable={loading} onClick={formik.handleSubmit} variant={'contained'} label={'Signup'} />
         </Box>
      </Box>)
}

export default SignUp;