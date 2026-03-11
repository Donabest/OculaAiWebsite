import TrustedCompany from "../Logo/TrustedCompany";
import Hero from "../ui/Hero";
import HomePageFeature from "../ui/HomePageFeature";

function Home() {
  return (
    <div className=" text-white mt-26 md:mt-20">
      <Hero />
      <TrustedCompany />
      <HomePageFeature />
    </div>
  );
}

export default Home;
