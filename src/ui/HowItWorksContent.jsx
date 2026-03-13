import { motion } from "motion/react";

const steps = [
  {
    number: "1.",
    title: "Join & Build Team",
    desc: "create an account and configure your team members",
    delay: 0.4,
  },
  {
    number: "2.",
    title: "Create Project",
    desc: "Start a new project tailored to your goals.",
    delay: 0.6,
  },
  {
    number: "3.",
    title: "Track Progress",
    desc: "Monitor tasks and stay updatedevery step of the way",
    delay: 0.8,
  },
];
function HowItWorksContent() {
  return (
    <>
      <motion.div
        className="hidden absolute font-montserrat  space-y-1 left-20 mt-125 max-w-80 md:inline-block"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h1 className="text-sm text-white md:text-xl">Join & Build Team</h1>
        <p className="text-sm font-thin text-white/60">
          create an account and configure your team members
        </p>
      </motion.div>
      <motion.div
        className="hidden absolute font-montserrat  space-y-1 text-center bottom-35 ml-7 max-w-80 md:inline-block"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 0.8 }}
      >
        <h1 className="text-sm text-white md:text-xl">Create Project</h1>
        <p className="text-sm font-thin text-white/60">
          Start a new project tailored to your goals.
        </p>
      </motion.div>
      <motion.div
        className="hidden absolute font-montserrat space-y-1 right-10 bottom-0 max-w-80 md:inline-block"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 1 }}
      >
        <h1 className="text-sm text-white text-center md:text-xl">
          Track Progress
        </h1>
        <p className="text-sm font-thin text-white/60 text-center">
          Monitor tasks and stay updatedevery step of the way{" "}
        </p>
      </motion.div>

      <section className="space-y-4 mt-8 md:hidden ">
        {steps.map((step) => (
          <motion.div
            className=" border border-white/20  p-8 rounded-lg "
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: step.delay }}
          >
            <span className="text-5xl font-roboto font-extrabold text-[#1d4ed8]">
              {step.number}
            </span>
            <div className="mt-4 font-montserrat">
              <h1 className="text-xl">{step.title}</h1>
              <p className="text-white/60 mt-2">{step.desc} </p>
            </div>
          </motion.div>
        ))}
      </section>
    </>
  );
}

export default HowItWorksContent;
