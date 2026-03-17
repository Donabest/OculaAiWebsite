import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar";

function AppLayout() {
  return (
    <section className=" bg-[#0B0F19]">
      <div className="relative z-10 max-w-106 md:max-w-7xl mx-auto ">
        <Navbar />
        <div className="md:px-8">
          <Outlet />
        </div>
      </div>
    </section>
  );
}

export default AppLayout;
