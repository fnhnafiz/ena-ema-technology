
import ClientsMarquee from "./ClientsMarquee";
const ClientsReviews = () => {
 
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
        <ClientsMarquee/>
      </div>
    </div>
  );
};

export default ClientsReviews;
