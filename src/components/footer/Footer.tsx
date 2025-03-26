import footerLogo from "@/assets/svgs/footer_logo.svg";
import instagram from "@/assets/svgs/instagram.svg";
import twitter from "@/assets/svgs/twitter.svg";
import linkedin from "@/assets/svgs/linkedin.svg";

export const Footer = () => {
  return (
    <div className="bg-[#0D503F] py-14 px-14.5">
      <div className="w-[90%] mx-auto max-w-7xl grid grid-cols-3">
        <div>
          <img src={footerLogo} />
          <div className="mt-10.5">
            <p className="font-inter text-white text-lg">
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
          <div className="mt-10.5">
            <p className="font-medium font-inter text-white text-lg">Home</p>
            <p className="font-medium font-inter text-white text-lg">
              About Us
            </p>
            <p className="font-medium font-inter text-white text-lg">Service</p>
            <p className="font-medium font-inter text-white text-lg">
              Contact Us
            </p>
          </div>
        </div>

        <div>
          <h5 className="text-[#F9BD00] font-inter font-bold text-2xl">
            Contact Links
          </h5>
          <div className="mt-10.5">
            <p className="font-medium font-inter text-white text-lg">
              Privacy & Policy
            </p>
            <p className="font-medium font-inter text-white text-lg">
              Terms of Use
            </p>
            <p className="font-medium font-inter text-white text-lg">FAQs</p>
          </div>
        </div>
      </div>
      <p className="text-center text-white font-inter text-lg mt-25">
        @2025 Cartwey. All rights reserved
      </p>
    </div>
  );
};
