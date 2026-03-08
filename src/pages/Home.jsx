import { MdArrowOutward } from "react-icons/md";
import Button from "../ui/Button";
import { motion } from "motion/react";

function Home() {
  return (
    <motion.div
      className="flex justify-center flex-col items-center text-center text-white mt-26 max-w-5xl mx-auto md:mt-20"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      <div className="flex justify-center items-center space-x-3 mb-10 bg-linear-to-r from-black to-blue-900 border border-indigo-400 px-10 py-2 rounded-4xl">
        <i>🚀</i>
        <p className="font-openSans tracking-wide">
          Introducing Ocula AI workflows
        </p>
      </div>
      <div className="mt-3">
        <h1 className="text-3xl text-center font-raleway font-semibold tracking-wide md:text-6xl md:font-medium">
          Build Powerful workflows without the complexity.
        </h1>
        <p className="font-poppin font-light mt-4 text-center  mx-auto max-w-80 tracking-wide md:max-w-xl">
          Design smarter workflows,automate repetitive tasks,and collaborate in
          real-time with powerful AI tools
          {/* Plan tasks,track progress,and collaborate with inside a powerful
          productivity platform. */}
        </p>
      </div>
      <div className="flex justify-center items-center space-x-4  mt-10 font-raleway tracking-wide">
        <Button type="with-bg">
          <span>Start Free</span>
          <span>
            <MdArrowOutward />
          </span>
        </Button>
        <Button type="no-bg">
          <span>Book a Demo </span>
          <span>
            <MdArrowOutward />
          </span>
        </Button>
      </div>
    </motion.div>
  );
}

export default Home;
