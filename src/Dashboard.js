import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function Dashboard() {

  const {username} = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    if (username != sessionStorage.getItem("user"))
      navigate("/error")
  },[])

  
  return (
    <div>
      <h1>Welcome, {username}.</h1>
    </div>
  );
}
