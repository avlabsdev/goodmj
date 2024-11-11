import logo from "../images/giving-cannabis.svg";
import MobileNav from "./MobileNav";
import LogIn from "./LogIn";
import SignUp from "./SignUp";

const Navbar = () => {
  return (
    <div className="container mx-auto flex flex-col gap-8">
      <header className="bg-white flex justify-between items-center py-4 px-6 rounded-lg shadow relative">
        <div className="flex items-center gap-4">
          <a
            href="/"
            className="flex items-center justify-center p-2 pl-0 text-xl custom-text-darkblue"
          >
            <img src={logo} alt="Logo Icon" className="w-8 mr-2" />
            <span className="font-bold">Good</span>Mj
          </a>
          <div className="hidden pl-6 border-l-2 text-sm sm:flex items-center gap-2">
            <LogIn /> / <SignUp />
          </div>
        </div>
        <MobileNav />
        <nav className="hidden lg:flex gap-8">
          <a className="p-2 font-medium" href="/services">
            Services
          </a>
          <a className="p-2 font-medium" href="/plans">
            Plans
          </a>
          <a className="p-2 font-medium" href="/menu">
            Menu
          </a>
          <a className="p-2 font-medium" href="/strainfinder">
            Strainfinder&trade;
          </a>
          <a className="p-2 font-medium" href="/help">
            Help
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
