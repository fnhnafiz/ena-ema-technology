"use client";
import { motion } from "framer-motion";
import footerLogo from "@/public/Logo.png";
import linkedIn from "@/public/linkedin.png";
import facebook from "@/public/social-icon/qlementine-icons_facebook-16.png";
import insta from "@/public/social-icon/lets-icons_insta.png";
import Be from "@/public/social-icon/ri_behance-fill.png";
import drible from "@/public/social-icon/icon-park-outline_dribble.png";
import Image from "next/image";

import {
  footerSectionVariants,
  footerContainerVariants,
  footerLogoVariants,
  footerCopyrightVariants,
  footerSocialContainerVariants,
  footerSocialIconVariants,
  footerMobileContentVariants,
  footerMobileCopyrightVariants,
  footerMobileSocialVariants,
  footerViewportConfig,
} from "@/animations/varriants";
const Footer = () => {
  return (
    <motion.div
      className="bg-[#1FFFA5] w-full px-2"
      variants={footerSectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={footerViewportConfig.section}
    >
      <motion.div
        className="flex items-center justify-between container mx-auto py-16"
        variants={footerContainerVariants}
      >
        {/* Logo Section */}
        <motion.div
          className="w-6/12"
          variants={footerLogoVariants}
          whileHover="hover"
        >
          <Image
            src={footerLogo}
            className="w-32 h-7 md:w-42 md:h-9"
            alt="footer logo"
          />
        </motion.div>

        {/* Desktop Copyright */}
        <motion.div
          className="hidden md:block"
          variants={footerCopyrightVariants}
        >
          <p className="text-[12px] text-[#0A0F0D]">
            © All rights reserved to Ena Ema Technologies
          </p>
        </motion.div>

        {/* Desktop Social Icons */}
        <motion.div
          className="md:flex items-center gap-4 hidden md:block"
          variants={footerSocialContainerVariants}
        >
          <motion.div
            variants={footerSocialIconVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Image src={linkedIn} className="w-5 h-5" alt="icon" />
          </motion.div>
          <motion.div
            variants={footerSocialIconVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Image src={facebook} className="w-5 h-5" alt="icon" />
          </motion.div>
          <motion.div
            variants={footerSocialIconVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Image src={insta} className="w-5 h-5" alt="icon" />
          </motion.div>
          <motion.div
            variants={footerSocialIconVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Image src={Be} className="w-5 h-5" alt="icon" />
          </motion.div>
          <motion.div
            variants={footerSocialIconVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Image src={drible} className="w-5 h-5" alt="icon" />
          </motion.div>
        </motion.div>

        {/* Mobile Content */}
        <motion.div
          className="md:hidden w-6/12 space-y-4"
          variants={footerMobileContentVariants}
        >
          <motion.div variants={footerMobileCopyrightVariants}>
            <p className="text-[12px] text-[#0A0F0D]">
              © All rights reserved to Ena Ema Technologies
            </p>
          </motion.div>
          <motion.div
            className="flex items-center gap-4"
            variants={footerMobileSocialVariants}
          >
            <motion.div
              variants={footerSocialIconVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Image src={linkedIn} className="w-5 h-5" alt="icon" />
            </motion.div>
            <motion.div
              variants={footerSocialIconVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Image src={facebook} className="w-5 h-5" alt="icon" />
            </motion.div>
            <motion.div
              variants={footerSocialIconVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Image src={insta} className="w-5 h-5" alt="icon" />
            </motion.div>
            <motion.div
              variants={footerSocialIconVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Image src={Be} className="w-5 h-5" alt="icon" />
            </motion.div>
            <motion.div
              variants={footerSocialIconVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Image src={drible} className="w-5 h-5" alt="icon" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
