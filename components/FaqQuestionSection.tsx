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
    <div className="container mx-auto py-30">
      <div>
        <h1 className="text-center font-medium text-[36px] md:text-5xl text-white">
          Got Questions<span className="text-[#1FFFA5]">?</span> We’ve Got The
          Answers
        </h1>
      </div>
      <div className="w-full py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* FAQ Cards */}
          <div className="space-y-6 ">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#192420] rounded-2xl p-8 flex flex-col gap-6"
              >
                {/* Green Dot */}
                <div className="">
                  <div className="w-3 h-3 bg-[#1FFFA5] rounded-full"></div>
                </div>

                <div className="space-y-4">
                  {/* Question */}
                  <h3 className="text-xl md:text-2xl font-bold text-white ">
                    {faq.question}
                  </h3>

                  {/* Answer */}
                  <p className="text-[#F5F5F5] text-base md:text-lg leading-relaxed  opacity-90">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqQuestionSection;
