import lockIcon from "@/assets/svgs/privacy/lock.svg";
import vectorLeft from "@/assets/svgs/privacy/vector_left.svg";
import vectorRight from "@/assets/svgs/privacy/vector_right.svg";

export const PrivacyHero = () => {
  return (
    <div className="bg-primary py-24 relative flex justify-center items-center overflow-hidden">
      <div className="py-6 flex justify-center items-center flex-col gap-6 relative z-20">
        <div>
          <img src={lockIcon} className="w-24 h-24" />
        </div>
        <h1 className="font-eudoxus-bold text-[98px] leading-[100%] text-white text-center">
          Privacy & Policy
        </h1>
      </div>

      {/* Vectors */}
      <div className="absolute left-0">
        <img src={vectorLeft} />
      </div>
      <div className="absolute right-0">
        <img src={vectorRight} />
      </div>
    </div>
  );
};
