import { HiExclamationCircle } from "react-icons/hi2";

import HowItWorksContent from "./HowItWorksContent";
import SectionHeadLine from "./SectionHeadLine";
import WaveIcon from "../../icons/WaveIcon";

function HowItWorks() {
  return (
    <section id="Howitswork">
      <SectionHeadLine
        section="How it works"
        title={"Get Set Up in Minutes,Start Moving Fast"}
        desc={"Quikly onboard your team and start managing projects with ease."}
      >
        <HiExclamationCircle className="animate animate-pulse" />
        How it works
      </SectionHeadLine>

      <section className="relative w-full max-w-6xl mx-auto py-15 bg-[#0B0F19]  md:py-24">
        <WaveIcon />
        <HowItWorksContent />
      </section>
    </section>
  );
}

export default HowItWorks;
