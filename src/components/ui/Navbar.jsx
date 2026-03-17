import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const Navs = [
  {
    type: "Home",
    path: "#Home",
  },
  {
    type: "Features",
    path: "#Features",
  },
  {
    type: "Pricing",
    path: "#Pricing",
  },
  {
    type: "How",
    path: "#Howitswork",
  },
  {
    type: "Cta",
    path: "#Cta",
  },
];

function Navbar() {
  const [hovered, setHovered] = useState("Home");
  const [isHamburger, setIsHambuger] = useState(false);
  const [scrolled, setScrolled] = useState();
  const [lastY, setLastY] = useState();
  const [visible, setVisible] = useState(true);

  function handleHamburgerMenu() {
    setIsHambuger((open) => !open);
  }

  useEffect(function () {
    function handleScroll() {
      const currentY = window.scrollY;

      setScrolled(currentY > 80);

      if (currentY > lastY && currentY > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastY(currentY);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      <AnimatePresence initial={false}>
        {visible && (
          <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center text-white px-6 py-8 transition-all duration-300 ${
              scrolled
                ? "bg-[#060a10]/70  backdrop-blur-md shadow-lg"
                : "bg-transparent"
            } ${isHamburger && "bg-gray-800/80"} lg:px-20`}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Logo />

            <ul className="hidden md:flex justify-center items-center text-center bg-white/8 px-4 py-2 backdrop-blur-lg rounded-3xl shadow-lg ">
              {Navs.map((navlink) => (
                <motion.li
                  className="link-list group relative hover:bg-white/6"
                  key={navlink.type}
                  onClick={() => setHovered(navlink.type)}
                >
                  <a href={`${navlink.path}`}>{navlink.type}</a>
                  {hovered === navlink.type && (
                    <motion.span
                      className="absolute bg-white/20 inset-0 rounded-3xl"
                      layoutId="nav-item"
                    ></motion.span>
                  )}
                </motion.li>
              ))}
            </ul>

            {/* Moble menu */}
            <div
              className={`${isHamburger && "open"} fixed top-10 right-10 z-99 md:hidden`}
              onClick={handleHamburgerMenu}
            >
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
        )}
      </AnimatePresence>
      {/* Mobile menu List */}
      <AnimatePresence initial={false}>
        {isHamburger && (
          <motion.div
            className="fixed inset-0 z-20 flex flex-col items-center self-end w-full h-full m-h-screen px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase divide-y divide-gray-500 opacity-90 bg-gray-800/80 md:hidden"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            {Navs.map((navlink) => (
              <div
                className="w-full py-3 text-center"
                key={navlink.path}
                onClick={() => setIsHambuger(false)}
              >
                <a
                  href={`${navlink.path}`}
                  className="block hover:text-gray-400"
                >
                  {navlink.type}
                </a>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
