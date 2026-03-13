import { HiExclamationCircle } from "react-icons/hi2";

import WaveIcon from "../icons/WaveIcon";
import HowItWorksContent from "./HowItWorksContent";

function HowItWorks() {
  return (
    <div className="flex justify-center flex-col items-center pt-7 space-y-6 bg-[#0B0F19]  md:pt-26">
      <h1 className="flex justify-center items-center gap-2 text-center px-4 py-2 rounded-full text-white font-montserrat bg-linear-to-r from-black to-blue-900 border border-indigo-400 ">
        <HiExclamationCircle className="animate animate-pulse" />
        How it works
      </h1>
      <div className="text-center">
        <h1 className="font-montserrat font-medium  text-3xl mb-3  md:text-4xl ">
          Get Set Up in Minutes,Start Moving Fast
        </h1>
        <p className="font-raleway mx-auto text-center">
          Quikly onboard your team and start managing projects with ease.
        </p>
      </div>

      <WaveIcon />
      <HowItWorksContent />
    </div>
  );
}

export default HowItWorks;
