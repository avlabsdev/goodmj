import React from 'react';

import healthIcon from '../images/health.svg';

const HelpPage = () => {
  return (
    <div className="container mx-auto py-4 flex gap-8 px-4">
        <section className="flex justify-between items-center bg-white rounded-lg shadow w-1/2">
          <div className="p-20 w-full flex flex-col gap-4 justify-center relative">
            <h1 className="custom-text-green 2xl:text-5xl font-bold xl:text-5xl flex items-center gap-4"><img src={healthIcon} alt="Heart icon" className="w-14" />Help & Support</h1>
            <p className="custom-text-darkblue font-semibold 2xl:text-xl xl:text-lg">We have you covered with our 24/7 support team.
            </p>
            <p className="my-4 text-sm text-gray-600">*Submit a trouble ticket below, give us a call, or start a chat.</p>
          </div>
        </section>
        <section className="flex justify-between items-center bg-white rounded-lg shadow w-1/2">
          <div className="p-20 w-full flex flex-col gap-4 justify-center relative">
            Image w/ buttons
          </div>
        </section>
    </div>
  );
}

export default HelpPage;