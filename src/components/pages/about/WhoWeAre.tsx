import scanHowItWorks from "@/assets/svgs/scan_how_it_works.svg";
import { TeamMemberCard } from "@/components/card";
import { whoWeAre } from "@/constants";

export const WhoWeAre = () => {
  return (
    <div className="w-full py-20">
      <div className="w-[90%] mx-auto max-w-7xl">
        {/* Header section */}
        <div className="flex flex-col items-center gap-10">
          <div className="flex items-center mx-auto gap-5">
            <h2 className="font-eudoxus-bold text-[#0D4C3B] text-3xl sm:text-5xl text-center">
              Why Cartwey?
            </h2>
            <img src={scanHowItWorks} alt="" />
          </div>

          <p className="max-w-[690px] text-xl text-black-60 font-inter text-center">
            We’re a passionate team of innovators, developers, and retail
            enthusiasts who’ve experienced the pain of long queues and clunky
            POS systems. Cartwey is our answer to a modern retail world that
            values speed, simplicity, and smart technology.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-10 gap-8">
          {whoWeAre.map((item) => (
            <TeamMemberCard {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
