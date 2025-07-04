import layoutBg from "@/assets/images/common/layout-bg.png";

const Footer = () => {
  return (
    <footer
      className="h-[130px] w-full bg-cover absolute bottom-0"
      style={{ backgroundImage: `url(${layoutBg})` }}
    ></footer>
  );
};

export default Footer;
