import caseStudiesImage from "@/public/case-studies/image 8.png";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import CaseStudiesSlider from "./CaseStudiesSlider";
import caseStudiesImage2 from "@/public/case-studies/MacBook Pro 16_ - 2.png";
import caseStudiesImage3 from "@/public/case-studies/MacBook Pro 16_ - 3.png";
import caseStudiesImage4 from "@/public/case-studies/image 26.png";
const CaseStudies = () => {
  return (
    <div className="py-22">
      <div className="text-white max-w-2xl mx-auto text-center">
        <h1 className="text-[#F5F5F5] font-medium text-5xl leading-16 tracking-tight md:tracking-[-2px]">
          Case Studies
        </h1>
        <p className="text-base font-normal leading-6 tracking-normal text-center text-[#F5F5F5] mt-4">
          See the designs that delivered results
        </p>
      </div>
      <div>
        <CaseStudiesSlider />
      </div>
      <div className="px-4 grid grid-cols-1 lg:grid-cols-3 gap-6 py-8 container mx-auto md:hidden">
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
          <div className="flex flex-col gap-y-6 items-start">
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
              src={caseStudiesImage2}
              className="w-full h-full"
              alt="case studies image"
            />
          </div>
          {/* card footer */}
          <div className="flex flex-col gap-y-6 items-start">
            <span className="text-white text-2xl font-bold">GrowthSummit</span>
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
              src={caseStudiesImage3}
              className="w-full h-full"
              alt="case studies image"
            />
          </div>
          {/* card footer */}
          <div className="flex flex-col gap-y-6 items-start">
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
      <div className="py-12">
        <button
          className="block mx-auto bg-[#1FFFA5] hover:bg-[#1ae89a] text-[#002013] text-sm font-medium md:font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 md:text-lg transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          style={{ boxShadow: "0px 10px 30px rgba(31, 255, 165, 0.3)" }}
        >
          Get my high-converting landing page
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default CaseStudies;
