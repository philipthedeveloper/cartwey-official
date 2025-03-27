import {
  AboutHero,
  DesktopNavbar,
  FAQs,
  OurMission,
  WhoWeAre,
} from "@/components";
import { Footer } from "@/components/footer";

export const About = () => {
  return (
    <div className="min-h-dvh">
      <DesktopNavbar hideLinks={["How It Works"]} />
      <AboutHero />
      <OurMission />
      <WhoWeAre />
      <FAQs />
      <Footer />
    </div>
  );
};
