import placeholderImage from "@/assets/svgs/placeholder_img.svg";
import facebookIcon from "@/assets/svgs/team/facebook.svg";
import instagramIcon from "@/assets/svgs/team/instagram.svg";
import twitterIcon from "@/assets/svgs/team/twitter.svg";

type TeamMemberCardProps = {
  name: string;
  role: string;
  quote: string;
  facebook: string;
  instagram: string;
  twitter: string;
};

export const TeamMemberCard = ({
  name,
  role,
  quote,
  facebook,
  instagram,
  twitter,
}: TeamMemberCardProps) => {
  return (
    <div className="w-full rounded-[12px] overflow-hidden">
      <div>
        <img src={placeholderImage} className="w-full object-cover" />
      </div>

      <div className="bg-white p-4">
        <h4 className="font-inter font-semibold text-lg leading-[30px] text-[#282828]">
          {name}
        </h4>
        <p className="font-inter text-sm leading-[22px] text-[#3E3E59]">
          {role}
        </p>
        <p className="font-inter text-sm leading-[22px] text-black-40 mt-2 mb-6">
          {quote}
        </p>
        <div className="flex gap-4 items-center">
          <a
            href={facebook}
            target="_blank"
            className="w-9 h-9 bg-secondary rounded-full flex items-center justify-center"
          >
            <img src={facebookIcon} />
          </a>
          <a
            href={instagram}
            target="_blank"
            className="w-9 h-9 bg-secondary rounded-full flex items-center justify-center"
          >
            <img src={instagramIcon} />
          </a>
          <a
            href={twitter}
            target="_blank"
            className="w-9 h-9 bg-secondary rounded-full flex items-center justify-center"
          >
            <img src={twitterIcon} />
          </a>
        </div>
      </div>
    </div>
  );
};
