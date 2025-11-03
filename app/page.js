"use client";
import React, { useEffect, useState } from 'react';
// import WinterServices from '../components/WinterServices/WinterServices';
// import HomeSwiper from '../components/Carousel/HomeSwiper';
// import WinterCareTips from '../components/ExtraSection/WinterCareTips';
// import ExpertVets from '../components/ExtraSection/ExpertVets';
// import { useLoaderData } from 'react-router';
// import TopWinterServices from '../components/WinterServices/TopWinterServices';
// import WinterReadyKit from '../components/ExtraSection/WinterReadyKit';
import { Toaster } from 'react-hot-toast';
import getAllServices from '@/lib/getAllServices';
import HomeSwiper from './components/carousel/HomeSwiper';
import TopWinterServices from './components/WinterServices/TopWinterServices';
import WinterCareTips from './components/ExtraSection/WinterCareTips';
import ExpertVets from './components/ExtraSection/ExpertVets';
import WinterReadyKit from './components/ExtraSection/WinterReadyKits';
// import HomeSwiper from '../components/carousel/HomeSwiper';
// import TopWinterServices from '../components/WinterServices/TopWinterServices';
// import WinterCareTips from '../components/ExtraSection/WinterCareTips';
// import ExpertVets from '../components/ExtraSection/ExpertVets';
// import WinterReadyKit from '../components/ExtraSection/WinterReadyKits';
// import services from "data/data.json"

const Home = () => {
    // const services =useLoaderData();
    //  const services = await getAllServices();
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch(console.error);
  }, []);



    return (
        <div>
            <Toaster position="top-center" reverseOrder={false} />
            <HomeSwiper></HomeSwiper>
            {/* <WinterServices ></WinterServices> */}
            <TopWinterServices services={services}></TopWinterServices>
            <WinterCareTips></WinterCareTips>
            <ExpertVets></ExpertVets>
            <WinterReadyKit></WinterReadyKit>
        </div>
    );
};

export default Home;