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
      className="relative bg-[#0B0F19] pt-20 mt-10 w-full md:mt-90  "
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      viewport={{ once: true }}
    >
      <p className="font-montserrat font-semibold text-2xl text-center text-neutral-400  mx-auto">
        Trusted by global companies
      </p>

      <div className="mx-auto mt-10 mb-26 w-full">
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
