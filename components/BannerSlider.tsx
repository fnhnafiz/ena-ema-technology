"use client";
import "../app/globals.css";
import bannerImage from "@/public/image 2.png";
import bannerImage2 from "@/public/image 4.png";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Check } from "lucide-react";
import caseStudiesImage from "@/public/case-studies/image 8.png";
const BannerSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="banner-slider overflow-x-hidden">
      <Slider {...settings}>
        <div className="md:px-2">
          <Image
            src={bannerImage}
            className="h-[400px] md:h-[500px] lg:h-[600px] w-full object-cover rounded-lg"
            alt="Banner"
          />
        </div>
        <div className="px-2">
          <Image
            src={bannerImage2}
            className="h-[400px] md:h-[500px] lg:h-[600px] w-full object-cover rounded-lg"
            alt="Banner"
          />
        </div>
        <div className="px-2">
          <Image
            src={bannerImage}
            className="h-[400px] md:h-[500px] lg:h-[600px] w-full object-cover rounded-lg"
            alt="Banner"
          />
        </div>
        <div className="px-2">
          <Image
            src={bannerImage2}
            className="h-[400px] md:h-[500px] lg:h-[600px] w-full object-cover rounded-lg"
            alt="Banner"
          />
        </div>
        <div className="px-2">
          <Image
            src={bannerImage2}
            className="h-[400px] md:h-[500px] lg:h-[600px] w-full object-cover rounded-lg"
            alt="Banner"
          />
        </div>
        <div className="px-2">
          <Image
            src={bannerImage2}
            className="h-[400px] md:h-[500px] lg:h-[600px] w-full object-cover rounded-lg"
            alt="Banner"
          />
        </div>
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-8">
      {/* first card */}
      <div className="p-4 border-2 border-[#2A3C36] bg-[#151E1B] rounded-xl space-y-4">
        <div className="w-full">
          <Image
            src={caseStudiesImage}
            className="w-full h-full"
            alt="case studies image"
          />
        </div>
        {/* card footer */}
        <div className="flex justify-between items-start">
          <span className="text-white text-2xl font-bold">Flowpilot</span>
          <div className="space-y-2">
            <button className="bg-[#003D25] px-4 py-2 rounded-full text-[#B2B2B2] text-[12px] flex items-center">
              <Check size={20} className="text-[#1FFFA5]" />
              <span>20% high conversion than average in first week</span>
            </button>
            <button className="bg-[#003D25] px-4 py-2 rounded-full text-[#B2B2B2] text-[12px] flex items-center">
              <Check size={20} className="text-[#1FFFA5]" />
              <span>Clean and modern design with clear CTA</span>
            </button>
          </div>
        </div>
      </div>
      {/* second card */}
      <div className="p-4 border-2 border-[#2A3C36] bg-[#151E1B] rounded-xl space-y-4">
        <div className="w-full">
          <Image
            src={caseStudiesImage}
            className="w-full h-full"
            alt="case studies image"
          />
        </div>
        {/* card footer */}
        <div className="flex justify-between items-start">
          <span className="text-white text-2xl font-bold">Flowpilot</span>
          <div className="space-y-2">
            <button className="bg-[#003D25] px-4 py-2 rounded-full text-[#B2B2B2] text-[12px] flex items-center">
              <Check size={20} className="text-[#1FFFA5]" />
              <span>20% high conversion than average in first week</span>
            </button>
            <button className="bg-[#003D25] px-4 py-2 rounded-full text-[#B2B2B2] text-[12px] flex items-center">
              <Check size={20} className="text-[#1FFFA5]" />
              <span>Clean and modern design with clear CTA</span>
            </button>
          </div>
        </div>
      </div>
      {/* third card */}
      <div className="p-4 border-2 border-[#2A3C36] bg-[#151E1B] rounded-xl space-y-4">
        <div className="w-full">
          <Image
            src={caseStudiesImage}
            className="w-full h-full"
            alt="case studies image"
          />
        </div>
        {/* card footer */}
        <div className="flex justify-between items-start">
          <span className="text-white text-2xl font-bold">Flowpilot</span>
          <div className="space-y-2">
            <button className="bg-[#003D25] px-4 py-2 rounded-full text-[#B2B2B2] text-[12px] flex items-center">
              <Check size={20} className="text-[#1FFFA5]" />
              <span>20% high conversion than average in first week</span>
            </button>
            <button className="bg-[#003D25] px-4 py-2 rounded-full text-[#B2B2B2] text-[12px] flex items-center">
              <Check size={20} className="text-[#1FFFA5]" />
              <span>Clean and modern design with clear CTA</span>
            </button>
          </div>
        </div>
      </div>
    </div>
        </div>
      </Slider>
    </div>
  );
};

export default BannerSlider;
