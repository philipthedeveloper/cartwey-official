import scanHowItWorks from "@/assets/svgs/scan_how_it_works.svg";
import { OurMissionCard } from "@/components/card";
import { ourMissionAndVission } from "@/constants";

export const OurMission = () => {
  return (
    <div className="w-full py-20">
      <div className="w-[90%] mx-auto max-w-7xl">
        <div className="flex justify-between items-center flex-col sm:flex-row gap-6">
          <div className="flex items-center gap-6 sm:gap-10">
            <h2 className="font-eudoxus-bold text-[#0D4C3B] text-3xl sm:text-5xl">
              Our Mission & Vission
            </h2>
            <img src={scanHowItWorks} alt="" />
          </div>

          <p className="max-w-[540px] text-xl text-black-60 font-inter font-medium text-left sm:text-right">
            Empowering shoppers for a seamless shopping experience.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4.5 md:gap-12">
          {ourMissionAndVission.map((item) => (
            <OurMissionCard {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
