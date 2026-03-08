import { motion } from "motion/react";

const hoverVariants = {
  onHover: {
    y: -2,
    transition: { type: "spring", stiffness: 900, damping: 10 },
  },
};
function Button({ type, children }) {
  return (
    <div>
      {type === "with-bg" && (
        <motion.button
          className="flex justify-center items-center text-center text-white px-5 py-3 space-x-3 bg-linear-to-r from-blue-900 to-indigo-600 rounded-xl border border-red-100 cursor-pointer md:px-10"
          variants={hoverVariants}
          whileHover="onHover"
        >
          {children}
        </motion.button>
      )}
      {type === "no-bg" && (
        <motion.button
          className="flex justify-center items-center text-center space-x-2 px-5 py-3 border border-white/30 rounded-xl backdrop-blur-lg cursor-pointer md:px-10 "
          variants={hoverVariants}
          whileHover="onHover"
        >
          {children}
        </motion.button>
      )}
    </div>
  );
}

export default Button;
