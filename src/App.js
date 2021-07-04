import React,{useEffect, useState} from 'react'
import Header from './components/Header'
import Details from './components/Details'
import MapA from './components/Map'
import './App.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setInfo } from './features/counter/addressSlice';

const App = () => {
  
  const dispatch = useDispatch();
  const [myIpAddress,setMyIpAddress] = useState('');
  //
  const json= async(url) => {
    return fetch(url).then(res => res.json());
  }
  
  let apiKey = 'a3c023b02f5a36267d3254ad6b588e513421259f1888e134fb783ca8';
  json(`https://api.ipdata.co?api-key=${apiKey}`).then(data => {
    setMyIpAddress(data.ip);
    // console.log(myIpAddress);
  });

  //




  const getIPAddress = async()=>{
      await axios.get(`https://geo.ipify.org/api/v1?apiKey=at_jE4GgLurH7g8KqaLsaYwkbFaQgNnr&ipAddress=${myIpAddress}`)
      .then((response)=>{ 
        // console.log(response.data.location);
        dispatch(setInfo(response.data))
      })
      .catch((error)=>{
          console.log(error);
      })
  }

  useEffect(()=>{
    getIPAddress();
  },[])

  return (
    <div>
      <Header/>
      <Details/>
      <MapA/>
    </div>
  )
}

export default App
