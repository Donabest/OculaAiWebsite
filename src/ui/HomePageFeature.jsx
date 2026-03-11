import { motion } from "motion/react";
import Fig01 from "./Fig01";

function HomePageFeature() {
  return (
    <section className="bg-[#0B0F19]">
      <motion.div
        className="  p-4 my-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <h2 className="font-raleway font-[475] text-neutral-400 text-3xl text-left  ">
          <strong className=" text-neutral-100 ">
            A new species of product tool.
          </strong>
          Purpose-built for modern teams with AI workflows at its core, Ocula
          set a new standard for planning and building products.
        </h2>
      </motion.div>

      <div className="grid grid-cols-3">
        <div className="flex flex-col justify-center items-center text-center p-8 space-y-6 border-r border-r-white/10 ">
          <Fig01 />
          <div className="flex flex-col justify-center items-start text-start space-y-2 font-montserrat text-neutral-200">
            <h1>Built for purpose</h1>
            <p>
              Ocula is shaped by the practices and principles of world-class
              product teams.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center p-8 space-y-6 border-r border-r-white/10  ">
          <Fig01 />
          <div className="flex flex-col justify-center items-start text-start space-y-2 font-montserrat text-neutral-200">
            <h1>Built for purpose</h1>
            <p>
              Ocula is shaped by the practices and principles of world-class
              product teams.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center text-center p-8 space-y-6 ">
          <Fig01 />
          <div className="flex flex-col justify-center items-start text-start space-y-2 font-montserrat text-neutral-200">
            <h1>Built for purpose</h1>
            <p>
              Ocula is shaped by the practices and principles of world-class
              product teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePageFeature;
