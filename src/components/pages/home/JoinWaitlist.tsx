import waitlistBgShapeLeft from "@/assets/svgs/waitlist_bg_shape_left.svg";
import waitlistBgShapeRight from "@/assets/svgs/waitlist_bg_shape_right.svg";
import waitlistHeaderSvg from "@/assets/svgs/waitlist_header_svg.svg";
import { Button, FormGroup } from "@/components/form";
import paperIcon from "@/assets/svgs/paper_icon.svg";
import rocket from "@/assets/svgs/rocket.svg";
import * as yup from "yup";
import { useFormik } from "formik";
import axios, { AxiosError } from "axios";
import { emailRegex } from "@/constants";
import { useState } from "react";
import toast from "react-hot-toast";

export const WaitlistForm = () => {
  const [joiningWaitlist, setJoiningWaitlist] = useState(false);

  const defaultValues = {
    full_name: "",
    email: "",
  };

  const validationSchema = yup.object({
    full_name: yup.string().required("Please enter full name"),
    email: yup
      .string()
      .required("Please enter your email")
      .matches(emailRegex, "Invalid email"),
  });

  const { handleSubmit, ...validation } = useFormik({
    enableReinitialize: false,
    initialValues: defaultValues,
    validationSchema,
    onSubmit: (values) => {
      saveToWaitlist(values);
    },
  });

  const saveToWaitlist = async (values: any) => {
    try {
      setJoiningWaitlist(true);
      const { data } = await axios.post(
        "https://api.cartwey.com/api/waitlist/join/",
        values
      );
      toast.success(data.message);
    } catch (error) {
      if (error instanceof AxiosError) {
        return toast.error(error.response?.data?.message);
      }
      return toast.error(
        "Unable to join waitlist. If this error persist, please contact us."
      );
    } finally {
      setJoiningWaitlist(false);
    }
  };

  return (
    <div className="rounded-3xl md:rounded-4xl w-[90%] max-w-[950px] py-10 px-5 bg-[#f1f3f91a] backdrop-blur-md">
      <div className="flex items-center flex-col gap-6">
        <div className="flex items-center gap-1.5 p-2.5 rounded-[10px] bg-[#5f606480]">
          <p className="text-white font-inter font-medium">
            Join the Cartwey Waitlist
          </p>
          <img src={waitlistHeaderSvg} />
        </div>

        <h3 className="max-w-[690px] text-[#FFC91F] font-eudoxus-extrabold text-5xl text-center">
          Be the First to Experience the Future of Retail Checkout
        </h3>

        <p className="max-w-[690px] text-lg font-inter font-medium text-center text-[#FAFAFA]">
          We’re working hard to bring you a revolutionary self-checkout
          experience. Sign up below to be the first to know when Cartwey is
          ready for launch! You'll get exclusive early access and updates
          straight to your inbox.
        </p>

        <form
          className="bg-[#0D503F] rounded-[10px] py-16 px-10 flex flex-col gap-6 w-[90%] max-w-[600px]"
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
            validation={validation}
            disabled={joiningWaitlist}
          />
          <FormGroup
            name="email"
            label="Email Address"
            placeholder="example@example.com"
            validation={validation}
            disabled={joiningWaitlist}
          />
          <Button
            className="gap-2.5 cursor-pointer hover:opacity-80 transition-all duration-500"
            type="submit"
            disabled={joiningWaitlist}
          >
            <span
              className="font-inter font-semibold text-black text-lg"
              style={{ letterSpacing: "2%" }}
            >
              {joiningWaitlist ? "Joining..." : "Join The Waitlist"}
            </span>
            {!joiningWaitlist && <img src={paperIcon} />}
          </Button>
        </form>

        <div className="flex items-center gap-2.5">
          <p className="font-inter font-medium text-[#FAFAFA] text-xs sm:text-sm md:text-base">
            Get early access and stay ahead of the queue!
          </p>
          <img src={rocket} />
        </div>
      </div>
    </div>
  );
};

export const JoinWaitlist = () => {
  return (
    <div
      className="py-24 bg-[#0D503F] relative overflow-hidden flex items-center justify-center"
      id="join-waitlist"
    >
      {/* shape 1 */}
      <div className="absolute left-0 top-0 w-2/3 sm:w-1/2">
        <img src={waitlistBgShapeLeft} />
      </div>
      {/* shape 2 */}
      <div className="absolute right-0 w-1/3 sm:w-1/4  md:1/5 lg:w-max top-1/2 -translate-y-1/2">
        <img src={waitlistBgShapeRight} />
      </div>

      {/* waitlist form */}
      <WaitlistForm />
    </div>
  );
};
