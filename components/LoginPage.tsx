import {
  User,
  Mail,
  Phone,
  ArrowRight,
  Shield,
  RotateCcw,
  CheckCircle,
  Check,
  Star,
} from "lucide-react";
const LoginPage = () => {
  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Main Form Container */}
        <div
          className="border-2 border-[#2A3C36] p-8 md:p-12 mb-8"
          style={{ boxShadow: "0px 20px 60px rgba(31, 255, 165, 0.1)" }}
        >
          {/* Form Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Name Input */}
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#1FFFA5]">
                <User size={20} />
              </div>
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-transparent border-2 border-[#3a4a5c] rounded-xl px-12 py-4 text-white placeholder-[#9ca3af] focus:border-[#1FFFA5] focus:outline-none transition-colors duration-300"
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#1FFFA5]">
                <Mail size={20} />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent border-2 border-[#3a4a5c] rounded-xl px-12 py-4 text-white placeholder-[#9ca3af] focus:border-[#1FFFA5] focus:outline-none transition-colors duration-300"
              />
            </div>

            {/* Phone Input */}
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#1FFFA5]">
                <Phone size={20} />
              </div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-transparent border-2 border-[#3a4a5c] rounded-xl px-12 py-4 text-white placeholder-[#9ca3af] focus:border-[#1FFFA5] focus:outline-none transition-colors duration-300"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            className="w-full bg-[#1FFFA5] hover:bg-[#1ae89a] text-[#002013] text-sm font-medium md:font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 md:text-lg transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            style={{ boxShadow: "0px 10px 30px rgba(31, 255, 165, 0.3)" }}
          >
            Get my high-converting landing page
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {/* SSL Secure */}
          <div className="hidden md:block md:flex items-center justify-center gap-3 text-[#9ca3af]">
            <Shield size={20} />
            <span className="text-sm font-medium">SSL secure</span>
          </div>
          <div className="flex justify-between items-center">
            {/* SSL Secure */}
            <div className="md:hidden flex items-center justify-center gap-3 text-[#9ca3af]">
              <Shield size={20} />
              <span className="text-sm font-medium">SSL secure</span>
            </div>

            {/* Money-back Guaranteed */}
            <div className="flex items-center justify-center gap-3 text-[#9ca3af]">
              <Check size={20} />
              <span className="text-sm font-medium">Money-back guaranteed</span>
            </div>
          </div>

          {/* Satisfaction Guaranteed */}
          <div className="flex items-center justify-start gap-3 text-[#9ca3af]">
            <Star size={20} />
            <span className="text-sm font-medium">Satisfaction guaranteed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
