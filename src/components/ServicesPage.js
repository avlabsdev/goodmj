import React from 'react';
import certIcon from '../images/certificate.svg';

const ServicesPage = () => {
  return (
    <div className="container mx-auto py-4 flex flex-col gap-8">
      <main>
        <section className="flex justify-between gap-8">
          <div className="p-20 w-3/5 flex flex-col gap-4 justify-center relative bg-white rounded-lg shadow">
            <div className="flex items-center gap-4">
              <img src={certIcon} alt="Certificate icon" className="w-14" />
              <h1 className="custom-text-green 2xl:text-5xl font-bold xl:text-3xl">Services & Features</h1>
            </div>
            <p className="custom-text-darkblue font-semibold 2xl:text-xl xl:text-lg">We have an ever-growing list of services and features to offer
            you with affordable pricing options that work for you.</p>
            <p>*This is more text to explain the below content.</p>
          </div>
          <div className="w-2/5">
            <p>Hello!</p>
            <div className="flex gap-2 mt-4 w-full">
              <a href="#/" className="py-4 text-center rounded-md custom-bg-green custom-text-darkblue font-medium w-full">How It Works</a>
              <a href="#/" className="py-4 text-center rounded-md custom-text-darkblue bg-white font-medium w-full">View Services</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ServicesPage;