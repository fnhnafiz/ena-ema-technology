"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../app/globals.css";
import caseStudiesImage from "@/public/case-studies/image 8.png";
import { Check } from "lucide-react";
import Image from "next/image";
const CaseStudiesSlider = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    centerPadding: "0px",
    speed: 500,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <div className=" container mx-auto">
      <Slider {...settings}>
        <div>
          {/* first card */}
          <div className="p-4 border-2 border-[#2A3C36] bg-[#151E1B] rounded-xl space-y-4 w-full">
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
        <div>
          {/* second card */}
          <div className="p-4 border-2 border-[#2A3C36] bg-[#151E1B] rounded-xl space-y-4 ">
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
        <div>
          {/* third card */}
          <div className="p-4 border-2 border-[#2A3C36] bg-[#151E1B] rounded-xl space-y-4 ">
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
        <div>
          {/* first card */}
          <div className="p-4 border-2 border-[#2A3C36] bg-[#151E1B] rounded-xl space-y-4 ">
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
        <div>
          {/* second card */}
          <div className="p-4 border-2 border-[#2A3C36] bg-[#151E1B] rounded-xl space-y-4 ">
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
        <div>
          {/* third card */}
          <div className="p-4 border-2 border-[#2A3C36] bg-[#151E1B] rounded-xl space-y-4 ">
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
      </Slider>
    </div>
  );
};

export default CaseStudiesSlider;
