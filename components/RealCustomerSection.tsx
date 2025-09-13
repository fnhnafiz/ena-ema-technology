import LoginPage from "./LoginPage";

const RealCustomerSection = () => {
  return (
    <>
      <div className="bg-[#0A0F0D] py-22">
        {/* Heading of heeader */}
        <div className="max-w-6xl mx-auto flex flex-col justify-center items-center gap-y-4 md:px-[130px]">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center text-[#F5F5F5] leading-9 md:leading-[72px] tracking-tight md:tracking-[-4px] lg:tracking-[-1px]">
            Ready to Turn Visitors Into{" "}
            <span className="text-[#1FFFA5]">Real Customers?</span>
          </h1>
          <p className="text-[#F5F5F5] text-center text-[18px] px-6 md:px-32">
            Don't settle for an average page. Get a premium, conversion-focused
            landing page that pays for itself.
          </p>
        </div>
        <div className="mb-12">
          <LoginPage />
        </div>
      </div>
    </>
  );
};

export default RealCustomerSection;
