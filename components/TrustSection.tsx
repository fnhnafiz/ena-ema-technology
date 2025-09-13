import {
  Rocket,
  Palette,
  Zap,
  DollarSign,
  RotateCcw,
  Trophy,
} from "lucide-react";
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
    <div className="w-full py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200 mb-4">
            Why Businesses <span className="text-[#1FFFA5]">Trust Us</span> With
            Their Designs
          </h2>
          <p className="text-[#F5F5F5] leading-4">
            We combine proven conversion frameworks with agency-level design to
            deliver results that matter.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap:2 lg:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#192420] rounded-2xl p-8 hover:scale-105 transition-transform duration-300 group"
            >
              {/* Icon */}
              <div className="text-[#1FFFA5] mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-[#F5F5F5] text-base md:text-lg leading-relaxed opacity-90">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustSection;
