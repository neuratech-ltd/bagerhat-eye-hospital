"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../app/style.css";

import { EffectFlip, Pagination, Autoplay } from "swiper/modules";

import image1 from "../../assets/images/1.jpg";
import image2 from "../../assets/images/2.jpg";
import image3 from "../../assets/images/3.jpg";
import image4 from "../../assets/images/4.jpg";
import image5 from "../../assets/images/5.jpg";

export default function App() {
  return (
    <>
      <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[EffectFlip, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image1.src} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2.src} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3.src} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4.src} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image5.src} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
