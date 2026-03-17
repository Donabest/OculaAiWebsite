import { FaCheckCircle } from "react-icons/fa";
import { motion } from "motion/react";

const CardObj = [
  {
    head: "Free",
    amt: "$0",
    amtPeriod: "Forever",
    pricedesc: "For individual or small teams just getting started",
    start: "Sign Up Now",
    featureList: [
      "Up to 3 team members",
      "2 active projects",
      "basic task management",
      "Real time collaboration",
      "2 day version history(Cloud backup)",
    ],
    delay: 0.6,
  },
  {
    head: "Pro",
    amt: "$9",
    amtPeriod: "/ per user / month",
    pricedesc: "For growing teams who need better integration",
    start: "Start Free Trial",
    featureList: [
      "Ulimited team member",
      "Ulimited projects",
      "Priority-based workflows",
      "Ocula Ai 5.0 Version",
      "30-day version history",
    ],
    popular: true,
    delay: 0.6,
  },
  {
    head: "Business",
    amt: "$19",
    amtPeriod: "/ per user / month",
    pricedesc: "For companies that need robust security",
    start: "Start Free Trial",
    featureList: [
      "Dedicated account manager",
      "Ulimited projects",
      "Ai driven predictive analytics",
      "Ocula Ai 5.0 Version",
      "24/7 priority support",
    ],
    delay: 1,
  },
];
function PricingCard() {
  return (
    <div className="container w-full mx-auto font-raleway grid px-8 pt-18 md:px-2 md:grid-cols-2 md:gap-4 lg:gap-7 lg:grid-cols-3">
      {CardObj.map((card) => (
        <motion.div
          className={`space-y-4 p-7 mt-8 bg-black/5 border border-white/30 rounded-4xl transform  ${card.popular ? "lg:scale-110  lg:opacity-100 lg:z-10" : "scale-100 lg:opacity-60 "} `}
          key={card.head}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3, delay: card.delay }}
          viewport={{ once: true }}
        >
          <div className="flex justify-between items-center">
            <h2>{card.head}</h2>
            {card.popular && (
              <p className="text-sm text-gray-200 bg-transparent border border-gray-400 px-4 py-2 rounded-lg shadow-2xl">
                Most Popular
              </p>
            )}
          </div>
          <div className="flex flex-col space-y-3">
            <h1>
              <span className="text-6xl ">{card.amt}</span> {card.amtPeriod}
            </h1>
            <p className="text-sm">{card.pricedesc}</p>
          </div>
          <div className="text-center space-y-4 pt-4">
            <button className="bg-white w-full text-black py-3 rounded-lg cursor-pointer hover:bg-transparent hover:border hover:border-white hover:text-white ">
              {card.start}
            </button>
            <span className="text-gray-300">Billed Yearly</span>
          </div>

          <div className="space-y-5 pt-6">
            <h1 className="text-lg">All free plan features,plus:</h1>

            <ul className="leading-8 text-gray-200">
              {card.featureList.map((list, index) => (
                <li className="flex items-center gap-2" key={index}>
                  <FaCheckCircle />
                  {list}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default PricingCard;
