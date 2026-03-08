import { motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../ui/Logo";

const Navs = [
  {
    type: "Home",
    path: "/Home",
  },
  {
    type: "Features",
    path: "/Features",
  },
  {
    type: "Pricing",
    path: "/Pricing",
  },
  {
    type: "Solution",
    path: "/Solution",
  },
  {
    type: "Resources",
    path: "/Resources",
  },
  {
    type: "Company",
    path: "/Company",
  },
];

function Navbar() {
  const [hovered, setHovered] = useState("Home");

  return (
    <motion.nav
      className="flex justify-between items-center text-white mt-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Logo />

      <ul className="hidden md:flex justify-center items-center text-center bg-white/8 px-4 py-2 backdrop-blur-lg rounded-3xl shadow-lg ">
        {Navs.map((navlink, index) => (
          <motion.li
            className="link-list group relative hover:bg-white/6"
            key={index}
            onClick={() => setHovered(navlink.type)}
          >
            <Link to={navlink.type}>{navlink.type}</Link>
            {hovered === navlink.type && (
              <motion.span
                className="absolute bg-white/20 inset-0 rounded-3xl"
                layoutId="nav-item"
              ></motion.span>
            )}
          </motion.li>
        ))}
      </ul>
      <div className="md:hidden">
        <button
          type="button"
          className="z-40 block hamburger md:hidden focus:outline-none"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      <motion.button
        className="hidden md:block font-montserrat bg-blue-700 px-6 py-3 rounded-xl cursor-pointer hover:bg-blue-800 lg:max-w-237.5"
        whileHover={{
          y: -2,
          transition: {
            duration: 0.5,
            type: "spring",
            stiffness: 900,
            damping: 10,
          },
        }}
      >
        Sign Up
      </motion.button>
    </motion.nav>
  );
}

export default Navbar;
