import footerLogo from "@/public/Logo.png";
import linkedIn from "@/public/linkedin.png";
import facebook from "@/public/social-icon/qlementine-icons_facebook-16.png";
import insta from "@/public/social-icon/lets-icons_insta.png";
import Be from "@/public/social-icon/ri_behance-fill.png";
import drible from "@/public/social-icon/icon-park-outline_dribble.png";
import Image from "next/image";
const Footer = () => {
  return (
    <div className=" bg-[#1FFFA5] w-full px-2">
      <div className="flex items-center justify-between container mx-auto py-16">
        <div className="w-6/12">
          <Image
            src={footerLogo}
            className="w-32 h-7 md:w-42 md:h-9"
            alt="footer logo"
          />
        </div>
        <div className="hidden md:block">
          <p className="text-[12px] text-[#0A0F0D]">
            © All rights reserved to Ena Ema Technologies
          </p>
        </div>
        <div className="md:flex items-center gap-4 hidden md:block">
          <Image src={linkedIn} className="w-5 h-5" alt="icon" />
          <Image src={facebook} className="w-5 h-5" alt="icon" />
          <Image src={insta} className="w-5 h-5" alt="icon" />
          <Image src={Be} className="w-5 h-5" alt="icon" />
          <Image src={drible} className="w-5 h-5" alt="icon" />
        </div>
        <div className="md:hidden w-6/12 space-y-4">
          <div>
            <p className="text-[12px] text-[#0A0F0D]">
              © All rights reserved to Ena Ema Technologies
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Image src={linkedIn} className="w-5 h-5" alt="icon" />
            <Image src={facebook} className="w-5 h-5" alt="icon" />
            <Image src={insta} className="w-5 h-5" alt="icon" />
            <Image src={Be} className="w-5 h-5" alt="icon" />
            <Image src={drible} className="w-5 h-5" alt="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
