"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  specialOfferSectionVariants,
  specialOfferLimitedAvailabilityVariants,
  specialOfferIconVariants,
  specialOfferLimitedTitleVariants,
  specialOfferLimitedDescriptionVariants,
  specialOfferContainerVariants,
  specialOfferMainHeadingVariants,
  specialOfferMobileHeadingVariants,
  specialOfferSubtitleVariants,
  specialOfferButtonVariants,
  specialOfferArrowVariants,
  specialOfferPulseVariants,
  specialOfferGlowVariants,
  specialOfferViewportConfig,
} from "@/animations/varriants";
import Image from "next/image";
import specialIcon from "@/public/Vector.png";

const SpecialOffer = () => {
  return (
    <>
      {/* special offers */}
      <motion.div
        variants={specialOfferSectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={specialOfferViewportConfig.section}
      >
        {/* heading of special offers */}
        <motion.div
          className="flex gap-4 items-center py-12"
          variants={specialOfferLimitedAvailabilityVariants}
          initial="hidden"
          whileInView="visible"
          viewport={specialOfferViewportConfig.limitedAvailability}
        >
          <motion.div variants={specialOfferIconVariants} whileHover="hover">
            <Image src={specialIcon} className="w-8 h-8" alt="icon" />
          </motion.div>

          <div className="space-y-2">
            <motion.h1
              className="text-[#F5F5F5] text-2xl font-bold leading-6"
              variants={specialOfferLimitedTitleVariants}
            >
              Limited Availability
            </motion.h1>

            <motion.p
              className="text-[#B2B2B2] text-[14px] font-medium leading-6"
              variants={specialOfferLimitedDescriptionVariants}
            >
              We only onboard 5 new clients per month. 2 spots left for this
              month — secure yours today.
            </motion.p>
          </div>
        </motion.div>

        <div className="">
          <div className="">
            {/* Offer Container */}
            <motion.div
              className="bg-[#192420] rounded-3xl py-12 px-6 md:py-16 md:px-12 text-center"
              variants={specialOfferContainerVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={specialOfferViewportConfig.container}
              style={{ perspective: 1000 }}
            >
              {/* Main Heading - Desktop */}
              <motion.h2
                className="hidden md:block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-[#F5F5F5] mb-6 md:mb-8 leading-tight"
                variants={specialOfferMainHeadingVariants}
                initial="hidden"
                whileInView="visible"
                viewport={specialOfferViewportConfig.elements}
              >
                Special Offer For Early Clients
              </motion.h2>

              {/* Main Heading - Mobile */}
              <motion.h2
                className="md:hidden text-[#1FFFA5] text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium mb-6 md:mb-8 leading-tight"
                variants={specialOfferMobileHeadingVariants}
                initial="hidden"
                whileInView="visible"
                viewport={specialOfferViewportConfig.elements}
                animate={{
                  textShadow: [
                    "0 0 10px rgba(31, 255, 165, 0.3)",
                    "0 0 20px rgba(31, 255, 165, 0.5)",
                    "0 0 10px rgba(31, 255, 165, 0.3)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Special Offer For Early Clients
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                className="text-base md:text-lg lg:text-xl text-[#F5F5F5] mb-8 md:mb-12 max-w-3xl mx-auto leading-6"
                variants={specialOfferSubtitleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={specialOfferViewportConfig.elements}
              >
                Get 10% OFF + Free Hosting Setup when you book this week.
              </motion.p>

              {/* CTA Button */}
              <motion.button
                className="bg-[#1FFFA5] hover:bg-[#1ae89a] text-black font-bold py-4 px-8 md:py-5 md:px-10 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 text-base md:text-lg mx-auto transform hover:scale-105 active:scale-95 group cursor-pointer mt-22"
                style={{
                  boxShadow: "0px 12px 32px 0px rgba(31, 255, 165, 0.3)",
                }}
                variants={specialOfferButtonVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                whileTap="tap"
                viewport={specialOfferViewportConfig.elements}
                animate={{
                  boxShadow: [
                    "0px 12px 32px 0px rgba(31, 255, 165, 0.3)",
                    "0px 15px 40px 0px rgba(31, 255, 165, 0.4)",
                    "0px 12px 32px 0px rgba(31, 255, 165, 0.3)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Claim my 10% discount
                <motion.div variants={specialOfferArrowVariants}>
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </motion.div>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SpecialOffer;
