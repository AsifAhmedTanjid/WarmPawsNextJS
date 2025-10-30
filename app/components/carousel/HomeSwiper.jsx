"use client"
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./HomeSwiper.css";
// import CarouselImg1 from "";
// import CarouselImg2 from "../../assets/carolina-sanchez-Ho-PJ9p8UOY-unsplash.jpg";
// import CarouselImg3 from "../../assets/cat.jpg";
// import CarouselImg4 from "../../assets/d-ng-ph-c-h-i-tri-u-OtDLRtPzGxQ-unsplash.jpg";
// import CarouselImg5 from "../../assets/erik-mclean-WqLopZhEhr4-unsplash.jpg";
// import CarouselImg6 from "../../assets/ryan-chen-FMd10pmdrDM-unsplash.jpg";
// import CarouselImg7 from "../../assets/istockphoto-1059650734-612x612.jpg";
// import CarouselImg8 from "../../assets/istockphoto-1362221070-612x612.jpg";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const HomeSwiper = () => {

    
  return (
    <div className="bg-[#f0f8ff] pt-3">
      <Swiper
           spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination,Navigation]}
        className="mySwiper container rounded-2xl pt-3"
      >
          <SwiperSlide>
            <div className="w-full h-64 md:h-72 lg:h-150 ">
              <Image
                src="/carolina-sanchez-Ho-PJ9p8UOY-unsplash.jpg"
                alt="Dog 1"
                height={600}
                width={600}
                className="w-full h-full object-cover overflow-hidden"
              />
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>
            <div className="w-full h-64 md:h-72 lg:h-150 ">
              <Image
                src="/cat.jpg"
                alt="Dog 1"
                height={600}
                width={600}
                className="w-full h-full object-cover overflow-hidden"
              />
            </div>
          </SwiperSlide> */}
          <SwiperSlide>
            <div className="w-full h-64 md:h-72 lg:h-150 ">
              <Image
                src="/d-ng-ph-c-h-i-tri-u-OtDLRtPzGxQ-unsplash.jpg"
                alt="Dog 1"
                height={600}
                width={600}
                className="w-full h-full object-cover overflow-hidden"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-64 md:h-72 lg:h-150 ">
              <Image
                src="/erik-mclean-WqLopZhEhr4-unsplash.jpg"
                alt="Dog 1"
                height={300}
                width={600}
                className="w-full h-full object-cover overflow-hidden"
              />
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>
            <div className="w-full h-64 md:h-72 lg:h-150 ">
              <Image
                src="/icons8-pet-96.png"
                alt="Dog 1"
                height={600}
                width={600}
                className="w-full h-full object-cover overflow-hidden"
              />
            </div>
          </SwiperSlide> */}
          <SwiperSlide>
            <div className="w-full h-64 md:h-72 lg:h-150 ">
              <Image
                src="/istockphoto-1059650734-612x612.jpg"
                alt="Dog 1"
                height={600}
                width={600}
                className="w-full h-full object-cover overflow-hidden"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-64 md:h-72 lg:h-150 ">
              <Image
                src="/istockphoto-1362221070-612x612.jpg"
                alt="Dog 1"
                height={600}
                width={600}
                className="w-full h-full object-cover overflow-hidden"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-64 md:h-72 lg:h-150 ">
              <Image
                src="/ryan-chen-FMd10pmdrDM-unsplash.jpg"
                alt="Dog 1"
                height={600}
                width={600}
                className="w-full h-full object-cover overflow-hidden"
              />
            </div>
          </SwiperSlide>
        {/* <SwiperSlide>
          <div className="w-full h-64 md:h-72 lg:h-150">
            <img
              src={CarouselImg3}
              alt="Dog 1"
              className="w-full h-full object-cover overflow-hidden"
            />
          </div>
        </SwiperSlide> */}
        {/* <SwiperSlide>
          <div className="w-full h-64 md:h-72 lg:h-150 ">
            <Image
              src="./carolina-sanchez-Ho-PJ9p8UOY-unsplash.jpg"
              alt="Dog 1"
              height={20}
              width={20}
              className="w-full h-full object-cover overflow-hidden"
            />
          </div>
        </SwiperSlide>
                <SwiperSlide>
          <div className="w-full h-64 md:h-72 lg:h-150 ">
            <Image
              src="./carolina-sanchez-Ho-PJ9p8UOY-unsplash.jpg"
              alt="Dog 1"
              height={20}
              width={20}
              className="w-full h-full object-cover overflow-hidden"
            />
          </div>
        </SwiperSlide>
                <SwiperSlide>
          <div className="w-full h-64 md:h-72 lg:h-150 ">
            <Image
              src="./carolina-sanchez-Ho-PJ9p8UOY-unsplash.jpg"
              alt="Dog 1"
              height={20}
              width={20}
              className="w-full h-full object-cover overflow-hidden"
            />
          </div>
        </SwiperSlide>
                <SwiperSlide>
          <div className="w-full h-64 md:h-72 lg:h-150 ">
            <Image
              src="./carolina-sanchez-Ho-PJ9p8UOY-unsplash.jpg"
              alt="Dog 1"
              height={20}
              width={20}
              className="w-full h-full object-cover overflow-hidden"
            />
          </div>
        </SwiperSlide>
                <SwiperSlide>
          <div className="w-full h-64 md:h-72 lg:h-150 ">
            <Image
              src="./carolina-sanchez-Ho-PJ9p8UOY-unsplash.jpg"
              alt="Dog 1"
              height={20}
              width={20}
              className="w-full h-full object-cover overflow-hidden"
            />
          </div>
        </SwiperSlide> */}
        {/* <SwiperSlide>
          <div className="w-full h-64 md:h-72 lg:h-150">
            <img
              src={CarouselImg5}
              alt="Dog 1"
              className="w-full h-full object-cover overflow-hidden"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-64 md:h-72 lg:h-150">
            <img
              src={CarouselImg6}
              alt="Dog 1"
              className="w-full h-full object-cover overflow-hidden"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-64 md:h-72 lg:h-150">
            <img
              src={CarouselImg7}
              alt="Dog 1"
              className="w-full h-full object-cover overflow-hidden"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-64 md:h-72 lg:h-150">
            <img
              src={CarouselImg8}
              alt="Dog 1"
              className="w-full h-full object-cover overflow-hidden"
            />
          </div>
        </SwiperSlide> */}
        {/* <SwiperSlide>
          <div className="w-full h-64 md:h-72 lg:h-150  ">
            <img
              src={CarouselImg1}
              alt="Dog 1"
              className="w-full h-full object-cover overflow-hidden"
            />
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default HomeSwiper;