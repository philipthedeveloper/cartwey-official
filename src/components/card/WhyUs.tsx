type WhyUsProps = {
  heading: string;
  description: string;
  iconUrl: string;
};

export const WhyUs = ({ heading, description, iconUrl }: WhyUsProps) => {
  return (
    <div className="bg-[#FFFFFF] rounded-[20px] py-8 px-4 flex flex-col items-center">
      <div className="w-24 h-24 rounded-full bg-[#DBF9F1] overflow-hidden flex items-center justify-center">
        <img src={iconUrl} className="" />
      </div>
      <h4 className="font-eudoxus-bold text-[#137057] text-xl md:text-2xl text-center mt-6">
        {heading}
      </h4>
      <p className="text-center font-inter text-sm sm:text-base md:text-lg text-black-30 mt-3 mx-4 sm:mx-0">
        {description}
      </p>
    </div>
  );
};
