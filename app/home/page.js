
import React from 'react';
// import WinterServices from '../components/WinterServices/WinterServices';
// import HomeSwiper from '../components/Carousel/HomeSwiper';
// import WinterCareTips from '../components/ExtraSection/WinterCareTips';
// import ExpertVets from '../components/ExtraSection/ExpertVets';
// import { useLoaderData } from 'react-router';
// import TopWinterServices from '../components/WinterServices/TopWinterServices';
// import WinterReadyKit from '../components/ExtraSection/WinterReadyKit';
import { Toaster } from 'react-hot-toast';
import HomeSwiper from '../components/carousel/HomeSwiper';
import getAllServices from '@/lib/getAllServices';
import TopWinterServices from '../components/WinterServices/TopWinterServices';

const Home = async() => {
    // const services =useLoaderData();
     const services = await getAllServices();

    return (
        <div>
            <Toaster position="top-center" reverseOrder={false} />
            <HomeSwiper></HomeSwiper>
            {/* <WinterServices ></WinterServices> */}
            <TopWinterServices services={services}></TopWinterServices>
            {/* <WinterCareTips></WinterCareTips> */}
            {/* <ExpertVets></ExpertVets> */}
            {/* <WinterReadyKit></WinterReadyKit> */}
        </div>
    );
};

export default Home;