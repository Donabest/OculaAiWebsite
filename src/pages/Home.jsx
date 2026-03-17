import TrustedCompany from "../components/ui/TrustedCompany";
import CtaSection from "../components/ui/CtaSection";
import Footer from "../components/ui/Footer";
import Hero from "../components/ui/Hero";
import HomePageFeature from "../components/ui/HomePageFeature";
import HomePagePricing from "../components/ui/HomePagePricing";
import HowItWorks from "../components/ui/HowItWorks";

function Home() {
  return (
    <section className=" text-white mt-26 md:mt-20">
      <Hero />
      <TrustedCompany />
      <HomePageFeature />
      <HowItWorks />
      <HomePagePricing />
      <CtaSection />
      <Footer />
    </section>
  );
}

export default Home;
