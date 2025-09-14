import { Star, User } from "lucide-react";
import Marquee from "react-fast-marquee";
import client from "@/public/clients/Ellipse 3 copy.png";
import client1 from "@/public/clients/Ellipse 3.png";
import client2 from "@/public/clients/Ellipse 4.png";
import client3 from "@/public/clients/Ellipse 5.png";
import Image from "next/image";

const ClientsMarquee = () => {
  return (
    <div className="relative">
      {/* Desktop Marquee - Shows all cards */}
      <div className="hidden lg:block ">
        <div className="absolute left-0 top-0 w-30 h-full bg-gradient-to-r from-[#151E1A] to-transparent z-10 pointer-events-none"></div>
        <Marquee pauseOnHover>
          {/* CHANGE: Added margin-right for gap */}
          {/* card 1 */}
          <div className="w-full max-w-md mx-auto mr-6">
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
                <div className="w-12 h-12  rounded-full flex items-center justify-center flex-shrink-0">
                  <Image
                    src={client}
                    className="w-full h-full"
                    alt="client Image"
                  />
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
          {/* CHANGE: Added margin-right for gap */}
          {/* card 2 */}
          <div className="w-full max-w-md mx-auto mr-6">
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
                <div className="w-12 h-12  rounded-full flex items-center justify-center flex-shrink-0">
                  <Image
                    src={client1}
                    className="w-full h-full"
                    alt="client Image"
                  />
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
          {/* CHANGE: Added margin-right for gap */}
          {/* card 3 */}
          <div className="w-full max-w-md mx-auto mr-6">
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
                <div className="w-12 h-12  rounded-full flex items-center justify-center flex-shrink-0">
                  <Image
                    src={client3}
                    className="w-full h-full"
                    alt="client Image"
                  />
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
          {/* CHANGE: Duplicate cards for continuous scroll */}
          {/* card 1 duplicate */}
          <div className="w-full max-w-md mx-auto mr-6">
            <div className="bg-[#192420] rounded-2xl p-8">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={20}
                    className="text-[#1FFFA5] fill-[#1FFFA5]"
                  />
                ))}
              </div>
              <blockquote className="text-[#F5F5F5] text-base leading-relaxed mb-8">
                "They delivered a landing page better than agencies charging 10x
                more. My conversion rate doubled within the first week!"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12  rounded-full flex items-center justify-center flex-shrink-0">
                  <Image
                    src={client1}
                    className="w-full h-full"
                    alt="client Image"
                  />
                </div>
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
          {/* card 2 duplicate */}
          <div className="w-full max-w-md mx-auto mr-6">
            <div className="bg-[#192420] rounded-2xl p-8">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={20}
                    className="text-[#1FFFA5] fill-[#1FFFA5]"
                  />
                ))}
              </div>
              <blockquote className="text-[#F5F5F5] text-base leading-relaxed mb-8">
                "They delivered a landing page better than agencies charging 10x
                more. My conversion rate doubled within the first week!"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12  rounded-full flex items-center justify-center flex-shrink-0">
                  <Image
                    src={client2}
                    className="w-full h-full"
                    alt="client Image"
                  />
                </div>
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
        <div className="absolute right-0 top-0 w-30 h-full bg-gradient-to-l from-[#151E1A] to-transparent z-10 pointer-events-none"></div>
      </div>

      {/* CHANGE: NEW - Tablet Marquee - Shows 2 cards at a time */}
      <div className="hidden md:block lg:hidden relative">
        <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-[#151E1A] to-transparent z-10 pointer-events-none"></div>
        <Marquee pauseOnHover>
          <div className="flex gap-6">
            <div className="w-full max-w-md flex-shrink-0">
              <div className="bg-[#192420] rounded-2xl p-8">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={20}
                      className="text-[#1FFFA5] fill-[#1FFFA5]"
                    />
                  ))}
                </div>
                <blockquote className="text-[#F5F5F5] text-base leading-relaxed mb-8">
                  "They delivered a landing page better than agencies charging
                  10x more. My conversion rate doubled within the first week!"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12  rounded-full flex items-center justify-center flex-shrink-0">
                    <Image
                      src={client2}
                      className="w-full h-full"
                      alt="client Image"
                    />
                  </div>
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
            <div className="w-full max-w-md flex-shrink-0 mr-6">
              <div className="bg-[#192420] rounded-2xl p-8">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={20}
                      className="text-[#1FFFA5] fill-[#1FFFA5]"
                    />
                  ))}
                </div>
                <blockquote className="text-[#F5F5F5] text-base leading-relaxed mb-8">
                  "They delivered a landing page better than agencies charging
                  10x more. My conversion rate doubled within the first week!"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12  rounded-full flex items-center justify-center flex-shrink-0">
                    <Image
                      src={client3}
                      className="w-full h-full"
                      alt="client Image"
                    />
                  </div>
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
          </div>
          <div className="flex gap-6">
            <div className="w-full max-w-md flex-shrink-0">
              <div className="bg-[#192420] rounded-2xl p-8">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={20}
                      className="text-[#1FFFA5] fill-[#1FFFA5]"
                    />
                  ))}
                </div>
                <blockquote className="text-[#F5F5F5] text-base leading-relaxed mb-8">
                  "They delivered a landing page better than agencies charging
                  10x more. My conversion rate doubled within the first week!"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12  rounded-full flex items-center justify-center flex-shrink-0">
                    <Image
                      src={client}
                      className="w-full h-full"
                      alt="client Image"
                    />
                  </div>
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
            <div className="w-full max-w-md flex-shrink-0 mr-6">
              <div className="bg-[#192420] rounded-2xl p-8">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={20}
                      className="text-[#1FFFA5] fill-[#1FFFA5]"
                    />
                  ))}
                </div>
                <blockquote className="text-[#F5F5F5] text-base leading-relaxed mb-8">
                  "They delivered a landing page better than agencies charging
                  10x more. My conversion rate doubled within the first week!"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12  rounded-full flex items-center justify-center flex-shrink-0">
                    <Image
                      src={client}
                      className="w-full h-full"
                      alt="client Image"
                    />
                  </div>
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
          </div>
        </Marquee>
        <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-[#151E1A] to-transparent z-10 pointer-events-none"></div>
      </div>

      {/* CHANGE: NEW - Mobile Marquee - Shows 1 card at a time */}
      <div className="block md:hidden relative">
        <div className="absolute left-0 top-0 w-12 h-full bg-gradient-to-r from-[#151E1A] to-transparent z-10 pointer-events-none"></div>
        <Marquee pauseOnHover>
          <div className="w-full max-w-sm mx-auto mr-4">
            <div className="bg-[#192420] rounded-2xl p-6">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className="text-[#1FFFA5] fill-[#1FFFA5]"
                  />
                ))}
              </div>
              <blockquote className="text-[#F5F5F5] text-sm leading-relaxed mb-6">
                "They delivered a landing page better than agencies charging 10x
                more. My conversion rate doubled within the first week!"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10  rounded-full flex items-center justify-center flex-shrink-0">
                  <Image
                    src={client}
                    className="w-full h-full"
                    alt="client Image"
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">
                    Sarah Johnson
                  </h4>
                  <p className="text-[#F5F5F5] text-xs opacity-80">
                    SaaS Founder
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-sm mx-auto mr-4">
            <div className="bg-[#192420] rounded-2xl p-6">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className="text-[#1FFFA5] fill-[#1FFFA5]"
                  />
                ))}
              </div>
              <blockquote className="text-[#F5F5F5] text-sm leading-relaxed mb-6">
                "They delivered a landing page better than agencies charging 10x
                more. My conversion rate doubled within the first week!"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10  rounded-full flex items-center justify-center flex-shrink-0">
                  <Image
                    src={client}
                    className="w-full h-full"
                    alt="client Image"
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">
                    Sarah Johnson
                  </h4>
                  <p className="text-[#F5F5F5] text-xs opacity-80">
                    SaaS Founder
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-sm mx-auto mr-4">
            <div className="bg-[#192420] rounded-2xl p-6">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className="text-[#1FFFA5] fill-[#1FFFA5]"
                  />
                ))}
              </div>
              <blockquote className="text-[#F5F5F5] text-sm leading-relaxed mb-6">
                "They delivered a landing page better than agencies charging 10x
                more. My conversion rate doubled within the first week!"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10  rounded-full flex items-center justify-center flex-shrink-0">
                  <Image
                    src={client}
                    className="w-full h-full"
                    alt="client Image"
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">
                    Sarah Johnson
                  </h4>
                  <p className="text-[#F5F5F5] text-xs opacity-80">
                    SaaS Founder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Marquee>
        <div className="absolute right-0 top-0 w-12 h-full bg-gradient-to-l from-[#151E1A] to-transparent z-10 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default ClientsMarquee;
