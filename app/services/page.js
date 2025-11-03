"use client"
import React, { useEffect, useState } from 'react';
// import WinterServices from '../components/WinterServices/WinterServices';
// import { useLoaderData } from 'react-router';
import { Toaster } from 'react-hot-toast';
import WinterServices from '../components/WinterServices/WinterServices';

const Services = () => {
     const [services, setServices] = useState([]);
    // const services =useLoaderData();
     useEffect(() => {
        fetch("/data/data.json")
          .then((res) => res.json())
          .then((data) => setServices(data))
          .catch(console.error);
      }, []);
    return (
        <>
        <Toaster position="top-center" reverseOrder={false} />
        <WinterServices services={services}></WinterServices>
        
        </>
    );
};

export default Services;