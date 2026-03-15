import { FaCheckCircle } from "react-icons/fa";

const CardObj = [
  {
    head: "Pro",
    decs: "Most Popular",
    amt: "9$",
    amtPeriod: "/ per user / month",
    pricedesc: "For growing teams who need better integration",
    start: "Start Free Trial",
    billed: "Billed Yearly",
    feature: "All free plan features,plus:",
    featureList: [
      "Ulimited team member",
      "Ulimited projects",
      "Priority-based workflows",
      "Ocula Ai 5.0 Version",
      "30-day version history",
    ],
  },
  {
    head: "Pro",
    decs: "Most Popular",
    amt: "9$",
    amtPeriod: "/ per user / month",
    pricedesc: "For growing teams who need better integration",
    start: "Start Free Trial",
    billed: "Billed Yearly",
    feature: "All free plan features,plus:",
    featureList: [
      "Ulimited team member",
      "Ulimited projects",
      "Priority-based workflows",
      "Ocula Ai 5.0 Version",
      "30-day version history",
    ],
    scale: 2,
  },
  {
    head: "Pro",
    decs: "Most Popular",
    amt: "9$",
    amtPeriod: "/ per user / month",
    pricedesc: "For growing teams who need better integration",
    start: "Start Free Trial",
    billed: "Billed Yearly",
    feature: "All free plan features,plus:",
    featureList: [
      "Ulimited team member",
      "Ulimited projects",
      "Priority-based workflows",
      "Ocula Ai 5.0 Version",
      "30-day version history",
    ],
  },
];
function PricingCard() {
  return (
    <div className="container w-full max-w-6xl mx-auto font-raleway grid grid-cols-1 gap-4 md:grid-cols-3">
      {CardObj.map((card) => (
        <div
          className={`  space-y-4 p-8 mt-8 bg-linear-to-r from-black to-blue-900  border border-indigo-400 rounded-4xl transform stranslate-x-${card.scale ? card.scale : ""} `}
        >
          <div className="flex justify-between items-center">
            <h2>{card.head}</h2>
            <p>{card.decs}</p>
          </div>
          <div className="flex flex-col space-y-3">
            <h1>
              <span className="text-6xl ">{card.amt}</span> {card.amtPeriod}
            </h1>
            <p>{card.pricedesc}</p>
          </div>
          <div className="text-center space-y-2 pt-4">
            <button className="bg-white w-full text-black py-3 rounded-lg cursor-pointer hover:bg-transparent hover:border hover:border-white hover:text-white ">
              {card.start}
            </button>
            <span className="text-gray-300">{card.billed}</span>
          </div>

          <div className="space-y-5 pt-6">
            <h1 className="text-lg">{card.feature}</h1>

            <ul className="leading-8 text-gray-200">
              {card.featureList.map((list) => (
                <li className="flex items-center gap-2">
                  <FaCheckCircle />
                  {list}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PricingCard;
