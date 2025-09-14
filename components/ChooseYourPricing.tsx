"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SpecialOffer from "./SpecialOffer";
import {
  pricingSectionVariants,
  pricingHeaderVariants,
  pricingSubtitleVariants,
  pricingGridVariants,
  pricingCardVariants,
  pricingPopularBadgeVariants,
  pricingPlanNameVariants,
  pricingDescriptionVariants,
  pricingPriceVariants,
  pricingFeaturesContainerVariants,
  pricingFeatureVariants,
  pricingFeatureDotVariants,
  pricingButtonVariants,
  pricingArrowVariants,
  pricingViewportConfig,
} from "@/animations/varriants";

const ChooseYourPricing = () => {
  const pricingPlans = [
    {
      name: "Basic",
      price: "$200",
      description: "Perfect for solopreneurs",
      features: [
        "1 Landing Page (Design + Development)",
        "Hosting Deployment",
        "5-Day Delivery",
        "Basic Support",
      ],
      buttonText: "Start my project",
      popular: false,
    },
    {
      name: "Standard",
      price: "$400",
      description: "Ideal for growing businesses",
      features: [
        "2 Landing Pages (Design + Development)",
        "Hosting Deployment",
        "3-Day Delivery",
        "Priority Support",
        "A/B Testing Setup",
        "Analytics Integration",
      ],
      buttonText: "Start my project",
      popular: true,
    },
    {
      name: "Premium",
      price: "$600",
      description: "Complete solution for enterprises",
      features: [
        "3 Landing Pages (Design + Development)",
        "Hosting Deployment",
        "2-Day Delivery",
        "Premium Support",
        "A/B Testing Setup",
        "Analytics Integration",
        "Custom Animations",
        "SEO Optimization",
      ],
      buttonText: "Start my project",
      popular: false,
    },
  ];
  return (
    <motion.div
      className="container mx-auto px-4 mb-30"
      variants={pricingSectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={pricingViewportConfig.section}
    >
      {/* Heading of pricing card */}
      <div className="w-full space-y-2">
        <motion.h1
          className="text-[#F5F5F5] font-medium text-5xl"
          variants={pricingHeaderVariants}
          initial="hidden"
          whileInView="visible"
          viewport={pricingViewportConfig.header}
        >
          Simple, Transparent Pricing —{" "}
          <motion.span
            className="text-[#1FFFA5]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: { delay: 0.3, duration: 0.5, ease: "backOut" },
            }}
            viewport={pricingViewportConfig.header}
          >
            Choose Your Plan
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-[#F5F5F5] font-medium"
          variants={pricingSubtitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={pricingViewportConfig.header}
        >
          No hidden fees, no surprises. Just premium landing pages at unbeatable
          prices.
        </motion.p>
      </div>

      {/* Pricing card */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-12 py-12"
        variants={pricingGridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={pricingViewportConfig.grid}
      >
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            className={`
              bg-[#192420] rounded-2xl p-8 transition-all duration-300 hover:border-2 hover:border-[#1FFFA5] border-2 border-transparent relative flex flex-col group
              ${plan.popular ? "ring-2 ring-[#1FFFA5] ring-opacity-50" : ""}
            `}
            variants={pricingCardVariants}
            whileHover="hover"
            style={{ perspective: 1000 }}
          >
            {/* Popular Badge */}
            {plan.popular && (
              <motion.div
                className="absolute -top-4 left-[20%] transform -translate-x-1/2"
                variants={pricingPopularBadgeVariants}
                whileHover="hover"
              >
                <div className="bg-[#1FFFA5] text-black px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              </motion.div>
            )}

            {/* Plan Header */}
            <div className="mb-8 border-b border-[#2A3C36] pb-12">
              <motion.h3
                className="text-2xl font-bold text-white mb-2"
                variants={pricingPlanNameVariants}
              >
                {plan.name}
              </motion.h3>

              <motion.p
                className="text-[#F5F5F5] text-sm mb-4"
                variants={pricingDescriptionVariants}
              >
                {plan.description}
              </motion.p>

              <div className="flex items-baseline">
                <motion.span
                  className="text-4xl font-bold text-[#1FFFA5]"
                  variants={pricingPriceVariants}
                  whileHover="hover"
                >
                  {plan.price}
                </motion.span>
              </div>
            </div>

            {/* Features List */}
            <motion.div
              className="mb-8 flex-grow-1"
              variants={pricingFeaturesContainerVariants}
            >
              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    className="flex items-center gap-3"
                    variants={pricingFeatureVariants}
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <motion.div
                        className="w-2 h-2 bg-[#1FFFA5] rounded-full"
                        variants={pricingFeatureDotVariants}
                      />
                    </div>
                    <span className="text-[#F5F5F5] text-sm leading-relaxed">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* CTA Button */}
            <motion.button
              className="w-full bg-[#1a5d3a] group-hover:bg-[#1FFFA5] text-[#00E58A] group-hover:text-black font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 text-base cursor-pointer"
              variants={pricingButtonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              {plan.buttonText}
              <motion.div variants={pricingArrowVariants}>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </motion.div>
            </motion.button>
          </motion.div>
        ))}
      </motion.div>

      {/* SpecialOffer Component*/}
      <SpecialOffer />
    </motion.div>
  );
};

export default ChooseYourPricing;
