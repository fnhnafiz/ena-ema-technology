"use client";

import caseStudiesImage from "@/public/case-studies/image 8.png";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  caseStudiesSectionVariants,
  caseStudiesHeaderVariants,
  caseStudiesSubtitleVariants,
  caseStudiesGridVariants,
  caseStudiesCardVariants,
  caseStudiesImageVariants,
  caseStudiesTitleVariants,
  caseStudiesBadgeVariants,
  caseStudiesBadgeContainerVariants,
  caseStudiesButtonVariants,
  caseStudiesViewportConfig,
} from "@/animations/varriants";
import CaseStudiesSlider from "./CaseStudiesSlider";
import caseStudiesImage2 from "@/public/case-studies/MacBook Pro 16_ - 2.png";
import caseStudiesImage3 from "@/public/case-studies/MacBook Pro 16_ - 3.png";

const CaseStudies = () => {
  return (
    <motion.div
      variants={caseStudiesSectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={caseStudiesViewportConfig.section}
      className="py-22"
    >
      <div className="text-white max-w-2xl mx-auto text-center">
        <motion.h1
          variants={caseStudiesHeaderVariants}
          initial="hidden"
          whileInView="visible"
          viewport={caseStudiesViewportConfig.header}
          className="text-[#F5F5F5] font-medium text-5xl leading-16 tracking-tight md:tracking-[-2px]"
        >
          Case Studies
        </motion.h1>
        <motion.p
          variants={caseStudiesSubtitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={caseStudiesViewportConfig.header}
          className="text-base font-normal leading-6 tracking-normal text-center text-[#F5F5F5] mt-4"
        >
          See the designs that delivered results
        </motion.p>
      </div>
      <div>
        <CaseStudiesSlider />
      </div>
      <motion.div
        variants={caseStudiesGridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={caseStudiesViewportConfig.grid}
        className="px-4 grid grid-cols-1 lg:grid-cols-3 gap-6 py-8 container mx-auto md:hidden"
      >
        {/* first card */}
        <motion.div
          variants={caseStudiesCardVariants}
          whileHover="hover"
          style={{ perspective: 1000 }}
          className="p-4 border-2 border-[#2A3C36] bg-[#151E1B] rounded-xl space-y-4"
        >
          <motion.div
            className="w-full"
            variants={caseStudiesImageVariants}
            whileHover="hover"
          >
            <Image
              src={caseStudiesImage}
              className="w-full h-full"
              alt="case studies image"
            />
          </motion.div>
          {/* card footer */}
          <div className="flex flex-col gap-y-6 items-start">
            <motion.span
              className="text-white text-2xl font-bold"
              variants={caseStudiesTitleVariants}
            >
              Flowpilot
            </motion.span>

            <motion.div
              variants={caseStudiesBadgeContainerVariants}
              className="space-y-2"
            >
              <motion.button
                className="bg-[#003D25] px-3 py-2 rounded-full text-[#B2B2B2]  w-full flex gap-2 justify-around items-center"
                variants={caseStudiesBadgeVariants}
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "rgba(0, 61, 37, 0.8)",
                  transition: { duration: 0.2 },
                }}
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{
                    scale: 1,
                    rotate: 0,
                    transition: {
                      delay: 0.5,
                      duration: 0.5,
                      ease: [0.68, -0.55, 0.265, 1.55],
                    },
                  }}
                >
                  <Check size={20} className="text-[#1FFFA5]" />
                </motion.div>
                <span className="text-left text-[10px] sm:text-[12px]">
                  20% high conversion than average in first week
                </span>
              </motion.button>
              <motion.button
                className="bg-[#003D25] px-4 py-2 rounded-full text-[#B2B2B2]  flex justify-around gap-2 items-center"
                variants={caseStudiesBadgeVariants}
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "rgba(0, 61, 37, 0.8)",
                  transition: { duration: 0.2 },
                }}
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{
                    scale: 1,
                    rotate: 0,
                    transition: {
                      delay: 0.5,
                      duration: 0.5,
                      ease: [0.68, -0.55, 0.265, 1.55],
                    },
                  }}
                >
                  <Check size={20} className="text-[#1FFFA5]" />
                </motion.div>
                <span className="text-[10px] sm:text-[12px]">
                  Clean and modern design with clear CTA
                </span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
        {/* second card */}
        <motion.div
          variants={caseStudiesCardVariants}
          whileHover="hover"
          style={{ perspective: 1000 }}
          className="p-4 border-2 border-[#2A3C36] bg-[#151E1B] rounded-xl space-y-4"
        >
          <motion.div
            className="w-full"
            variants={caseStudiesImageVariants}
            whileHover="hover"
          >
            <Image
              src={caseStudiesImage2}
              className="w-full h-full"
              alt="case studies image"
            />
          </motion.div>
          {/* card footer */}
          <div className="flex flex-col gap-y-6 items-start">
            <motion.span
              className="text-white text-2xl font-bold"
              variants={caseStudiesTitleVariants}
            >
              Flowpilot
            </motion.span>

            <motion.div
              variants={caseStudiesBadgeContainerVariants}
              className="space-y-2"
            >
              <motion.button
                className="bg-[#003D25] px-3 py-2 rounded-full text-[#B2B2B2]  flex
                justify-around gap-2 items-center"
                variants={caseStudiesBadgeVariants}
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "rgba(0, 61, 37, 0.8)",
                  transition: { duration: 0.2 },
                }}
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{
                    scale: 1,
                    rotate: 0,
                    transition: {
                      delay: 0.5,
                      duration: 0.5,
                      ease: [0.68, -0.55, 0.265, 1.55],
                    },
                  }}
                >
                  <Check size={20} className="text-[#1FFFA5]" />
                </motion.div>
                <span className="text-[10px] sm:text-[12px]">
                  20% high conversion than average in first week
                </span>
              </motion.button>
              <motion.button
                className="bg-[#003D25] px-4 py-2 rounded-full text-[#B2B2B2]  flex justify-around gap-2 items-center"
                variants={caseStudiesBadgeVariants}
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "rgba(0, 61, 37, 0.8)",
                  transition: { duration: 0.2 },
                }}
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{
                    scale: 1,
                    rotate: 0,
                    transition: {
                      delay: 0.5,
                      duration: 0.5,
                      ease: [0.68, -0.55, 0.265, 1.55],
                    },
                  }}
                >
                  <Check size={20} className="text-[#1FFFA5]" />
                </motion.div>
                <span className="text-[10px] sm:text-[12px]">
                  Clean and modern design with clear CTA
                </span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
        {/* third card */}
        <motion.div
          variants={caseStudiesCardVariants}
          whileHover="hover"
          style={{ perspective: 1000 }}
          className="p-4 border-2 border-[#2A3C36] bg-[#151E1B] rounded-xl space-y-4"
        >
          <motion.div
            className="w-full"
            variants={caseStudiesImageVariants}
            whileHover="hover"
          >
            <Image
              src={caseStudiesImage3}
              className="w-full h-full"
              alt="case studies image"
            />
          </motion.div>
          {/* card footer */}
          <div className="flex flex-col gap-y-6 items-start">
            <motion.span
              className="text-white text-2xl font-bold"
              variants={caseStudiesTitleVariants}
            >
              Flowpilot
            </motion.span>

            <motion.div
              variants={caseStudiesBadgeContainerVariants}
              className="space-y-2"
            >
              <motion.button
                className="bg-[#003D25] px-3 py-2 rounded-full text-[#B2B2B2]  flex justify-around gap-2 items-center"
                variants={caseStudiesBadgeVariants}
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "rgba(0, 61, 37, 0.8)",
                  transition: { duration: 0.2 },
                }}
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{
                    scale: 1,
                    rotate: 0,
                    transition: {
                      delay: 0.5,
                      duration: 0.5,
                      ease: [0.68, -0.55, 0.265, 1.55],
                    },
                  }}
                >
                  <Check size={20} className="text-[#1FFFA5]" />
                </motion.div>
                <span className="text-[10px] sm:text-[12px]">
                  20% high conversion than average in first week
                </span>
              </motion.button>
              <motion.button
                className="bg-[#003D25] px-4 py-2 rounded-full text-[#B2B2B2]  flex justify-around gap-2 items-center"
                variants={caseStudiesBadgeVariants}
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "rgba(0, 61, 37, 0.8)",
                  transition: { duration: 0.2 },
                }}
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{
                    scale: 1,
                    rotate: 0,
                    transition: {
                      delay: 0.5,
                      duration: 0.5,
                      ease: [0.68, -0.55, 0.265, 1.55],
                    },
                  }}
                >
                  <Check size={20} className="text-[#1FFFA5]" />
                </motion.div>
                <span className="text-[10px] sm:text-[12px]">
                  Clean and modern design with clear CTA
                </span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
      <div className="py-12">
        <motion.button
          style={{ boxShadow: "0px 10px 30px rgba(31, 255, 165, 0.3)" }}
          variants={caseStudiesButtonVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          whileTap="tap"
          viewport={caseStudiesViewportConfig.button}
          className="block mx-auto bg-[#1FFFA5] hover:bg-[#1ae89a] text-[#002013] text-sm font-medium md:font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 md:text-lg transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          // style={{ boxShadow: "0px 10px 30px rgba(31, 255, 165, 0.3)" }}
        >
          Get my high-converting landing page
          <motion.div
            animate={{
              x: [0, 5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          ></motion.div>
          <ArrowRight size={20} />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CaseStudies;
