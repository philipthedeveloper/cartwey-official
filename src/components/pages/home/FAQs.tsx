import question from "@/assets/svgs/question.svg";
import { Accordion } from "@/components/accordion";
import faqs from "@/data/faqs.json";

export const FAQs = () => {
  return (
    <div className="pt-[100px] pb-[148px]" id="faqs">
      <div className="w-[90%] mx-auto max-w-7xl flex gap-10 lg:gap-16 flex-col lg:flex-row">
        <div className="flex flex-col gap-10 lg:max-w-[400px] items-center sm:items-start">
          <h1 className="text-[#0D503F] font-eudoxus-bold text-3xl sm:text-[40px] md:text-[44px] lg:text-5xl lg:leading-[71px] text-center sm:text-left">
            Frequently Asked Questions
          </h1>
          <div className="bg-white rounded-full w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] hidden lg:block">
            <img src={question} />
          </div>
        </div>

        <div className="flex-1">
          <p className="font-inter font-medium text-[#37393F] text-sm sm:text-base md:text-xl lg:text-2xl leading-loosed text-center sm:text-left">
            A good way to know how you feel about us. Here are some tips to get
            started with.
          </p>
          <div className="mt-8">
            {faqs.map((faq) => (
              <Accordion {...faq} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
