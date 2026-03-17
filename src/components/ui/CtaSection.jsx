import { motion } from "motion/react";

function CtaSection() {
  return (
    <section
      id="Cta"
      className="font-raleway space-y-8 pt-30 text-center bg-[#0B0F19] px-8 md:px-3 md:pt-50 "
    >
      <h1 className="font-semibold text-4xl  text-white md:text-5xl">
        Ready to Power Up Your Workflow?
      </h1>
      <p className="text-gray-300 ">
        Stay organised and move faster all in one tool.
      </p>
      <motion.button
        className="px-6 py-4 bg-transparent border border-white/40 rounded-lg cursor-pointer shadow-sm hover:shadow-white/40 "
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 900 }}
      >
        Get Started Free
      </motion.button>
    </section>
  );
}

export default CtaSection;
