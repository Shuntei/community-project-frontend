import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
    <div className="mx-20 my-20 space-y-5">
      <Swiper className="mySwiper bg-yellow-600 h-48">
        <SwiperSlide className="border">第一章</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className="bg-purple-600 h-48"
    >
      <SwiperSlide className="border p-5">Slide 1</SwiperSlide>
      <SwiperSlide className="border items-center content-center">Slide 2</SwiperSlide>
      <SwiperSlide className="border">Slide 3</SwiperSlide>
      <SwiperSlide className="border">Slide 4</SwiperSlide>
      <SwiperSlide className="border">Slide 5</SwiperSlide>
      <SwiperSlide className="border">Slide 6</SwiperSlide>
    </Swiper>

    <Swiper slidesPerView={3} spaceBetween={30} navigation={true} modules={[Navigation]} className="mySwiper bg-green-600 h-48">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
    </>
  );
}
