import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneOffice, faHeadset } from '@awesome.me/kit-bc1b6271da/icons/classic/solid'

import healthIcon from '../images/health.svg';
import operatorsImage from '../images/operators.jpg';

const HelpPage = () => {
  return (
    <div className="container mx-auto py-4 flex gap-8 px-4">
      <section className="flex justify-between items-center bg-white rounded-lg shadow w-1/2">
        <div className="p-20 w-full flex flex-col gap-4 justify-center relative">
          <h1 className="custom-text-green 2xl:text-5xl font-bold xl:text-5xl flex items-center gap-4"><img src={healthIcon} alt="Heart icon" className="w-14" />Help & Support</h1>
          <p className="custom-text-darkblue font-semibold 2xl:text-xl xl:text-lg">We have you covered with our 24/7 support team.
          </p>
          <p className="mt-4 text-sm text-gray-600">*Submit a trouble ticket below, give us a call, or start a chat.</p>
          <form className="flex w-full items-center text-base font-medium rounded-lg h-full relative z-10 flex-col gap-8">
            <div className="w-full h-full flex flex-col gap-2">
              <label for="name">Name:</label>
              <input id="name" type="text" placeholder="Enter name here" className="w-full h-full p-4 px-6 custom-bg-lightblue rounded-lg" required />
            </div>
            <div className="w-full h-full flex flex-col gap-2">
              <label for="name">Email:</label>
              <input id="name" type="text" placeholder="Enter email here" className="w-full h-full p-4 px-6 custom-bg-lightblue rounded-lg" required />
            </div>
            <div className="w-full h-full flex flex-col gap-2">
              <label for="name">Message:</label>
              <textarea id="name" type="text" placeholder="Enter message here" className="w-full h-full p-4 px-6 custom-bg-lightblue rounded-lg" required></textarea>
            </div>
            <a href="#/" className="py-4 text-center rounded-lg custom-bg-green text-white font-medium w-full shadow">Send Message</a>
          </form>
        </div>
      </section>
      <section className="flex bg-white rounded-lg shadow w-1/2 flex-col border-2 border-white sticky top-8">
        <img src={operatorsImage} alt="Tech support operators" className="object-cover w-full h-full rounded-tr-lg rounded-tl-lg" />
        <div className="flex w-full sm:flex-row flex-col">
          <a href="#/" className="py-4 text-center rounded-bl-lg custom-bg-darkblue text-white font-medium w-full shadow border-r-2 border-t-2 border-white flex items-center justify-center gap-2"><FontAwesomeIcon icon={faPhoneOffice} className="custom-text-green text-xl" />Start a Call</a>
          <a href="/services" className="py-4 text-center bg-white custom-text-darkblue font-medium w-full shadow rounded-br-lg border-t-2 flex items-center justify-center gap-2"><FontAwesomeIcon icon={faHeadset} className="custom-text-green text-xl" />Start a Chat</a>
        </div>
      </section>
    </div>
  );
}

export default HelpPage;