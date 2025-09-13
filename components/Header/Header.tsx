import Image from "next/image";
import logo from "@/public/Logo.svg";
import buttonIcon from "@/public/Vector.png";
import LoginPage from "../LoginPage";

function Header() {
  return (
    <div className="font-inter">
      {/* Top Logo */}
      <div className=" flex flex-col justify-center items-center overflow-hidden">
        <div className="relative flex justify-center items-center py-4">
          <div className="absolute w-[650px] bg-[#1FFFA5] h-[652px] opacity-15 rounded-full -top-[400px] blur-3xl"></div>
          <Image src={logo} className="w-[120px] h-[27px] z-40" alt="Logo" />
        </div>
        {/* Header Button */}
        <div className="my-20">
          <button className="flex justify-center items-center gap-x-1 cursor-pointer py-2 px-4 rounded-full border-t border-[#1FFFA5] ">
            <Image src={buttonIcon} className="w-4 h-4 " alt="Button Icon" />
            <span className="text-[#B2B2B2] text-[10px] md:text-sm">
              Trusted by 30+ startups & entrepreneurs worldwide
            </span>
          </button>
        </div>
        {/* Heading of heeader */}
        <div className="max-w-7xl mx-auto flex flex-col justify-center items-center gap-y-4 ">
          <h1
            className="text-4xl md:text-6xl lg:text-7xl  font-bold text-center text-[#F5F5F5] leading-9 md:leading-[72px]
                      tracking-tight md:tracking-[-4px] lg:tracking-[-4px] px-12"
          >
            Strategic Landing Pages That Convert From Just{" "}
            <span className="text-[#1FFFA5]">$200</span>
          </h1>
          <p className="text-[#F5F5F5] text-center text-[18px] px-6 md:px-32">
            Stop wasting traffic on generic pages. We deliver premium,
            conversion-focused landing pages designed, developed, and launched
            in just 5 days.
          </p>
        </div>
        <div className="my-12">
          <LoginPage />
        </div>
      </div>
    </div>
  );
}

export default Header;
