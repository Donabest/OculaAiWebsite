import { MdArrowOutward } from "react-icons/md";
import Button from "./Button";
import Dashboard from "./Dashboard";
import Design from "../particles/Design";

function Hero() {
  return (
    <section className="relative min-h-screen -z-10 ">
      <div className="absolute inset-0 overflow-hidden">
        <Design />
      </div>
      <div className="relative min-h-screen">
        <div className=" flex justify-center items-center space-x-3 mb-10 mx-auto bg-linear-to-r from-black to-blue-900 border border-indigo-400 px-10 py-2 rounded-4xl max-w-sm">
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
            Design smarter workflows,automate repetitive tasks,and collaborate
            in real-time with powerful AI tools
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

        <Dashboard />
      </div>
    </section>
  );
}

export default Hero;
