import { User, Palette, Rocket } from "lucide-react";
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
    <div className="w-full py-20 px-4 bg-[#151E1A] relative overflow-hidden ">
      {/* Left Blur Effect */}
      <div className="absolute -left-[5%] top-[30%] transform -translate-y-1/2 h-[700px] w-[700px] blur-3xl rounded-full bg-[#1FFFA5] opacity-5"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="font-medium text-5xl leading-12 md:leading-[72px] tracking-tight md:tracking-[-4px] lg:tracking-[-1px] text-center text-white mb-6">
            From Idea to Live Landing Page in{" "}
            <span className="text-[#1FFFA5]">Just 5 Days</span>
          </h1>
          <p className="text-[#F5F5F5] text-lg leading-relaxed max-w-2xl mx-auto">
            Our streamlined process ensures fast delivery without compromising
            quality
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Card Container */}
              <div className="bg-[#192420] rounded-2xl p-8 text-center relative">
                {/* Step Badge - Positioned at top */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-transparent border border-[#1FFFA5]  text-[#1FFFA5] xt-sm font-bold px-3 py-1 rounded-full">
                    {step.step}
                  </div>
                </div>

                {/* Large Icon with Circle Background */}
                <div className="mb-8 flex justify-center mt-4">
                  <div className="">
                    {/* Outer glow circle */}

                    {/* Main icon circle */}
                    <div className="w-20 h-20 bg-[#003D25] bg-opacity-20 rounded-full flex items-center justify-center text-[#1FFFA5] relative z-10">
                      {step.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  <p className="text-[#F5F5F5] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Mobile Connector */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center mt-8 mb-4">
                  <div className="w-px h-12 bg-gradient-to-b from-[#1FFFA5] to-transparent opacity-50"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessTimelineSection;
