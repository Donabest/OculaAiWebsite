import TrustedCompany from "../Logo/TrustedCompany";
import Hero from "../ui/Hero";
import HomePageFeature from "../ui/HomePageFeature";
import HomePagePricing from "../ui/HomePagePricing";
import HowItWorks from "../ui/HowItWorks";

function Home() {
  return (
    <div className=" text-white mt-26 md:mt-20">
      <Hero />
      <TrustedCompany />
      <HomePageFeature />
      <HowItWorks />
      <HomePagePricing />
    </div>
  );
}

export default Home;
