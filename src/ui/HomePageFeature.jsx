import { motion } from "motion/react";
import Fig01 from "../icons/Fig01";
import Fig02 from "../icons/Fig02";
import Fig03 from "../icons/Fig03";

const features = [
  {
    title: "Built for purpose",
    description:
      "Ocula is shaped by the practices and principles of world-class product teams",
    icon: <Fig01 />,
    delay: 0.2,
  },
  {
    title: "Real-time collaboration",
    description: "work together seamlessly with shared workspaces.",
    icon: <Fig02 />,
    delay: 0.4,
  },
  {
    title: "Ai-powered insights",
    description:
      "Turn data into decisions with intelligent suggestion and workflow optimization",
    icon: <Fig03 />,
    delay: 0.6,
  },
];

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

      <div className="flex overflow-x-auto no-scrollbar mask-fade md:grid md:grid-cols-3 md:fade-none">
        {features.map((feature) => (
          <motion.div
            className="flex flex-col justify-center items-center text-center p-8 space-y-6 border-r border-r-white/10 "
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: feature.delay,
            }}
            key={feature.title}
          >
            {feature.icon}
            <div className="flex flex-col justify-center items-start text-start space-y-2 font-montserrat text-neutral-200">
              <h1>{feature.title}</h1>
              <p>{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default HomePageFeature;
