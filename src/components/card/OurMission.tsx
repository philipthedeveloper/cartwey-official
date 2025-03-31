import cardOverlayVector from "@/assets/svgs/mission_card_overlay.svg";

type CardProps = {
  heading: string;
  content: string;
  cardBackground: string;
  cardIcon: string;
};

export const OurMissionCard = ({
  heading,
  content,
  cardBackground,
  cardIcon,
}: CardProps) => {
  return (
    <div className="flex flex-col gap-8 max-w-[620px] mx-auto">
      <div className="w-full rounded-[12px] overflow-hidden relative border-3 border-main">
        <img src={cardBackground} />

        {/* Overlay */}
        <div className="absolute w-full h-full z-10 top-0 left-0 right-0 bottom-0">
          {/* Footer */}
          <div className="absolute bottom-0 left-0 flex justify-start items-center py-2 sm:py-4 w-full px-6 sm:px-8 md:px-10 xl:pl-14">
            {/* Vector background */}
            <img
              src={cardOverlayVector}
              alt=""
              className="absolute left-0 bottom-0 z-0"
            />

            <p className="font-eudoxus-bold text-black-90 text-lg sm:text-xl md:text-2xl relative z-10">
              {heading}
            </p>
            <div className="ml-auto flex items-center gap-6 sm:gap-8 md:gap-10 xl:gap-14.5 relative z-10">
              <div className="h-1.5 w-21.5 rounded-full bg-white hidden sm:block"></div>
              <img
                src={cardIcon}
                className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className="font-inter text-base sm:text-lg md:text-xl text-black-60 leading-relaxed">
          {content}
        </p>
      </div>
    </div>
  );
};
