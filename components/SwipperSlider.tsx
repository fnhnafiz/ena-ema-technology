"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "../app/globals.css";

// import required modules
import { Autoplay } from "swiper/modules";
import { Pagination } from "swiper/modules";
import image from "@/public/image 2.png";
import image2 from "@/public/image 4.png";
import Image from "next/image";
const SwipperSlider = () => {
  return (
    <div className="relative">
      <Swiper
        slidesPerView={1.2} // 1 full + 0.2 partial next image
        spaceBetween={20}
        centeredSlides={false}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          // Mobile devices
          420: {
            slidesPerView: 1.15,
            spaceBetween: 15,
          },
          // Tablets
          768: {
            slidesPerView: 1.15,
            spaceBetween: 20,
          },
          // Desktop
          1024: {
            slidesPerView: 1.2,
            spaceBetween: 25,
          },
          1280: {
            slidesPerView: 1.25,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper w-full"
      >
        <SwiperSlide>
          <div className="relative h-[400px] md:h-[500px] lg:h-[800px] w-full  overflow-hidden">
            <Image
              src={image}
              fill
              className="object-cover"
              alt="Banner"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[400px] md:h-[500px] lg:h-[800px] w-full  overflow-hidden">
            <Image
              src={image2}
              fill
              className="object-cover"
              alt="Banner"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[400px] md:h-[500px] lg:h-[800px] w-full  overflow-hidden">
            <Image
              src={image}
              fill
              className="object-cover"
              alt="Banner"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[400px] md:h-[500px] lg:h-[800px] w-full  overflow-hidden">
            <Image
              src={image2}
              fill
              className="object-cover"
              alt="Banner"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwipperSlider;
