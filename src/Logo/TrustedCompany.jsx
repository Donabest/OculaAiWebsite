import Marquee from "react-fast-marquee";
import { motion } from "motion/react";

import AwsLogo from "./AwsLogo";
import FigmaLogo from "./FigmaLogo";
import NextjsLogo from "./NextjsLogo";
import ReactLogo from "./ReactLogo";
import Vercellogo from "./Vercellogo";

function TrustedCompany() {
  return (
    <motion.section
      className="relative bg-[#0B0F19] pt-20 mt-26 w-121 md:w-365 lg:w-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <p className="text-2xl mx-auto text-center text-neutral-300 font-montserrat grayscale-10">
        Trusted by global companies
      </p>

      <div className="mx-auto w-100 mt-10 mb-26 md:w-250">
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

export default TrustedCompany;
