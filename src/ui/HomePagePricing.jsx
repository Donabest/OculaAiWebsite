import { FaChartLine } from "react-icons/fa";

import SectionHeadLine from "./SectionHeadLine";
import PricingCard from "./PricingCard";

function HomePagePricing() {
  return (
    <section className="bg-[#0B0F19]">
      <SectionHeadLine
        title="Flexible Plans for Every Team "
        desc="Weather you're a small startup or a growing enterprise,we've got you covered."
      >
        <FaChartLine />
        Pricing
      </SectionHeadLine>
      <PricingCard />
    </section>
  );
}

export default HomePagePricing;
