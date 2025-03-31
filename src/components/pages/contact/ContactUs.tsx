import scanHowItWorks from "@/assets/svgs/scan_how_it_works.svg";
import phoneIcon from "@/assets/svgs/contact-us/phone.svg";
import mailIcon from "@/assets/svgs/contact-us/mail.svg";
import locationIcon from "@/assets/svgs/contact-us/location.svg";
import instagramIcon from "@/assets/svgs/contact-us/instagram.svg";
import twitterIcon from "@/assets/svgs/contact-us/twitter.svg";
import linkedinIcon from "@/assets/svgs/contact-us/linkedin.svg";
import { Button, FormGroup } from "@/components/form";
import paperIcon from "@/assets/svgs/paper_icon.svg";
import * as yup from "yup";
import { useFormik } from "formik";
import { emailRegex } from "@/constants";
import { useState } from "react";
import toast from "react-hot-toast";
import axios, { AxiosError } from "axios";

export const ContactUs = () => {
  const [submitting, setSubmitting] = useState(false);
  const defaultValues = { email: "", full_name: "", message: "" };

  const validationSchema = yup.object({
    full_name: yup.string().required("Please enter full name"),
    email: yup
      .string()
      .required("Please enter your email")
      .matches(emailRegex, "Invalid email"),
    message: yup.string().required("Please enter your message"),
  });

  const { handleSubmit, ...validation } = useFormik({
    enableReinitialize: false,
    initialValues: defaultValues,
    validationSchema,
    onSubmit: (values) => {
      submitContactRequest(values);
    },
  });

  const submitContactRequest = async (values: any) => {
    try {
      setSubmitting(true);
      const { data } = await axios.post(
        "https://api.cartwey.com/api/contact-us/",
        values
      );
      toast.success(data?.message || "Your request has been submitted");
      validation.resetForm();
    } catch (error) {
      if (error instanceof AxiosError) {
        return toast.error(error.response?.data?.message);
      }
      return toast.error(
        "Unable to submit your request. If this error persist, please contact us."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full py-20 md:py-30 pb-0 md:pb-20">
      <div className="w-[90%] mx-auto max-w-7xl">
        <div className="flex justify-between items-center flex-col lg:flex-row gap-6">
          <div className="flex items-center gap-6">
            <h2 className="font-eudoxus-bold text-[#0D4C3B] text-3xl md:text-4xl lg:text-5xl whitespace-normal md:whitespace-nowrap">
              Contact Us
            </h2>
            <img
              src={scanHowItWorks}
              alt=""
              className="w-8.5 h-8.5 sm:h-10 sm:w-10 md:h-12 md:w-12"
            />
          </div>

          <p className="max-w-[546px] lg:max-w-[590px] text-lg lg:text-xl text-black-60 font-inter font-medium text-center lg:text-right">
            Experience a rapid and secure payment system that guarantees
            seamless transactions, providing you with a smooth and reliable
            payment experience.
          </p>
        </div>

        {/* Get in touch */}
        <div className="flex flex-col items-center lg:items-stretch lg:flex-row gap-10 lg:gap-25 mt-17.5 py-4.5 justify-between">
          <div className="max-w-[350px] flex flex-col items-center lg:items-stretch">
            <h3 className="font-eudoxus-bold text-primary text-[32px] leading-[36px] underline mb-11">
              Get In Touch
            </h3>

            <ul className="flex flex-col gap-6 items-center lg:items-start">
              <li className="flex items-center gap-3 lg:gap-5 flex-col lg:flex-row">
                <img src={phoneIcon} />
                <a
                  href="tel:+2348058197505"
                  className="font-inter text-lg text-black-80"
                >
                  +234 805 819 750 5
                </a>
              </li>
              <li className="flex items-center gap-3 lg:gap-5 flex-col lg:flex-row">
                <img src={mailIcon} />
                <a
                  href="mailto:cartwey1@gmail.com"
                  className="font-inter text-lg text-black-80"
                >
                  cartwey1@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 lg:gap-5 flex-col lg:flex-row">
                <img src={locationIcon} />
                <p className="font-inter text-lg text-black-80 text-center lg:text-left">
                  007 cartwey’s location. Future of Shopping District, Tech
                  Legends States
                </p>
              </li>
            </ul>

            {/* Socials */}
            <div className="mt-9 flex items-center gap-5">
              <img src={instagramIcon} />
              <a href="https://x.com/cartwey_app" target="_blank">
                <img src={twitterIcon} />
              </a>
              <img src={linkedinIcon} />
            </div>
          </div>

          {/* Contact form */}
          <div className="w-full flex justify-center lg:justify-end">
            <form
              className="bg-white w-full flex flex-col max-w-[700px] gap-6 rounded-2xl py-6 md:py-10 lg:py-16 p-4 sm:p-6 md:p-9 lg:px-13"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
                return false;
              }}
            >
              <FormGroup
                name="full_name"
                label="Full Name"
                placeholder="Enter your full name"
                labelClassName="font-medium text-[#000000BF]"
                validation={validation}
                disabled={submitting}
              />
              <FormGroup
                name="email"
                label="Email Address"
                placeholder="example@example.com"
                labelClassName="font-medium text-[#000000BF]"
                validation={validation}
                disabled={submitting}
              />
              <FormGroup
                name="message"
                label="Message"
                placeholder="Type here..."
                type="textarea"
                labelClassName="font-medium text-[#000000BF]"
                validation={validation}
                disabled={submitting}
              />
              <Button
                className="gap-2.5 cursor-pointer hover:opacity-80 transition-all duration-500"
                type="submit"
                disabled={submitting}
              >
                <span
                  className="font-inter font-semibold text-black text-lg"
                  style={{ letterSpacing: "2%" }}
                >
                  {submitting ? "Sending..." : "Send Message"}
                </span>
                {!submitting && <img src={paperIcon} />}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
