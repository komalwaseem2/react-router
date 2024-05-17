import React, { useEffect } from 'react';
import { Navigate, redirect, useNavigate } from 'react-router-dom';

export default function ProtectedRoute ({ children }) {

  const navigate = useNavigate();

  useEffect(()=>{
    if (!sessionStorage.getItem("user")) {
      navigate("/");
    }
  },[])

    // if (!sessionStorage.getItem("user")) {
    //   //return <Navigate to="/" replace />;
    // }
  
    return children;
  };