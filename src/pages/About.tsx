import {
  AboutHero,
  DesktopNavbar,
  FAQs,
  OurMission,
  WhoWeAre,
  Footer,
} from "@/components";

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
