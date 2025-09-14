"use client";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  ArrowRight,
  Shield,
  Check,
  Star,
} from "lucide-react";

import {
  loginPageSectionVariants,
  loginFormContainerVariants,
  loginFormGridVariants,
  loginInputFieldVariants,
  loginIconVariants,
  loginSubmitButtonVariants,
  loginArrowVariants,
  loginTrustIndicatorsVariants,
  loginTrustItemVariants,
  loginTrustIconVariants,
  loginFormPulseVariants,
  loginButtonShimmerVariants,
  loginPageViewportConfig,
} from "@/animations/varriants";
const LoginPage = () => {
  return (
    <motion.div
      className="w-full py-16 px-4"
      variants={loginPageSectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={loginPageViewportConfig.section}
    >
      <div className="max-w-4xl mx-auto">
        {/* Main Form Container */}
        <motion.div
          className="border-2 border-[#2A3C36] p-8 md:p-12 mb-8"
          style={{ boxShadow: "0px 20px 60px rgba(31, 255, 165, 0.1)" }}
          variants={loginFormContainerVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={loginPageViewportConfig.form}
          animate={loginFormPulseVariants.animate}
        >
          {/* Form Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
            variants={loginFormGridVariants}
          >
            {/* Name Input */}
            <motion.div
              className="relative"
              variants={loginInputFieldVariants}
              whileFocus="focus"
            >
              <motion.div
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#1FFFA5]"
                variants={loginIconVariants}
                whileHover="hover"
              >
                <User size={20} />
              </motion.div>
              <motion.input
                type="text"
                placeholder="Your name"
                className="w-full bg-transparent border-2 border-[#3a4a5c] rounded-xl px-12 py-4 text-white placeholder-[#9ca3af] focus:border-[#1FFFA5] focus:outline-none transition-colors duration-300"
                whileFocus={{
                  scale: 1.01,
                  borderColor: "#1FFFA5",
                  boxShadow: "0 0 0 3px rgba(31, 255, 165, 0.1)",
                  transition: { duration: 0.2 },
                }}
              />
            </motion.div>

            {/* Email Input */}
            <motion.div
              className="relative"
              variants={loginInputFieldVariants}
              whileFocus="focus"
            >
              <motion.div
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#1FFFA5]"
                variants={loginIconVariants}
                whileHover="hover"
              >
                <Mail size={20} />
              </motion.div>
              <motion.input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent border-2 border-[#3a4a5c] rounded-xl px-12 py-4 text-white placeholder-[#9ca3af] focus:border-[#1FFFA5] focus:outline-none transition-colors duration-300"
                whileFocus={{
                  scale: 1.01,
                  borderColor: "#1FFFA5",
                  boxShadow: "0 0 0 3px rgba(31, 255, 165, 0.1)",
                  transition: { duration: 0.2 },
                }}
              />
            </motion.div>

            {/* Phone Input */}
            <motion.div
              className="relative"
              variants={loginInputFieldVariants}
              whileFocus="focus"
            >
              <motion.div
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#1FFFA5]"
                variants={loginIconVariants}
                whileHover="hover"
              >
                <Phone size={20} />
              </motion.div>
              <motion.input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-transparent border-2 border-[#3a4a5c] rounded-xl px-12 py-4 text-white placeholder-[#9ca3af] focus:border-[#1FFFA5] focus:outline-none transition-colors duration-300"
                whileFocus={{
                  scale: 1.01,
                  borderColor: "#1FFFA5",
                  boxShadow: "0 0 0 3px rgba(31, 255, 165, 0.1)",
                  transition: { duration: 0.2 },
                }}
              />
            </motion.div>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            className="w-full bg-[#1FFFA5] hover:bg-[#1ae89a] text-[#002013] text-sm font-medium md:font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 md:text-lg transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            style={{ boxShadow: "0px 10px 30px rgba(31, 255, 165, 0.3)" }}
            variants={loginSubmitButtonVariants}
            whileHover="hover"
            whileTap="tap"
            animate={loginButtonShimmerVariants.animate}
          >
            Get my high-converting landing page
            <motion.div
              variants={loginArrowVariants}
              animate="animate"
              whileHover="hover"
            >
              <ArrowRight size={20} />
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 text-center"
          variants={loginTrustIndicatorsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={loginPageViewportConfig.trust}
        >
          {/* SSL Secure */}
          <motion.div
            className="hidden md:block md:flex items-center justify-center gap-3 text-[#9ca3af]"
            variants={loginTrustItemVariants}
            whileHover="hover"
          >
            <motion.div variants={loginTrustIconVariants} whileHover="hover">
              <Shield size={20} />
            </motion.div>
            <span className="text-sm font-medium">SSL secure</span>
          </motion.div>

          <div className="flex justify-between items-center">
            {/* SSL Secure Mobile */}
            <motion.div
              className="md:hidden flex items-center justify-center gap-3 text-[#9ca3af]"
              variants={loginTrustItemVariants}
              whileHover="hover"
            >
              <motion.div variants={loginTrustIconVariants} whileHover="hover">
                <Shield size={20} />
              </motion.div>
              <span className="text-sm font-medium">SSL secure</span>
            </motion.div>

            {/* Money-back Guaranteed */}
            <motion.div
              className="flex items-center justify-center gap-3 text-[#9ca3af]"
              variants={loginTrustItemVariants}
              whileHover="hover"
            >
              <motion.div variants={loginTrustIconVariants} whileHover="hover">
                <Check size={20} />
              </motion.div>
              <span className="text-sm font-medium">Money-back guaranteed</span>
            </motion.div>
          </div>

          {/* Satisfaction Guaranteed */}
          <motion.div
            className="flex items-center justify-start gap-3 text-[#9ca3af]"
            variants={loginTrustItemVariants}
            whileHover="hover"
          >
            <motion.div variants={loginTrustIconVariants} whileHover="hover">
              <Star size={20} />
            </motion.div>
            <span className="text-sm font-medium">Satisfaction guaranteed</span>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoginPage;
