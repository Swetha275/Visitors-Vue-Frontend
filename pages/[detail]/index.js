import React, { Component, useEffect, useState } from 'react';
import Homepage from './homepage';
import axios from 'axios';

export default function Detail() {
  const [userData, setUserData] = useState('');
  useEffect(() => {
    const token = window.localStorage.getItem('token');
    axios.post(`${process.env.BACKEND_URL}/userData`, { token }).then(data => {
      setUserData(data);
    });
  },[]);
  return <Homepage userData={userData} />;
}