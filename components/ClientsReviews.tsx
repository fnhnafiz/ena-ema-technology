"use client";
import { motion } from "framer-motion";
import ClientsMarquee from "./ClientsMarquee";
import {
  clientsReviewsSectionVariants,
  clientsReviewsHeaderContainerVariants,
  clientsReviewsMainHeadingVariants,
  clientsReviewsHighlightVariants,
  clientsReviewsSubtitleVariants,
  clientsReviewsMarqueeContainerVariants,
  clientsReviewsPulseVariants,
  clientsReviewsFloatVariants,
  clientsReviewsViewportConfig,
} from "@/animations/varriants";
const ClientsReviews = () => {
  return (
    <motion.div
      className="my-30 container mx-auto px-4"
      variants={clientsReviewsSectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={clientsReviewsViewportConfig.section}
    >
      {/* Heading of pricing card */}
      <motion.div
        className="w-full space-y-2"
        variants={clientsReviewsHeaderContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={clientsReviewsViewportConfig.header}
      >
        <motion.h1
          className="text-[#F5F5F5] font-medium text-[36px] md:text-5xl"
          variants={clientsReviewsMainHeadingVariants}
          animate={clientsReviewsFloatVariants.animate}
        >
          What Our Clients Are Saying{" "}
          <motion.span
            className="text-[#1FFFA5]"
            variants={clientsReviewsHighlightVariants}
            whileHover="hover"
            animate={{
              textShadow: [
                "0 0 10px rgba(31, 255, 165, 0.2)",
                "0 0 20px rgba(31, 255, 165, 0.4)",
                "0 0 10px rgba(31, 255, 165, 0.2)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            About Us
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-[#F5F5F5] font-medium"
          variants={clientsReviewsSubtitleVariants}
        >
          Real feedback from real businesses who've seen real results.
        </motion.p>
      </motion.div>

      <motion.div
        className="mt-12"
        variants={clientsReviewsMarqueeContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={clientsReviewsViewportConfig.marquee}
      >
        <ClientsMarquee />
      </motion.div>
    </motion.div>
  );
};

export default ClientsReviews;
