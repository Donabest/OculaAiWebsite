import Marquee from "react-fast-marquee";
import { motion } from "motion/react";

import AwsLogo from "./AwsLogo";
import FigmaLogo from "./FigmaLogo";
import NextjsLogo from "./NextjsLogo";
import ReactLogo from "./ReactLogo";
import Vercellogo from "./Vercellogo";

function MarqueeLogo() {
  return (
    <motion.section
      className="mt-26"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <p className="text-2xl text-gray-300 font-montserrat grayscale-10">
        Trusted by global companies
      </p>

      <div className="w-110 mt-10 mb-26 md:w-250">
        <Marquee
          speed={50}
          autoFill={true}
          gradient={true}
          gradientColor="#0B0F19"
        >
          <AwsLogo />
          <ReactLogo />
          <Vercellogo />
          <NextjsLogo />
          <FigmaLogo />
        </Marquee>
      </div>
    </motion.section>
  );
}

export default MarqueeLogo;
