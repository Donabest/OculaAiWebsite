import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function AppLayout() {
  return (
    <section className="bg-[#0B0F19]">
      <div className="relative z-50 max-w-sm md:max-w-7xl  sm:max-w-xl mx-auto">
        <Navbar />
        <div>
          <Outlet />
        </div>
      </div>
    </section>
  );
}

export default AppLayout;
