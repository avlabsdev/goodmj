import React from 'react';
import logo from '../logo.svg';
import userIcon from "../images/user-solid.svg";
import signupIcon from "../images/file-signature-solid.svg";

const Navbar = () => {
  return (
    <div className="container mx-auto flex flex-col gap-8 my-2 mt-10 mb-4">
      <header className="bg-white flex justify-between items-center py-4 px-6 rounded-lg shadow">
        <div className="flex items-center gap-4">
          <a href="/" className="flex items-center justify-center p-2 text-xl custom-text-darkblue">
            <img src={logo} alt="Logo Icon" className="w-8 mr-2" /><span className="font-bold">Good</span>Mj
          </a>
          <div className="pl-6 border-l-2 text-sm flex items-center gap-2">
            <a href="#/" className="underline hover:no-underline flex items-center gap-2 font-medium"><img src={userIcon} alt="User icon" className="w-3" />Login</a> / <a href="#/" className="underline hover:no-underline flex items-center gap-2 font-medium"><img src={signupIcon} alt="User icon" className="w-4" />Signup</a>
          </div>
        </div>
        <nav className="flex gap-6 text-md font-semibold custom-text-darkblue">
          <a className="p-2" href="/services">Services</a>
          <a className="p-2" href="/plans">Plans</a>
          <a className="p-2" href="/menu">Menu</a>
          <a className="p-2" href="/strainfinder">Strainfinder&trade;</a>
          <a className="p-2" href="/help">Help</a>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;