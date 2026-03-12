import { HiExclamationCircle } from "react-icons/hi2";

function HowItWorks() {
  return (
    <div className="flex justify-center flex-col items-center mt-26 space-y-6">
      <h1 className="flex justify-center items-center gap-2 text-center px-4 py-2 rounded-full text-white font-montserrat bg-linear-to-r from-black to-blue-900 border border-indigo-400 ">
        <HiExclamationCircle />
        How it works
      </h1>
      <div className="text-center">
        <h1>Get Set Up in Minutes,Start Moving Fast</h1>
        <p>Quikly onboard your team and start managing projects with ease.</p>
      </div>
    </div>
  );
}

export default HowItWorks;
