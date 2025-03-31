import aboutHeroImage from "@/assets/imgs/about_hero_image.png";
import aboutHeroBg from "@/assets/svgs/about-us/about_hero_background.svg";

export const AboutHero = () => {
  return (
    <div
      className={
        "w-full relative h-[600px] sm:h-[800px] md:h-max pt-12 overflow-hidden"
      }
    >
      {/* Background */}
      <div className="absolute top-0 left-0 w-full z-0 2xl:-top-[200px]">
        <img
          src={aboutHeroBg}
          className="w-full object-cover object-center h-[600px] md:h-[700px] xl:h-full"
        />
      </div>

      <div className="w-[90%] max-w-5xl mx-auto flex flex-col gap-6 md:gap-10 items-center relative z-10">
        <h1 className="font-eudoxus-bold text-[32px] sm:text-[64px] lg:text-[98px] py-5 px-2 text-white text-center">
          About Us
        </h1>

        <p className="text-[#BEC0CA] font-inter font-medium text-base md:text-xl max-w-3xl text-center">
          At Cartwey, we’re reimagining the in-store shopping experience—making
          it faster, smarter, and truly checkout-free. No more long queues, no
          more unnecessary delays. Just scan, pay, and go. Simple.
        </p>

        <div>
          <img src={aboutHeroImage} />
        </div>
      </div>
    </div>
  );
};
