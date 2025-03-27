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
    <div className="mt-15 flex flex-col gap-8 max-w-[620px] mx-auto">
      <div className="w-full rounded-[12px] overflow-hidden relative border-3 border-main">
        <img src={cardBackground} />

        {/* Overlay */}
        <div className="absolute w-full h-full z-10 top-0 left-0 right-0 bottom-0">
          {/* Vector */}
          <div
            className="absolute bottom-0 left-0 flex justify-start items-center bg-left-top h-[90px] w-full pl-[54px] pr-8"
            style={{ background: `url("${cardOverlayVector}")` }}
          >
            <p className="font-eudoxus-bold text-black-90 text-2xl">
              {heading}
            </p>
            <div className="ml-auto flex items-center gap-14.5">
              <div className="h-1.5 w-21.5 rounded-full bg-white"></div>
              <img src={cardIcon} />
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className="font-inter text-xl text-black-60">{content}</p>
      </div>
    </div>
  );
};
