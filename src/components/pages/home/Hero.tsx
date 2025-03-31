import heroLogo from "@/assets/svgs/hero_logo.svg";
import { Link } from "react-router-dom";
import joinWaitlist from "@/assets/svgs/join_waitlist.svg";
import serviceCards from "@/assets/svgs/arced_service_cards.svg";

const HeroVideo = () => {
  return (
    <div className="mx-auto max-w-7xl w-[90%] relative max-h-[400px] overflow-hidden">
      <img src={serviceCards} />
      <div className="w-full h-10 lg:h-30 absolute bottom-0 left-0 right-0 bg-main"></div>
    </div>
  );
};

export const Hero = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center gap-7 max-w-6xl mx-auto w-[90%] my-16 sm:my-20 md:my-32">
        <div>
          <img
            src={heroLogo}
            alt="Cart"
            className="w-[84px] lg:w-[138px] h-[70.37px] lg:h-[115.45px]"
          />
        </div>

        <h1
          className="font-eudoxus-extrabold text-3xl sm:text-[64px] lg:text-[105px] lg:leading-[120px] text-center text-black-100 max-w-[650px] lg:max-w-max"
          style={{
            letterSpacing: "-3%",
          }}
        >
          Your <span className="whitespace-nowrap">Self-Checkout</span> App
        </h1>

        <p className="text-[#06040E] font-inter sm:text-xl text-center max-w-[744px]">
          Revolutionizing the shopping experience by empowering businesses with
          a fast, convenient, and secure self-checkout solution for their
          customers.
        </p>

        {/* Actions */}
        <div className="flex items-center gap-7 flex-col sm:flex-row">
          <a
            className="text-white font-inter font-medium px-9 py-5 bg-[#0A4434] rounded-2xl flex justify-center items-center hover:opacity-85 duration-300 transition-colors"
            href={"#get-started"}
          >
            Get Started
          </a>

          <a className="flex items-center gap-4" href="#join-waitlist">
            <span className="text-[#0D503F] font-eudoxus-bold text-lg">
              Join Waitlist
            </span>
            <img src={joinWaitlist} alt="Join Waitlist" />
          </a>
        </div>
      </div>

      <HeroVideo />
    </div>
  );
};
