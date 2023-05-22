// --- Images
import Logo from "../assets/imgs/logo.svg";

const Header = () => {
  return (
    <header className="p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* ------- Logo ------- */}
          <a href="#" className="">
            <img src={Logo} alt="Logo" className="w-12 h-12" />
            <span className="uppercase -mt-1 block text-xs">HB Tech</span>
          </a>
          {/* ------- Logo ------- */}
          <button className="btn btn-sm"> Work with me</button>
        </div>
      </div>
    </header>
  )
}

export default Header