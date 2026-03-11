import { motion } from "motion/react";
import TrustedCompany from "../Logo/TrustedCompany";
import Hero from "../ui/Hero";
import HomePageFeature from "../ui/HomePageFeature";

function Home() {
  return (
    <motion.div
      className="flex justify-center flex-col items-center text-center text-white mt-26 max-w-5xl  mx-auto md:mt-20"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      <Hero />
      <TrustedCompany />
      <HomePageFeature />
    </motion.div>
  );
}

export default Home;
