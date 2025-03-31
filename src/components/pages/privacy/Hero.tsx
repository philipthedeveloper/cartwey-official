import lockIcon from "@/assets/svgs/privacy/lock.svg";
import vectorLeft from "@/assets/svgs/privacy/vector_left.svg";
import vectorRight from "@/assets/svgs/privacy/vector_right.svg";

export const PrivacyHero = () => {
  return (
    <div className="bg-primary py-21 sm:py-24 relative flex justify-center items-center overflow-hidden">
      <div className="py-6 flex justify-center items-center flex-col gap-6 relative z-20">
        <div>
          <img src={lockIcon} className="w-16 md:w-24 h-16 md:h-24" />
        </div>
        <h1 className="font-eudoxus-bold text-3xl sm:text-[64px] md:text-7xl lg:text-8xl leading-[100%] text-white text-center">
          Privacy & Policy
        </h1>
      </div>

      {/* Vectors */}
      <div className="absolute -left-7 sm:left-0 h-2/5 lg:h-3/5">
        <img src={vectorLeft} className="h-full object-contain" />
      </div>
      <div className="absolute -right-8 sm:right-0 h-2/5 lg:h-3/5">
        <img src={vectorRight} className="h-full object-contain" />
      </div>
    </div>
  );
};
