import scanHowItWorks from "@/assets/svgs/scan_white.svg";
import playStore from "@/assets/svgs/playstore.svg";
import appStore from "@/assets/svgs/appstore.svg";
import getStarted from "@/assets/svgs/get_started.svg";

export const GetStarted = () => {
  return (
    <div
      className="flex flex-col items-center pt-24 bg-[#0D503F]"
      id="get-started"
    >
      <div className="flex items-center gap-6 sm:gap-10 py-2.5">
        <h2 className="font-eudoxus-bold text-white text-3xl sm:text-5xl">
          Get Started
        </h2>
        <img src={scanHowItWorks} alt="" />
      </div>

      <p className="text-[#E1E2E9] font-medium font-inter text-center text-lg py-5 max-w-[600px]">
        Steer your shopping experience in a new direction with us. Scan, Cart,
        and Checkout! Join the revolution today!. Just a click to start with us.
      </p>

      <div className="flex items-center justify-center gap-6 mt-5 mb-20">
        <button className="border-none outline-none">
          <img src={playStore} />
        </button>
        <button className="border-none outline-none">
          <img src={appStore} />
        </button>
      </div>

      <div>
        <img src={getStarted} />
      </div>
    </div>
  );
};
