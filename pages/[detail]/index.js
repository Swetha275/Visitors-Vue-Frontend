import React, { useEffect, useState } from 'react';
import Homepage from './homepage';
import axios from 'axios';
import Errorcomp from '../../Component/errorcomp';

export default function Detail() {
  const [userData, setUserData] = useState('');
  useEffect(() => {
    const token = window.localStorage.getItem('token');
    axios.post(`https://visitors-vue-backend.onrender.com/userData`, { token }).then(data => {
      setUserData(data);
    });
  },[]);
  // return  <Homepage userData={userData} />;
  if (userData.data==undefined){
    return <Errorcomp />
  }else{
    return <Homepage userData={userData}/>
  }
}
