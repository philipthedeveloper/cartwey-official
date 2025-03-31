import scanHowItWorks from "@/assets/svgs/scan_how_it_works.svg";
import { WhyUs } from "@/components/card";
import { whyUs } from "@/constants";

export const WhyCartwey = () => {
  return (
    <div className="my-18 md:my-18 lg:my-36">
      <div className="w-[90%] mx-auto max-w-7xl">
        <div className="flex justify-between items-center flex-col lg:flex-row gap-10 lg:gap-6">
          <div className="flex items-center gap-4 lg:gap-6">
            <h2 className="font-eudoxus-bold text-[#0D4C3B] text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Why Cartwey?
            </h2>
            <img
              src={scanHowItWorks}
              alt=""
              className="w-8.5 h-8.5 sm:h-10 sm:w-10 md:h-12 md:w-12"
            />
          </div>

          <p className="max-w-[546px] lg:max-w-[590px] text-lg lg:text-xl text-black-60 font-inter font-medium text-center md:text-left lg:text-right">
            Experience a rapid and secure payment system that guarantees
            seamless transactions, providing you with a smooth and reliable
            payment experience.
          </p>
        </div>

        {/* why use grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 lg:mt-12 gap-y-6 gap-x-4">
          {whyUs.map((reason) => (
            <WhyUs {...reason} />
          ))}
        </div>
      </div>
    </div>
  );
};
