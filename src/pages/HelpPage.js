import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneOffice,
  faHeadset,
} from "@awesome.me/kit-bc1b6271da/icons/classic/solid";

import healthIcon from "../images/health.svg";
import operatorsImage from "../images/operators.jpg";

const HelpPage = () => {
  return (
    <div className="container mx-auto flex gap-2 flex-col lg:flex-row">
      <section className="flex justify-between items-center bg-white rounded-lg shadow lg:w-1/2">
        <div className="md:p-20 p-10 w-full flex flex-col gap-4 justify-center relative">
          <h1 className="custom-text-green 2xl:text-5xl font-bold xl:text-5xl lg:text-3xl md:text-5xl text-2xl flex items-center gap-4">
            <img src={healthIcon} alt="Heart icon" className="w-14" />
            Help & Support
          </h1>
          <p className="custom-text-darkblue font-semibold 2xl:text-xl xl:text-lg">
            We have you covered with our 24/7 support team.
          </p>
          <p className="mt-4 text-sm text-gray-600">
            *Submit a trouble ticket below, give us a call, or start a chat.
          </p>
          <form className="flex w-full items-center text-base font-medium rounded-lg h-full relative z-10 flex-col gap-8">
            <div className="w-full h-full flex flex-col gap-2">
              <label for="name">Name:</label>
              <input
                id="name"
                type="text"
                placeholder="Enter name here"
                className="w-full h-full p-4 px-6 custom-bg-lightblue rounded-lg"
                required
              />
            </div>
            <div className="w-full h-full flex flex-col gap-2">
              <label for="name">Email:</label>
              <input
                id="name"
                type="text"
                placeholder="Enter email here"
                className="w-full h-full p-4 px-6 custom-bg-lightblue rounded-lg"
                required
              />
            </div>
            <div className="w-full h-full flex flex-col gap-2">
              <label for="name">Message:</label>
              <textarea
                id="name"
                type="text"
                placeholder="Enter message here"
                className="w-full h-full p-4 px-6 custom-bg-lightblue rounded-lg"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-4 text-center rounded-lg custom-bg-green text-white font-medium w-full shadow"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
      <section className="flex lg:w-1/2 flex-col sticky top-8 gap-8">
        <div className="bg-white rounded-lg shadow h-full relative">
          <img
            src={operatorsImage}
            alt="Tech support operators"
            className="object-cover h-96 w-full lg:h-full rounded-lg"
          />
          <div className="bg-white rounded-lg flex w-full sm:flex-row flex-col absolute right-0 left-0 -top-0.5 lg:top-auto lg:bottom-0">
            <a
              href="#/"
              className="py-4 text-center lg:rounded-bl-lg rounded-tr-lg lg:rounded-tr-none rounded-tl-lg lg:rounded-tl-none sm:rounded-tr-none md:rounded-tr-none custom-bg-darkblue text-white font-medium w-full shadow border-2 border-white flex items-center justify-center gap-2"
            >
              <FontAwesomeIcon
                icon={faPhoneOffice}
                className="custom-text-green text-xl"
              />
              Start a Call
            </a>
            <a
              href="/services"
              className="py-4 text-center bg-white custom-text-darkblue font-medium w-full shadow lg:rounded-br-lg rounded-tr-lg lg:rounded-tr-none border-t-2 flex items-center justify-center gap-2"
            >
              <FontAwesomeIcon
                icon={faHeadset}
                className="custom-text-green text-xl"
              />
              Start a Chat
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpPage;
