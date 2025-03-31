import scanHowItWorks from "@/assets/svgs/scan_how_it_works.svg";
import { TeamMemberCard } from "@/components/card";
import { whoWeAre } from "@/constants";
import whoWeAreImage from "@/assets/imgs/wo_we_are.png";
import communityLogo from "@/assets/imgs/join_community.svg";

export const WhoWeAre = () => {
  return (
    <div className="w-full py-20 bg-white">
      <div className="w-[90%] mx-auto max-w-7xl">
        {/* Header section */}
        <div className="flex flex-col items-center gap-10 mb-6">
          <div className="flex items-center mx-auto gap-5">
            <h2 className="font-eudoxus-bold text-[#0D4C3B] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
              Who We Are
            </h2>
            <img
              src={scanHowItWorks}
              alt=""
              className="w-8.5 h-8.5 sm:h-10 sm:w-10 md:h-12 md:w-12"
            />
          </div>

          <p className="max-w-[600px] md:max-w-[690px] text-base sm:text-lg md:text-xl text-black-60 font-inter text-center leading-relaxed">
            We’re a passionate team of{" "}
            <span className="text-primary font-semibold">Innovators</span>,{" "}
            <span className="text-primary font-semibold">Developers</span>, and{" "}
            <span className="text-primary font-semibold">
              Retail Enthusiasts
            </span>{" "}
            who’ve experienced the pain of long queues and clunky POS systems.
            Cartwey is our answer to a modern retail world that values speed,
            simplicity, and smart technology.
          </p>
        </div>

        {/* Cards */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-10 gap-8">
          {whoWeAre.map((item) => (
            <TeamMemberCard {...item} />
          ))}
        </div> */}

        {/* Who we are image */}
        <div>
          <img src={whoWeAreImage} />
        </div>

        {/* Join community */}
        <div className="my-18">
          <div className="w-full max-w-[748px] mx-auto rounded-2xl bg-primary py-6 px-8 flex flex-col gap-5 relative overflow-hidden">
            <h3 className="text-center font-inter font-semibold text-white text-lg sm:text-[28px] leading-relaxed relative z-10">
              Join the Cartwey Revolution
            </h3>

            <p className="text-center font-inter text-sm sm:text-base md:text-lg text-white leading-relaxed relative z-10">
              Be part of a team shaping the future of retail. Explore our
              solutions, share your ideas, and let’s revolutionize shopping
              together!
            </p>

            <img
              src={communityLogo}
              className="absolute z-0 right-0 bottom-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
