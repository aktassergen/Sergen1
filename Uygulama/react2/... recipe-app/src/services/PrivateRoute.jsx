import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; // AuthContext doğru şekilde import edildiğinden emin olun

const PrivateRoute = ({ element, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext); // AuthContext'ten doğru değerler alındığından emin olun

  return isAuthenticated ? <Route {...rest} element={element} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
