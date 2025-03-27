import {
  DesktopNavbar,
  FAQs,
  Footer,
  OurPrivacy,
  PrivacyHero,
} from "@/components";

export const Privacy = () => {
  return (
    <div className="min-h-dvh">
      <DesktopNavbar hideLinks={["How It Works"]} />
      <PrivacyHero />
      <OurPrivacy />
      <FAQs />
      <Footer />
    </div>
  );
};
