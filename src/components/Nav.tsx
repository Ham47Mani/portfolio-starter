// Import react icons
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquareText } from "react-icons/bs";

// Link
import { Link } from "react-scroll";
import { navItemType } from "../assets/constant/types";

const navItem: navItemType[] = [
  {
    link: "home",
    icons: <BiHomeAlt />
  },
  {
    link: "about",
    icons: <BiUser />
  },
  {
    link: "services",
    icons: <BsClipboardData />
  },
  {
    link: "work",
    icons: <BsBriefcase />
  },
  {
    link: "contact",
    icons: <BsChatSquareText />
  },
];

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        {/* ======== Nav Inner ======== */}
        <div className="w-full bg-black/20 h-16 backdrop-blur-2xl rounded-full max-w-xs sm:max-w-lg mx-auto px-2 flex 
        justify-between items-center text-2xl text-white/50">
          {
            navItem.map((item, i) => (
              <Link to={item.link} key={i} activeClass="active" smooth={true} spy={true} offset={-90}
                className="cursor-pointer hover:text-white w-12 h-12 flex justify-center items-center"
              >
                {item.icons}
              </Link>
            ))
          }
        </div>
      </div>
    </nav>
  )
}

export default Nav