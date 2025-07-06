import layoutBg from "@/assets/images/common/layout-bg.png";
import logo from "@/assets/images/common/logo.png";
import type { IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const socialIcons: [IconName, string][] = [
    ["facebook-f", "Facebook"],
    ["twitter", "Twitter"],
    ["instagram", "Instagram"],
    ["linkedin-in", "LinkedIn"],
    ["youtube", "YouTube"],
  ];
  return (
    <footer
      className="h-[130px] w-full bg-cover absolute bottom-0 flex flex-col gap-2 justify-center items-center"
      style={{ backgroundImage: `url(${layoutBg})` }}
    >
      <div className="flex flex-col items-center gap-2">
        <img src={logo} alt="logo" className="w-[100px]" />

        <ul className="text-white flex gap-3 text-lg">
          {socialIcons.map(([icon], idx) => (
            <li
              key={idx}
              className="w-10 aspect-square border-2 cursor-pointer border-white rounded-full flex items-center justify-center"
            >
              <FontAwesomeIcon icon={["fab", icon as IconName]} />
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
