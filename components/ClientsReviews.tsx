import { Star, User } from "lucide-react";
import Marquee from "react-fast-marquee";
const ClientsReviews = () => {
  const testimonials = [
    {
      id: 1,
      text: "They delivered a landing page better than agencies charging 10x more. My conversion rate doubled within the first week!",
      name: "Sarah Johnson",
      title: "SaaS Founder",
      avatar: "from-[#ff6b35] to-[#f7931e]",
    },
    {
      id: 2,
      text: "Professional, fast, and incredibly effective. Our lead generation increased by 300% after launching the new page.",
      name: "Mike Chen",
      title: "E-commerce Owner",
      avatar: "from-[#667eea] to-[#764ba2]",
    },
    {
      id: 3,
      text: "Best investment I've made for my business. The design is stunning and the conversion rate speaks for itself.",
      name: "Emily Rodriguez",
      title: "Marketing Director",
      avatar: "from-[#f093fb] to-[#f5576c]",
    },
    {
      id: 4,
      text: "Quick turnaround, excellent communication, and results that exceeded expectations. Highly recommended!",
      name: "David Thompson",
      title: "Startup Founder",
      avatar: "from-[#4facfe] to-[#00f2fe]",
    },
    {
      id: 5,
      text: "They understood our brand perfectly and created a landing page that truly converts. Amazing work!",
      name: "Lisa Wang",
      title: "Product Manager",
      avatar: "from-[#43e97b] to-[#38f9d7]",
    },
    {
      id: 6,
      text: "Professional service with incredible results. Our conversion rate improved by 250% in just two weeks!",
      name: "James Miller",
      title: "Agency Owner",
      avatar: "from-[#fa709a] to-[#fee140]",
    },
  ];
  return (
    <div className="my-30 container mx-auto px-4">
      {/* Heading of pricing card */}
      <div className="w-full space-y-2">
        <h1 className="text-[#F5F5F5] font-medium text-[36px] md:text-5xl ">
          What Our Clients Are Saying
          <span className="text-[#1FFFA5]">About Us</span>
        </h1>

        <p className="text-[#F5F5F5] font-medium">
          Real feedback from real businesses who've seen real results.
        </p>
      </div>
      <div className="mt-12">
        <Marquee pauseOnHover>
          {/* card 1 */}
          <div className="w-full max-w-md mx-auto">
            {/* Review Card */}
            <div className="bg-[#192420] rounded-2xl p-8">
              {/* 5 Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={20}
                    className="text-[#1FFFA5] fill-[#1FFFA5]"
                  />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="text-[#F5F5F5] text-base leading-relaxed mb-8">
                "They delivered a landing page better than agencies charging 10x
                more. My conversion rate doubled within the first week!"
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="w-12 h-12 bg-gradient-to-br from-[#ff6b35] to-[#f7931e] rounded-full flex items-center justify-center flex-shrink-0">
                  <User size={24} className="text-white" />
                </div>

                {/* Customer Details */}
                <div>
                  <h4 className="text-white font-bold text-base">
                    Sarah Johnson
                  </h4>
                  <p className="text-[#F5F5F5] text-sm opacity-80">
                    SaaS Founder
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* card 2 */}
          <div className="w-full max-w-md mx-auto">
            {/* Review Card */}
            <div className="bg-[#192420] rounded-2xl p-8">
              {/* 5 Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={20}
                    className="text-[#1FFFA5] fill-[#1FFFA5]"
                  />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="text-[#F5F5F5] text-base leading-relaxed mb-8">
                "They delivered a landing page better than agencies charging 10x
                more. My conversion rate doubled within the first week!"
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="w-12 h-12 bg-gradient-to-br from-[#ff6b35] to-[#f7931e] rounded-full flex items-center justify-center flex-shrink-0">
                  <User size={24} className="text-white" />
                </div>

                {/* Customer Details */}
                <div>
                  <h4 className="text-white font-bold text-base">
                    Sarah Johnson
                  </h4>
                  <p className="text-[#F5F5F5] text-sm opacity-80">
                    SaaS Founder
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* card 3 */}
          <div className="w-full max-w-md mx-auto">
            {/* Review Card */}
            <div className="bg-[#192420] rounded-2xl p-8">
              {/* 5 Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={20}
                    className="text-[#1FFFA5] fill-[#1FFFA5]"
                  />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="text-[#F5F5F5] text-base leading-relaxed mb-8">
                "They delivered a landing page better than agencies charging 10x
                more. My conversion rate doubled within the first week!"
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="w-12 h-12 bg-gradient-to-br from-[#ff6b35] to-[#f7931e] rounded-full flex items-center justify-center flex-shrink-0">
                  <User size={24} className="text-white" />
                </div>

                {/* Customer Details */}
                <div>
                  <h4 className="text-white font-bold text-base">
                    Sarah Johnson
                  </h4>
                  <p className="text-[#F5F5F5] text-sm opacity-80">
                    SaaS Founder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default ClientsReviews;
