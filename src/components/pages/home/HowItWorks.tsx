import scanHowItWorks from "@/assets/svgs/scan_how_it_works.svg";
import leftArrow from "@/assets/svgs/left_navigate_how.svg";
import rightArrow from "@/assets/svgs/right_navigate_how.svg";
import SlickSlider from "react-slick";
import { sliderSettings, stepVideos } from "@/constants";
import { Step } from "@/components/card";

export const Slider = () => {
  return (
    <div className="w-[206px] h-[84px] rounded-full bg-[#E1E2E9] hidden sm:flex justify-between items-center px-3.5">
      <button className="w-16 h-16 rounded-full bg-white flex items-center justify-center cursor-pointer">
        <img src={leftArrow} />
      </button>
      <button className="w-16 h-16 rounded-full bg-white flex items-center justify-center cursor-pointer">
        <img src={rightArrow} />
      </button>
    </div>
  );
};

export const HowItWorks = () => {
  return (
    <div className="w-[90%] mx-auto max-w-7xl my-20" id="how-it-works">
      <div className="flex items-center gap-6 sm:gap-10 mb-18">
        <h2 className="font-eudoxus-bold text-[#0D4C3B] text-3xl sm:text-5xl">
          How it works
        </h2>
        <img src={scanHowItWorks} alt="" />
      </div>

      <div className="flex justify-between my-5">
        <p className="max-w-[590px] text-xl text-black-60 font-inter font-medium">
          At Cartwey, we're dedicated to transforming your shopping experience
          by integrating cutting-edge technology that allows you to cart
          products with ease.
        </p>

        {/* <Slider /> */}
      </div>
      <div className="w-full relative z-10 mb-[120px] mt-24">
        <SlickSlider {...sliderSettings}>
          {stepVideos.map((video) => (
            <Step {...video} />
          ))}
        </SlickSlider>
      </div>
    </div>
  );
};
