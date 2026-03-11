import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function AppLayout() {
  return (
    <section className=" bg-[#0B0F19]">
      <div className="relative z-10 max-w-106 md:max-w-7xl mx-auto container">
        <Navbar />
        <div>
          <Outlet />
        </div>
      </div>
    </section>
  );
}

export default AppLayout;
