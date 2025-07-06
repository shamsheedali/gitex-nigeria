import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import gridBg from "@/assets/images/common/grid-bg.png";

const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="relative min-h-screen w-full">
      <Header />
      <main
        className="py-[180px] flex-1 p-10 h-fit"
        style={!isHome ? { backgroundImage: `url(${gridBg})` } : {}}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
