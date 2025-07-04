import layoutBg from "@/assets/images/common/layout-bg.png";

const Header = () => {
  return (
    <header
      className="h-[130px] w-full bg-cover absolute top-0"
      style={{ backgroundImage: `url(${layoutBg})` }}
    ></header>
  );
};

export default Header;
