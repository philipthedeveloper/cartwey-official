import { ContactUs, DesktopNavbar, FAQs, Footer } from "@/components";

export const Contact = () => {
  return (
    <div className="min-h-dvh">
      <DesktopNavbar hideLinks={["How It Works"]} />
      <ContactUs />
      <FAQs />
      <Footer />
    </div>
  );
};
