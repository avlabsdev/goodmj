import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneOffice,
  faHeadset,
} from "@awesome.me/kit-bc1b6271da/icons/classic/solid";

import healthIcon from "../images/health.svg";
import operatorsImage from "../images/operators.jpg";
import HelpForm from "../components/HelpForm";

import ring from "../audio/ring.wav";
import voiceHelp from "../audio/voice-help.wav";

const HelpPage = () => {
  function handleCallClick() {
    const phoneBtn = document.querySelector("#phone-call-btn");
    const chatBtn = document.querySelector("#chat-start-btn");
    phoneBtn.textContent = "Calling...";
    const audio = new Audio(ring);
    audio.play();
    setTimeout(() => {
      phoneBtn.textContent = "Connected!";
    }, 3000);

    setTimeout(() => {
      const audio = new Audio(voiceHelp);
      audio.play();
      phoneBtn.textContent = `Hello, how can I help?`;
      phoneBtn.classList.add("w-full");
      if (window.innerWidth < 1024) {
        phoneBtn.style.borderRadius = "0.5rem 0.5rem 0 0";
      } else {
        phoneBtn.style.borderRadius = "0 0 0.5rem 0.5rem";
      }
      // phoneBtn.style.backgroundColor = "#ef4444";
      phoneBtn.classList.add("scale-up-hor-left");
      chatBtn.classList.add("hidden");
      // go from 2xl width down to sm and mobile ensuring border-radius changes
    }, 4000);
    // setTimeout(() => {
    //   phoneBtn.textContent = `End Call`;
    // }, 4000);
  }
  function handleChatClick() {
    const phoneBtn = document.querySelector("#phone-call-btn");
    const chatBtn = document.querySelector("#chat-start-btn");
    chatBtn.textContent = "Connecting...";
    setTimeout(() => {
      chatBtn.textContent = "Connected!";
    }, 3000);

    setTimeout(() => {
      chatBtn.textContent = `Hello, how can I help?`;
      chatBtn.classList.add("w-full");
      // phoneBtn.style.backgroundColor = "#ef4444";
      chatBtn.classList.add("scale-up-hor-right");
      phoneBtn.classList.add("hidden");
      // go from 2xl width down to sm and mobile ensuring border-radius changes
    }, 4000);

    // setTimeout(() => {
    //   phoneBtn.textContent = `End Call`;
    // }, 4000);
  }
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
          <HelpForm />
        </div>
      </section>
      <section className="flex lg:w-1/2 flex-col sticky top-8 gap-8">
        <div className="bg-white rounded-lg shadow h-full relative">
          <img
            src={operatorsImage}
            alt="Tech support operators"
            className="object-cover h-96 w-full lg:h-full rounded-lg border-r-2 border-l-2 border-t-2"
          />
          <div className="bg-white rounded-lg rounded-tl-lg rounded-tr-lg rounded-bl-none rounded-br-none flex w-full absolute right-0 left-0 -top-0.5 lg:rounded-bl-lg lg:rounded-tl-none lg:rounded-tr-none lg:rounded-br-lg lg:top-auto lg:bottom-0 border-2 border-white items-center">
            <a
              href="#/"
              className="py-4 text-center lg:rounded-bl-lg rounded-tr-none lg:rounded-tr-none rounded-tl-lg lg:rounded-tl-none sm:rounded-tr-none md:rounded-tr-none custom-bg-darkblue text-white font-medium w-full shadow flex items-center justify-center gap-2 border-0"
              onClick={handleCallClick}
              id="phone-call-btn"
              // use first button for inital events, then unhide the red button behind the front button for the ability to end call and return to the two button options again for call or chat
            >
              <FontAwesomeIcon
                icon={faPhoneOffice}
                className="custom-text-green text-xl"
              />
              Start a Call
            </a>
            {/* <a
              href="#/"
              className="hidden py-4 text-center lg:rounded-bl-lg rounded-tr-lg lg:rounded-tr-none rounded-tl-lg lg:rounded-tl-none sm:rounded-tr-none md:rounded-tr-none bg-red-500 text-white font-medium w-full shadow items-center justify-center gap-2 border-0"
              // onClick={endCallClick}
              id="end-call-btn"
            >
              End Call
            </a> */}
            <button
              href="/services"
              onClick={handleChatClick}
              className="py-4 text-center bg-white custom-text-darkblue font-medium w-full shadow lg:rounded-br-lg rounded-tr-lg lg:rounded-tr-none flex items-center justify-center gap-2"
              id="chat-start-btn"
            >
              <FontAwesomeIcon
                icon={faHeadset}
                className="custom-text-green text-xl"
              />
              Start a Chat
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpPage;
