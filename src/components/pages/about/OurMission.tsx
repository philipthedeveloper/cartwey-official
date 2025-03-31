import scanHowItWorks from "@/assets/svgs/scan_how_it_works.svg";
import { OurMissionCard } from "@/components/card";
import { ourMissionAndVission } from "@/constants";

export const OurMission = () => {
  return (
    <div className="w-full py-20">
      <div className="w-[90%] mx-auto max-w-7xl">
        <div className="flex justify-between items-center flex-col lg:flex-row gap-6">
          <div className="flex items-center gap-4 lg:gap-6">
            <h2 className="font-eudoxus-bold text-[#0D4C3B] text-2xl sm:text-3xl md:text-4xl xl:text-5xl whitespace-normal sm:whitespace-nowrap">
              Our Mission & Vission
            </h2>
            <img
              src={scanHowItWorks}
              alt=""
              className="w-8.5 h-8.5 sm:h-10 sm:w-10 md:h-12 md:w-12"
            />
          </div>

          <p className="max-w-[540px] text-base sm:text-lg md:text-xl text-black-60 font-inter font-medium text-center lg:text-right">
            Empowering shoppers for a seamless shopping experience.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mt-6 sm:mt-8 md:mt-10">
          {ourMissionAndVission.map((item) => (
            <OurMissionCard {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
