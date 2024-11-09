// Toggle.js
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faXmark,
  faFileSignature,
} from "@awesome.me/kit-bc1b6271da/icons/classic/solid";

export default function SignUp() {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <button
        onClick={() => setToggle(!toggle)}
        className="underline hover:no-underline flex items-center gap-2 font-medium"
      >
        <FontAwesomeIcon icon={faUser} className="w-3" />
        Sign Up
      </button>
      {toggle && (
        <div className="lg:flex gap-6 text-md font-semibold custom-text-darkblue absolute flex flex-col top-0 left-0 right-0 bg-white p-16 items-center shadow-lg z-30 rounded-lg">
          <button
            onClick={() => setToggle(!toggle)}
            className="text-sm font-semibold flex items-center gap-2 custom-bg-darkblue text-white p-4 rounded-lg"
          >
            <FontAwesomeIcon
              icon={faXmark}
              className="text-xl custom-text-green"
            />{" "}
            Close Menu
          </button>
          <span className="flex gap-4 mt-8 border-b border-gray-200 pb-8">
            <span className="flex items-center gap-2 font-bold text-2xl">
              <FontAwesomeIcon
                icon={faFileSignature}
                className="text-xl custom-text-green"
              />
              Sign Up
            </span>
          </span>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Email"
              className="p-2 w-64 border border-gray-200 rounded-lg"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="p-2 w-64 border border-gray-200 rounded-lg"
              required
            />
            <button
              type="submit"
              className="p-3 w-64 custom-bg-green text-white font-medium rounded-lg"
            >
              Sign Up
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
