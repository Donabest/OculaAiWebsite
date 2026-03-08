import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function AppLayout() {
  return (
    <section className="relative z-50 max-w-sm md:max-w-7xl  sm:max-w-xl mx-auto">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </section>
  );
}

export default AppLayout;
