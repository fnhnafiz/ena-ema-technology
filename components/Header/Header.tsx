"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "@/public/Logo.svg";
import buttonIcon from "@/public/Vector.png";
import LoginPage from "../LoginPage";
import {
  containerVariants,
  logoVariants,
  buttonVariants,
  headingVariants,
  paragraphVariants,
  ctaVariants,
  glowVariants,
} from "@/animations/varriants";

function Header() {
  return (
    <div className="font-inter">
      {/* Top Logo */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className=" flex flex-col justify-center items-center overflow-hidden"
      >
        <motion.div
          variants={logoVariants}
          initial="hidden"
          whileInView="visible"
          className="relative flex justify-center items-center py-4"
        >
          <motion.div
            variants={glowVariants}
            animate="animate"
            className="absolute w-[650px] bg-[#1FFFA5] h-[652px] opacity-[2%] rounded-full -top-[400px] blur-3xl"
          ></motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
          >
            <Image src={logo} className="w-[120px] h-[27px] z-40" alt="Logo" />
          </motion.div>
        </motion.div>
        {/* Header Button */}
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="my-20"
        >
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="flex justify-center items-center gap-x-1 cursor-pointer py-2 px-4 rounded-full border-t border-[#1FFFA5] "
          >
            <motion.div
              className="absolute inset-0 bg-[#1FFFA5] opacity-0 rounded-full"
              whileHover={{
                opacity: 0.05,
                transition: { duration: 0.3 },
              }}
            />

            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
            ></motion.div>
            <Image src={buttonIcon} className="w-4 h-4 " alt="Button Icon" />
            <span className="text-[#B2B2B2] text-[10px] md:text-sm">
              Trusted by 30+ startups & entrepreneurs worldwide
            </span>
          </motion.button>
        </motion.div>
        {/* Heading of heeader */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          className="max-w-7xl mx-auto flex flex-col justify-center items-center gap-y-4 "
        >
          <motion.h1
            variants={headingVariants}
            className="text-4xl md:text-6xl lg:text-7xl  font-bold text-center text-[#F5F5F5] leading-9 md:leading-[72px]
                      tracking-tight md:tracking-[-4px] lg:tracking-[-4px] px-12"
          >
            Strategic Landing Pages That Convert From Just{" "}
            <motion.span
              className="text-[#1FFFA5]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: { delay: 0.5, duration: 0.6, ease: "backOut" },
              }}
              viewport={{ once: false }}
              whileHover={{
                scale: 1.05,
                textShadow: "0 0 20px rgba(31, 255, 165, 0.5)",
                transition: { duration: 0.3 },
              }}
            >
              $200
            </motion.span>
          </motion.h1>
          <motion.p
            className="text-[#F5F5F5] text-center text-[18px] px-6 md:px-32"
            variants={paragraphVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            Stop wasting traffic on generic pages. We deliver premium,
            conversion-focused landing pages designed, developed, and launched
            in just 5 days.
          </motion.p>
        </motion.div>
        <motion.div
          className="my-12"
          variants={ctaVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          <LoginPage />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Header;
