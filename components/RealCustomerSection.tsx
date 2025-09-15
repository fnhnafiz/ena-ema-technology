"use client";
import { motion } from "framer-motion";
import LoginPage from "./LoginPage";

import {
  realCustomerSectionVariants,
  realCustomerBackgroundBlurLeftVariants,
  realCustomerBackgroundBlurRightVariants,
  realCustomerContentContainerVariants,
  realCustomerMainHeadingVariants,
  realCustomerHighlightVariants,
  realCustomerSubtitleVariants,
  realCustomerCTAVariants,
  realCustomerUrgencyPulseVariants,
  realCustomerShimmerVariants,
  realCustomerFloatVariants,
  realCustomerMagneticVariants,
  realCustomerViewportConfig,
} from "@/animations/varriants";

const RealCustomerSection = () => {
  return (
    <>
      <motion.div
        className="bg-[#0A0F0D] py-22 relative overflow-hidden"
        variants={realCustomerSectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={realCustomerViewportConfig.section}
      >
        {/* Left Background Blur */}
        <motion.div
          className="bg-[#1FFFA5] h-[550px] w-[700px] rounded-full absolute top-[10%] -left-[10%] blur-3xl opacity-[4%]"
          variants={realCustomerBackgroundBlurLeftVariants}
          animate="animate"
        />

        {/* Main Content Container */}
        <motion.div
          className="max-w-6xl mx-auto flex flex-col justify-center items-center gap-y-4 md:px-[130px]"
          variants={realCustomerContentContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={realCustomerViewportConfig.content}
        >
          {/* Heading */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-center text-[#F5F5F5] leading-9 md:leading-[72px] tracking-tight md:tracking-[-4px] lg:tracking-[-1px]"
            variants={realCustomerMainHeadingVariants}
            animate={realCustomerFloatVariants.animate}
          >
            Ready to Turn Visitors Into{" "}
            <motion.span
              className="text-[#1FFFA5]"
              variants={realCustomerHighlightVariants}
              whileHover={realCustomerMagneticVariants.hover}
              animate={realCustomerShimmerVariants.animate}
            >
              Real Customers?
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-[#F5F5F5] text-center text-[18px] px-6 md:px-32"
            variants={realCustomerSubtitleVariants}
          >
            Don't settle for an average page. Get a premium, conversion-focused
            landing page that pays for itself.
          </motion.p>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mb-12"
          variants={realCustomerCTAVariants}
          initial="hidden"
          whileInView="visible"
          viewport={realCustomerViewportConfig.cta}
        >
          <LoginPage />
        </motion.div>

        {/* Right Background Blur */}
        <motion.div
          className="bg-[#1FFFA5] h-[550px] w-[700px] rounded-full absolute top-[20%] -right-[10%] blur-3xl opacity-[3%]"
          variants={realCustomerBackgroundBlurRightVariants}
          animate="animate"
        />
      </motion.div>
    </>
  );
};

export default RealCustomerSection;
