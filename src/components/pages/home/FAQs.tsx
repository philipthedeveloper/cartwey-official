import question from "@/assets/svgs/question.svg";
import { Accordion } from "@/components/accordion";
import faqs from "@/data/faqs.json";

export const FAQs = () => {
  return (
    <div className="pt-[100px] pb-[148px]">
      <div className="w-[90%] mx-auto max-w-7xl flex gap-16">
        <div className="flex flex-col gap-18 items-center max-w-[410px]">
          <h1 className="text-[#0D503F] font-eudoxus-bold text-5xl leading-[71px]">
            Frequently Asked Questions
          </h1>
          <div className="bg-white rounded-full w-[300px] h-[300px]">
            <img src={question} />
          </div>
        </div>
        <div className="flex-1">
          <p className="font-inter font-medium text-[#37393F] text-2xl">
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
