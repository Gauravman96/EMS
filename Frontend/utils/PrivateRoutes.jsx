// import React, { children } from 'react'
// import { useAuth } from '../context/authContext.jsx'
// import { Navigate } from 'react-router-dom'

// const PrivateRoutes = ({children}) => {
//     const { user, loading } = useAuth()


//     if(loading) {
//         <div>Loding.....</div>
//     }

//     return user ? children : <Navigate to="/login" />
 
  
// }

// export default PrivateRoutes

import React from "react";
import { Navigate } from "react-router-dom";
// import { useAuth } from "../context/authContext";
import { useAuth } from "../src/context/authContext";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading.....</div>;
  }

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoutes;
