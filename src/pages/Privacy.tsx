import { DesktopNavbar, FAQs, Footer, PrivacyHero } from "@/components";

export const Privacy = () => {
  return (
    <div className="min-h-dvh">
      <DesktopNavbar hideLinks={["How It Works"]} />
      <PrivacyHero />
      <FAQs />
      <Footer />
    </div>
  );
};
