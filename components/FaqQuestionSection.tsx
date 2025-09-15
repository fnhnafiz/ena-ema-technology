"use client";
import { motion } from "framer-motion";

import {
  faqSectionVariants,
  faqHeaderVariants,
  faqHighlightVariants,
  faqContainerVariants,
  faqCardVariants,
  faqCardContentVariants,
  faqGreenDotVariants,
  faqQuestionVariants,
  faqAnswerVariants,
  faqPulseVariants,
  faqFloatVariants,
  faqShimmerVariants,
  faqViewportConfig,
} from "@/animations/varriants";

const FaqQuestionSection = () => {
  const faqs = [
    {
      question: "How long does it take?",
      answer:
        "5 days from start to finish - design, development, and deployment included.",
    },
    {
      question: "Do you provide revisions?",
      answer:
        "Yes, unlimited revisions until you're 100% satisfied with the final result.",
    },
    {
      question: "What's the payment process?",
      answer:
        "50% upfront to get started, 50% after final delivery and your approval.",
    },
    {
      question: "Can you deploy on my hosting?",
      answer:
        "Absolutely! Deployment is included in every package, on your hosting or ours.",
    },
    {
      question: "Why are your prices so affordable compared to agencies?",
      answer:
        "We run lean without big overheads - you get the same agency-level quality at a fraction of the cost.",
    },
  ];

  return (
    <motion.div
      className="container mx-auto py-22"
      variants={faqSectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={faqViewportConfig.section}
    >
      <motion.div
        variants={faqHeaderVariants}
        initial="hidden"
        whileInView="visible"
        viewport={faqViewportConfig.header}
      >
        <motion.h1
          className="text-center font-medium text-[32px] md:text-5xl text-white px-4"
          variants={faqPulseVariants}
          animate="animate"
        >
          Got Questions
          <motion.span
            className="text-[#1FFFA5]"
            variants={faqHighlightVariants}
            whileHover="hover"
            animate={faqShimmerVariants.animate}
          >
            ?
          </motion.span>{" "}
          We've Got The Answers
        </motion.h1>
      </motion.div>

      <div className="w-full py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* FAQ Cards */}
          <motion.div
            className="space-y-6"
            variants={faqContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={faqViewportConfig.container}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-[#192420] rounded-2xl p-8 flex flex-col gap-6"
                variants={faqCardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: false, amount: 0.3 }}
                style={{ perspective: 1000 }}
              >
                {/* Green Dot */}
                <motion.div className="">
                  <motion.div
                    className="w-3 h-3 bg-[#1FFFA5] rounded-full"
                    variants={faqGreenDotVariants}
                    whileHover="hover"
                    animate={faqFloatVariants.animate}
                  />
                </motion.div>

                <div className="space-y-4">
                  {/* Question */}
                  <motion.h3
                    className="text-xl md:text-2xl font-bold text-white"
                    variants={faqQuestionVariants}
                  >
                    {faq.question}
                  </motion.h3>

                  {/* Answer */}
                  <motion.p
                    className="text-[#F5F5F5] text-base md:text-lg leading-relaxed opacity-90"
                    variants={faqAnswerVariants}
                  >
                    {faq.answer}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default FaqQuestionSection;
