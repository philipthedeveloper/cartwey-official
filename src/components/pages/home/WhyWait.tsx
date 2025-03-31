import whyWait from "@/assets/svgs/why_wait.svg";
import scanningVideoFile from "@/assets/videos/scanning_video_modal.mp4";

const ScanningVideo = () => {
  return (
    <div className="h-[350px] w-full flex-1 bg-[#0D4C3B] rounded-[8px] overflow-hidden">
      <video
        src={scanningVideoFile}
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
      />
    </div>
  );
};

export const WhyWait = () => {
  return (
    <div className="my-20 sm:my-25 relative flex justify-center items-center">
      <img src={whyWait} className="absolute z-0 flex-1 w-full" />
      <div className="w-[90%] mx-auto max-w-7xl relative z-10">
        <div className="flex justify-between gap-9 md:gap-8 xl:gap-24 flex-col lg:flex-row">
          <ScanningVideo />
          <div className="lg:max-w-[420px] flex flex-col gap-4 sm:gap-6 md:gap-7.5">
            <h2 className="text-[#2C2D33] font-eudoxus-bold text-xl sm:text-[32px] md:text-[44px] leading-[56px]">
              Why Waiting For The Long Queue!
            </h2>

            <p className="font-inter font-medium text-[#45464E] text-base sm:text-xl">
              It’s your time to take the step and stop waiting for the long
              queue just to buy a product. We are always a step ahead to deliver
              and serve you the best.
            </p>

            <a
              href="/"
              className="text-[#199473] font-inter font-medium underline text-xl"
            >
              Get to Know More!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
