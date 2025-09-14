"use client";
import {
  Rocket,
  Palette,
  Zap,
  DollarSign,
  RotateCcw,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  trustSectionVariants,
  trustHeaderVariants,
  trustSubtitleVariants,
  trustGridVariants,
  trustCardVariants,
  trustIconVariants,
  trustTitleVariants,
  trustDescriptionVariants,
  trustViewportConfig,
} from "@/animations/varriants";
const TrustSection = () => {
  const features = [
    {
      icon: <Rocket size={32} />,
      title: "Proven Conversion Framework",
      description:
        "Designs based on 100+ tested layouts that actually convert visitors into customers.",
    },
    {
      icon: <Palette size={32} />,
      title: "Agency Level Design",
      description:
        "Modern, premium, and tailored for your brand - without the agency price tag.",
    },
    {
      icon: <Zap size={32} />,
      title: "5-day Guaranteed Delivery",
      description:
        "With a highly professional team, we deliver on time, everytime.",
    },
    {
      icon: <DollarSign size={32} />,
      title: "Transparent Pricing",
      description:
        "No hidden fees, just clear value. What you see is what you pay.",
    },
    {
      icon: <RotateCcw size={32} />,
      title: "Revisions Until You're Happy",
      description:
        "We keep working until it's right. Your satisfaction is guaranteed.",
    },
    {
      icon: <Trophy size={32} />,
      title: "Results That Speak",
      description:
        "Our pages consistently outperform industry averages for conversions.",
    },
  ];
  return (
    <motion.div
      variants={trustSectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={trustViewportConfig.section}
      className="w-full py-16 px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            variants={trustHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={trustViewportConfig.header}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200 mb-4"
          >
            Why Businesses{" "}
            <motion.span
              className="text-[#1FFFA5]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: { delay: 0.3, duration: 0.5, ease: "backOut" },
              }}
              viewport={trustViewportConfig.header}
            >
              Trust Us
            </motion.span>{" "}
            With Their Designs
          </motion.h2>
          <motion.p
            className="text-[#F5F5F5] leading-4"
            variants={trustSubtitleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={trustViewportConfig.header}
          >
            We combine proven conversion frameworks with agency-level design to
            deliver results that matter.
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={trustGridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={trustViewportConfig.grid}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap:2 lg:gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-[#192420] rounded-2xl p-8 group"
              variants={trustCardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{
                once: false,
                amount: 0.2,
              }}
              style={{
                perspective: 1000,
              }}
            >
              {/* Icon */}
              <motion.div
                className="text-[#1FFFA5] mb-6"
                variants={trustIconVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: false, amount: 0.3 }}
              >
                {feature.icon}
              </motion.div>

              {/* Title */}
              <motion.h3
                className=" font-bold text-white mb-4 leading-tight"
                variants={trustTitleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
              >
                {feature.title}
              </motion.h3>

              {/* Description */}
              <motion.p
                className="text-[#F5F5F5] text-[14px] leading-relaxed opacity-90"
                variants={trustDescriptionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TrustSection;
