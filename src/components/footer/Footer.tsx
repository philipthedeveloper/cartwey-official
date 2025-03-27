import footerLogo from "@/assets/svgs/footer_logo.svg";
import instagram from "@/assets/svgs/instagram.svg";
import twitter from "@/assets/svgs/twitter.svg";
import linkedin from "@/assets/svgs/linkedin.svg";

export const Footer = () => {
  return (
    <div className="bg-[#0D503F] py-14 p-4 md:p-6 lg:px-14.5">
      <div className="w-[90%] mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-4">
        <div>
          <img src={footerLogo} />
          <div className="mt-5">
            <p className="font-inter text-white text-lg max-w-[256px]">
              Reimagining retail for a smarter shopping experience
            </p>
          </div>
          <div className="mt-9 flex items-center gap-5">
            <img src={instagram} />
            <img src={twitter} />
            <img src={linkedin} />
          </div>
        </div>

        <div>
          <h5 className="text-[#F9BD00] font-inter font-bold text-2xl">Link</h5>
          <ul className="mt-5 flex flex-col gap-2">
            <li className="font-medium font-inter text-white text-base">
              <a href="/">Home</a>
            </li>
            <li className="font-medium font-inter text-white text-base">
              <a href="/about">About Us</a>
            </li>
            <li className="font-medium font-inter text-white text-base">
              <a>Service</a>
            </li>
            <li className="font-medium font-inter text-white text-base">
              <a href={"/contact"}>Contact Us</a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-[#F9BD00] font-inter font-bold text-2xl">
            Contact Links
          </h5>
          <ul className="mt-5 flex flex-col gap-2">
            <li className="font-medium font-inter text-white text-base">
              <a href="/privacy">Privacy & Policy</a>
            </li>
            <li className="font-medium font-inter text-white text-base">
              <a>Terms of Use</a>
            </li>
            <li className="font-medium font-inter text-white text-base">
              <a href="#faqs">FAQs</a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center text-white font-inter text-lg mt-25">
        @2025 Cartwey. All rights reserved
      </p>
    </div>
  );
};
