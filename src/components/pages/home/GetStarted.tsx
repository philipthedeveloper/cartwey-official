import scanHowItWorks from "@/assets/svgs/scan_white.svg";
import playStore from "@/assets/svgs/playstore.svg";
import appStore from "@/assets/svgs/appstore.svg";
import getStarted from "@/assets/svgs/get_started.svg";

export const GetStarted = () => {
  return (
    <div className="pt-16 lg:pt-24 bg-[#0D503F]" id="get-started">
      <div className="w-[90%] max-w-7xl mx-auto flex flex-col items-center ">
        <div className="flex items-center gap-4 lg:gap-10 py-2.5">
          <h2 className="font-eudoxus-bold text-white text-2xl sm:text-3xl md:text-4xl lg:5xl">
            Get Started
          </h2>
          <img
            src={scanHowItWorks}
            alt=""
            className="w-8.5 h-8.5 sm:h-10 sm:w-10 md:h-12 md:w-12"
          />
        </div>

        <p className="text-[#E1E2E9] font-medium font-inter text-center text-sm sm:text-base md:text-lg py-5 max-w-[600px] leading-loose mx-6 sm:mx-4 md:mx-0">
          Steer your shopping experience in a new direction with us. Scan, Cart,
          and Checkout! Join the revolution today!. Just a click to start with
          us.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-5 mb-20">
          <a
            className="border-none outline-none overflow-hidden w-[250px] bg-white rounded-full h-15 flex justify-center items-center"
            href="https://play.google.com/store/apps/details?id=com.cartwey"
            target="_blank"
          >
            <img src={playStore} />
          </a>
          <button className="border-none outline-none overflow-hidden w-[250px] bg-[#1C1D22] rounded-full h-15 flex justify-center items-center">
            <img src={appStore} />
          </button>
        </div>

        <div>
          <img src={getStarted} />
        </div>
      </div>
    </div>
  );
};
