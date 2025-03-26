import {
  DesktopNavbar,
  FAQs,
  GetStarted,
  Hero,
  HowItWorks,
  JoinWaitlist,
  WhyCartwey,
  WhyWait,
} from "@/components";
import { Footer } from "@/components/footer";

export const Home = () => {
  return (
    <div className="min-h-dvh">
      <DesktopNavbar />
      <Hero />
      <HowItWorks />
      <JoinWaitlist />
      <WhyCartwey />
      <WhyWait />
      <GetStarted />
      <FAQs />
      <Footer />
    </div>
  );
};
