import { HiArrowRightCircle } from "react-icons/hi2";
import Logo from "./Logo";

const Explore = [
  {
    type: "Home",
    to: "Home",
  },
  {
    type: "Pricing",
    to: "Pricing",
  },
  {
    type: "How its work",
    to: "Howitswork",
  },
];

const NeedHelp = [
  "Privacy Policy",
  "Support",
  "Help % FAQs",
  "Term & Condition",
];

function Footer() {
  return (
    <section
      id="Footer"
      className=" flex flex-col justify-between items-start mt-40 py-8 px-4 space-y-6 font-montserrat bg-[#0B0F19] border-t border-t-white/20 md:flex-row md:space-y-0 md:gap-6 lg:gap-0"
    >
      <div className="flex flex-col items-start justify-center space-y-2 md:space-y-6 md:max-w-50 lg:max-w-xs">
        <Logo />
        <p className="text-sm text-gray-300 ">
          Ocula is an Ai-powered that makes work simple,clear,and
          stress-free.Turning daily chaos into clarity
        </p>
      </div>
      <div className="space-y-2 md:space-y-6">
        <h2 className="text-lg font-semibold tracking-wide">Explore</h2>
        <ul className="space-y-2 ">
          {Explore.map((link) => (
            <li className="text-gray-300 hover:text-white" key={link.type}>
              <a href={`#${link.to}`}>{link.type}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className=" space-y-3 md:space-y-6">
        <h2 className="text-lg font-semibold tracking-wide">Need Help?</h2>
        <ul className="space-y-2">
          {NeedHelp.map((help, index) => (
            <li className="text-gray-300 hover:text-white" key={index}>
              {help}
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-3 md:space-y-6">
        <h2 className="text-lg font-semibold tracking-wide">Join Newsletter</h2>
        <p className="text-gray-300 lg:w-100">
          Subscribe to our newsletter for tools,tips,and product news.
        </p>
        <div className="flex justify-start items-center gap-2">
          <input
            type="text"
            className="lg:w-80 p-2 border border-gray-400 rounded-sm outline-gray-600"
          />
          <HiArrowRightCircle className="text-4xl cursor-pointer hover:text-white/50" />
        </div>
      </div>
    </section>
  );
}

export default Footer;
