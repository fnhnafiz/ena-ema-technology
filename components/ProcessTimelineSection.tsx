"use client";
import { motion } from "framer-motion";
import { User, Palette, Rocket } from "lucide-react";
import {
  processTimelineSectionVariants,
  processTimelineBackgroundBlurVariants,
  processTimelineHeaderVariants,
  processTimelineSubtitleVariants,
  processTimelineGridVariants,
  processTimelineStepVariants,
  processTimelineCardVariants,
  processTimelineStepBadgeVariants,
  processTimelineIconContainerVariants,
  processTimelineIconVariants,
  processTimelineTitleVariants,
  processTimelineDescriptionVariants,
  processTimelineConnectorVariants,
  processTimelinePulseVariants,
  processTimelineFloatVariants,
  processTimelineViewportConfig,
} from "@/animations/varriants";
const ProcessTimelineSection = () => {
  const steps = [
    {
      step: "Day 1",
      title: "Book Your Project",
      description:
        "Fill out a quick form and pay a quick booking fee via secure payment.",
      icon: <User size={32} />,
    },
    {
      step: "Day 2",
      title: "Design & Development",
      description:
        "Our expert designers create your landing page within 5 days.",
      icon: <Palette size={32} />,
    },
    {
      step: "Day 3",
      title: "Launch",
      description:
        "Fully optimized so your landing page is ready to convert visitors.",
      icon: <Rocket size={32} />,
    },
  ];
  return (
    <motion.div
      className="w-full py-20 px-4 bg-[#151E1A] relative overflow-hidden"
      variants={processTimelineSectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={processTimelineViewportConfig.section}
    >
      {/* Left Blur Effect */}
      <motion.div
        className="absolute -left-[5%] top-[30%] transform -translate-y-1/2 h-[700px] w-[700px] blur-3xl rounded-full bg-[#1FFFA5] opacity-5"
        variants={processTimelineBackgroundBlurVariants}
        animate="animate"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h1
            className="font-medium text-5xl leading-12 md:leading-[72px] tracking-tight md:tracking-[-4px] lg:tracking-[-1px] text-center text-white mb-6"
            variants={processTimelineHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={processTimelineViewportConfig.header}
          >
            From Idea to Live Landing Page in{" "}
            <motion.span
              className="text-[#1FFFA5]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: { delay: 0.4, duration: 0.6, ease: "backOut" },
              }}
              viewport={processTimelineViewportConfig.header}
            >
              Just 5 Days
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-[#F5F5F5] text-lg leading-relaxed max-w-2xl mx-auto"
            variants={processTimelineSubtitleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={processTimelineViewportConfig.header}
          >
            Our streamlined process ensures fast delivery without compromising
            quality
          </motion.p>
        </div>

        {/* Process Steps */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative"
          variants={processTimelineGridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={processTimelineViewportConfig.grid}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              variants={processTimelineStepVariants}
              whileHover="hover"
              style={{ perspective: 1000 }}
            >
              {/* Card Container */}
              <motion.div
                className="bg-[#192420] rounded-2xl p-8 text-center relative"
                variants={processTimelineCardVariants}
                whileHover="hover"
              >
                {/* Step Badge - Positioned at top */}
                <motion.div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                  variants={processTimelineStepBadgeVariants}
                  whileHover="hover"
                >
                  <motion.div
                    className="bg-transparent border border-[#1FFFA5] text-[#1FFFA5] text-sm font-bold px-3 py-1 rounded-full"
                    variants={processTimelinePulseVariants}
                    animate="animate"
                  >
                    {step.step}
                  </motion.div>
                </motion.div>

                {/* Large Icon with Circle Background */}
                <div className="mb-8 flex justify-center mt-4">
                  <motion.div className="">
                    {/* Main icon circle */}
                    <motion.div
                      className="w-20 h-20 bg-[#003D25] bg-opacity-20 rounded-full flex items-center justify-center text-[#1FFFA5] relative z-10"
                      variants={processTimelineIconContainerVariants}
                      whileHover="hover"
                      animate={processTimelineFloatVariants.animate}
                    >
                      <motion.div
                        variants={processTimelineIconVariants}
                        whileHover="hover"
                      >
                        {step.icon}
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <motion.h3
                    className="text-xl font-bold text-white"
                    variants={processTimelineTitleVariants}
                  >
                    {step.title}
                  </motion.h3>

                  <motion.p
                    className="text-[#F5F5F5] text-sm leading-relaxed"
                    variants={processTimelineDescriptionVariants}
                  >
                    {step.description}
                  </motion.p>
                </div>
              </motion.div>

              {/* Mobile Connector */}
              {index < steps.length - 1 && (
                <motion.div
                  className="md:hidden flex justify-center mt-8 mb-4"
                  variants={processTimelineConnectorVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={processTimelineViewportConfig.connector}
                >
                  <div className="w-px h-12 bg-gradient-to-b from-[#1FFFA5] to-transparent opacity-50"></div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProcessTimelineSection;
