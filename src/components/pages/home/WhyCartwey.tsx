import scanHowItWorks from "@/assets/svgs/scan_how_it_works.svg";
import { WhyUs } from "@/components/card";
import { whyUs } from "@/constants";

export const WhyCartwey = () => {
  return (
    <div className="py-36">
      <div className="w-[90%] mx-auto max-w-7xl">
        <div className="flex justify-between items-center flex-col sm:flex-row gap-6">
          <div className="flex items-center gap-6 sm:gap-10">
            <h2 className="font-eudoxus-bold text-[#0D4C3B] text-3xl sm:text-5xl">
              Why Cartwey?
            </h2>
            <img src={scanHowItWorks} alt="" />
          </div>

          <p className="max-w-[590px] text-xl text-black-60 font-inter font-medium text-left sm:text-right">
            Experience a rapid and secure payment system that guarantees
            seamless transactions, providing you with a smooth and reliable
            payment experience.
          </p>
        </div>

        {/* why use grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-12 gap-y-6 gap-x-4">
          {whyUs.map((reason) => (
            <WhyUs {...reason} />
          ))}
        </div>
      </div>
    </div>
  );
};
