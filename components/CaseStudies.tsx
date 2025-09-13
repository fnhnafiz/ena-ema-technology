import caseStudiesImage from "@/public/case-studies/image 8.png";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import CaseStudiesSlider from "./CaseStudiesSlider";
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
