import BannerSlider from "@/components/BannerSlider";
import CaseStudies from "@/components/CaseStudies";
import ChooseYourPricing from "@/components/ChooseYourPricing";
import ClientsReviews from "@/components/ClientsReviews";
import FaqQuestionSection from "@/components/FaqQuestionSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import ProcessTimelineSection from "@/components/ProcessTimelineSection";
import RealCustomerSection from "@/components/RealCustomerSection";
import SwipperSlider from "@/components/SwipperSlider";
import TrustSection from "@/components/TrustSection";

export default function Home() {
  return (
    <>
      <header>
        <div className="bg-[#151E1A]">
          <Header />
          {/* <BannerSlider /> */}
          <SwipperSlider />
          <TrustSection />
        </div>
      </header>
      <main className="bg-[#0A0F0D] overflow-hidden">
        <div className="bg-[#0A0F0D]">
          <CaseStudies />
          <ChooseYourPricing />
        </div>
        <div className="bg-[#151E1A]">
          <ProcessTimelineSection />
          <ClientsReviews />
          <FaqQuestionSection />
          <RealCustomerSection />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
