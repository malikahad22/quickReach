import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { login } from '../react-app-routes/public-routes/public-routes';

const ProtectedRoutes = () => {
  const loggedInUser = useSelector((state) => state.user);
  return loggedInUser.isloggedIn ? <Outlet /> : <Navigate to={login} replace />
}

export default ProtectedRoutes;