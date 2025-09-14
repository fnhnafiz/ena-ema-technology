import { ArrowRight } from "lucide-react";
import specialIcon from "@/public/Vector.png";
import Image from "next/image";
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
    <div className="container mx-auto px-4 mb-30">
      {/* Heading of pricing card */}
      <div className="w-full space-y-2">
        <h1 className="text-[#F5F5F5] font-medium text-5xl ">
          Simple, Transparent Pricing —{" "}
          <span className="text-[#1FFFA5]">Choose Your Plan</span>
        </h1>

        <p className="text-[#F5F5F5] font-medium">
          No hidden fees, no surprises. Just premium landing pages at unbeatable
          prices.
        </p>
      </div>
      {/* Pricing card */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 py-12">
        {/* first card */}
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`
                bg-[#192420] rounded-2xl p-8 transition-all duration-300 hover:border-2 hover:border-[#1FFFA5] border-2 border-transparent relative flex flex-col
                ${plan.popular ? "ring-2 ring-[#1FFFA5] ring-opacity-50" : ""}
              `}
          >
            {/* Popular Badge */}
            {plan.popular && (
              <div className="absolute -top-4 left-[20%] transform -translate-x-1/2">
                <div className="bg-[#1FFFA5] text-black px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              </div>
            )}

            {/* Plan Header */}
            <div className="mb-8 border-b border-[#2A3C36] pb-12">
              <h3 className="text-2xl font-bold text-white mb-2">
                {plan.name}
              </h3>
              <p className="text-[#F5F5F5] text-sm mb-4">{plan.description}</p>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-[#1FFFA5]">
                  {plan.price}
                </span>
              </div>
            </div>

            {/* Features List */}
            <div className="mb-8 flex-grow-1">
              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-[#1FFFA5] rounded-full"></div>
                    </div>
                    <span className="text-[#F5F5F5] text-sm leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-[#1a5d3a] hover:bg-[#1FFFA5] text-[#00E58A] hover:text-black font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 text-base group cursor-pointer">
              {plan.buttonText}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </button>
          </div>
        ))}
      </div>

      {/* special offers */}
      <div>
        {/* headig of special offers */}
        <div className="flex gap-4 items-center py-12">
          <div>
            <Image src={specialIcon} className="w-8 h-8" alt="icon" />
          </div>
          <div className="space-y-2">
            <h1 className="text-[#F5F5F5] text-2xl font-bold leading-6">
              Limited Availability
            </h1>
            <p className="text-[#B2B2B2] text-[14px] font-medium leading-6">
              We only onboard 5 new clients per month. 2 spots left for this
              month — secure yours today.
            </p>
          </div>
        </div>
        <div className="">
          <div className="">
            {/* Offer Container */}
            <div className="bg-[#192420] rounded-3xl py-12 px-6 md:py-16 md:px-12 text-center">
              {/* Main Heading */}
              <h2 className="hidden md:block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-[#F5F5F5] mb-6 md:mb-8 leading-tight">
                Special Offer For Early Clients
              </h2>
              <h2 className="md:block text-[#1FFFA5] text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium mb-6 md:mb-8 leading-tight">
                Special Offer For Early Clients
              </h2>

              {/* Subtitle */}
              <p className="text-base md:text-lg lg:text-xl text-[#F5F5F5] mb-8 md:mb-12 max-w-3xl mx-auto leading-6">
                Get 10% OFF + Free Hosting Setup when you book this week.
              </p>

              {/* CTA Button */}
              <button
                className="bg-[#1FFFA5] hover:bg-[#1ae89a] text-black font-bold py-4 px-8 md:py-5 md:px-10 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 text-base md:text-lg mx-auto transform hover:scale-105 active:scale-95 group cursor-pointer mt-22"
                style={{
                  boxShadow: "0px 12px 32px 0px rgba(31, 255, 165, 0.3)",
                }}
              >
                Claim my 10% discount
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseYourPricing;
