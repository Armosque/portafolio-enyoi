import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { NavBar } from "./NavBar";

export const Layout = () => {
  return (
    <div className="site-wrapper">
      <NavBar />
      <main className="w-[100%] justify-center items-center  sm:mr-0 ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
