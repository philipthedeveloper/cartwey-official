import scanHowItWorks from "@/assets/svgs/scan_how_it_works.svg";
import phoneIcon from "@/assets/svgs/contact-us/phone.svg";
import mailIcon from "@/assets/svgs/contact-us/mail.svg";
import locationIcon from "@/assets/svgs/contact-us/location.svg";
import instagramIcon from "@/assets/svgs/contact-us/instagram.svg";
import twitterIcon from "@/assets/svgs/contact-us/twitter.svg";
import linkedinIcon from "@/assets/svgs/contact-us/linkedin.svg";
import { Button, FormGroup } from "@/components/form";
import paperIcon from "@/assets/svgs/paper_icon.svg";

export const ContactUs = () => {
  return (
    <div className="w-full py-30 pb-0 md:pb-20">
      <div className="w-[90%] mx-auto max-w-7xl">
        <div className="flex justify-between items-center flex-col sm:flex-row gap-6">
          <div className="flex items-center gap-6 sm:gap-10">
            <h2 className="font-eudoxus-bold text-[#0D4C3B] text-3xl sm:text-5xl">
              Contact Us
            </h2>
            <img src={scanHowItWorks} alt="" />
          </div>

          <p className="max-w-[540px] text-xl text-black-60 font-inter font-medium text-left sm:text-right">
            Experience a rapid and secure payment system that guarantees
            seamless transactions, providing you with a smooth and reliable
            payment experience.
          </p>
        </div>

        {/* Get in touch */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-25 mt-17.5 py-4.5 justify-between">
          <div className="max-w-[350px]">
            <h3 className="font-eudoxus-bold text-primary text-[32px] leading-[36px] underline mb-11">
              Get In Touch
            </h3>

            <ul className="flex flex-col gap-6">
              <li className="flex items-center gap-5">
                <img src={phoneIcon} />
                <a
                  href="tel:+2348058197505"
                  className="font-inter text-lg text-black-80"
                >
                  +234 805 819 750 5
                </a>
              </li>
              <li className="flex items-center gap-5">
                <img src={mailIcon} />
                <a
                  href="mailto:cartwey1@gmail.com"
                  className="font-inter text-lg text-black-80"
                >
                  cartwey1@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-5">
                <img src={locationIcon} />
                <p className="font-inter text-lg text-black-80">
                  007 cartwey’s location. Future of Shopping District, Tech
                  Legends States
                </p>
              </li>
            </ul>
          </div>

          {/* Contact form */}
          <div className="w-full flex justify-end">
            <form className="bg-white w-full flex flex-col max-w-[700px] gap-6 rounded-2xl py-6 md:py-10 lg:py-16 p-4 sm:p-6 md:p-9 lg:px-13">
              <FormGroup
                name="full_name"
                label="Full Name"
                placeholder="Enter your full name"
                labelClassName="font-medium text-[#000000BF]"
              />
              <FormGroup
                name="email"
                label="Email Address"
                placeholder="example@example.com"
                labelClassName="font-medium text-[#000000BF]"
              />
              <FormGroup
                name="message"
                label="Message"
                placeholder="Type here..."
                type="textarea"
                labelClassName="font-medium text-[#000000BF]"
              />
              <Button className="gap-2.5 cursor-pointer hover:opacity-80 transition-all duration-500">
                <span
                  className="font-inter font-semibold text-black text-lg"
                  style={{ letterSpacing: "2%" }}
                >
                  Send Message
                </span>
                <img src={paperIcon} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
