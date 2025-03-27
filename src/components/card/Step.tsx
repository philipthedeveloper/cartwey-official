type StepCardProps = {
  url: string;
};

export const Step = ({ url }: StepCardProps) => {
  return (
    <div className="bg-main w-[90%] md:w-full max-w-[350px] sm:max-w-[400px] md:max-w-[450px] mx-auto overflow-hidden">
      <video
        src={url}
        className="w-full h-full object-contain"
        autoPlay
        muted
        loop
      />
    </div>
  );
};
