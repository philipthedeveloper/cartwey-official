import whyWait from "@/assets/svgs/why_wait.svg";

const ScanningVideo = () => {
  return (
    <div className="h-[350px] w-full flex-1 bg-[#0D4C3B] rounded-[8px]"></div>
  );
};

export const WhyWait = () => {
  return (
    <div className="py-[210px] relative flex justify-center items-center">
      <img src={whyWait} className="absolute z-0 flex-1 w-full" />
      <div className="w-[90%] mx-auto max-w-7xl">
        <div className="flex justify-between gap-24">
          <ScanningVideo />
          <div className="max-w-[420px] flex flex-col gap-7.5">
            <div className="flex flex-col">
              <h2 className="text-[#2C2D33] font-eudoxus-bold text-[44px] leading-[56px]">
                Why Waiting For
              </h2>
              <h2 className="text-[#2C2D33] font-eudoxus-bold text-[44px] leading-[56px]">
                The Long Queue!
              </h2>
            </div>

            <p className="font-inter font-medium text-[#45464E] text-xl">
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
