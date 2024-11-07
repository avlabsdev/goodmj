import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faFileSignature,
  faBars,
  faXmark,
} from "@awesome.me/kit-bc1b6271da/icons/classic/solid";
import logo from "../logo.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

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
            <a
              href="#/"
              className="underline hover:no-underline flex items-center gap-2 font-medium"
            >
              <FontAwesomeIcon icon={faUser} className="w-3" />
              Login
            </a>{" "}
            /{" "}
            <a
              href="#/"
              className="underline hover:no-underline flex items-center gap-2 font-medium"
            >
              <FontAwesomeIcon icon={faFileSignature} className="w-4" />
              Signup
            </a>
          </div>
        </div>
        <button
          onClick={() => setToggle(!toggle)}
          className="text-sm font-semibold custom-text-darkblue lg:hidden"
        >
          <FontAwesomeIcon icon={faBars} className="text-xl" />
        </button>
        {toggle && (
          <>
            <nav className="lg:flex gap-6 text-md font-semibold custom-text-darkblue absolute max-w-screen max-h-screen flex flex-col top-0 left-0 right-0 bg-white p-16 items-center shadow-lg z-10 rounded-lg">
              <button
                onClick={() => setToggle(!toggle)}
                className="text-sm font-semibold lg:hidden flex items-center gap-2 custom-bg-darkblue text-white p-4 rounded-lg"
              >
                <FontAwesomeIcon
                  icon={faXmark}
                  className="text-xl custom-text-green"
                />{" "}
                Close Menu
              </button>
              <a className="p-2" href="/services">
                Services
              </a>
              <a className="p-2" href="/plans">
                Plans
              </a>
              <a className="p-2" href="/menu">
                Menu
              </a>
              <a className="p-2" href="/strainfinder">
                Strainfinder&trade;
              </a>
              <a className="p-2" href="/help">
                Help
              </a>
            </nav>
          </>
        )}
      </header>
    </div>
  );
};

export default Navbar;
