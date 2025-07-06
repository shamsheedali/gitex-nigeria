import layoutBg from "@/assets/images/common/layout-bg.png";
import login from "@/assets/images/common/login.png";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <header
      className="h-[130px] w-full bg-cover absolute top-0 flex justify-center items-center"
      style={{ backgroundImage: `url(${layoutBg})` }}
    >
      {location.pathname === "/login" && (
        <img src={login} alt="Login Button" className="w-[150px]" />
      )}
    </header>
  );
};

export default Header;
