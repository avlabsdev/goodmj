import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@awesome.me/kit-bc1b6271da/icons/classic/solid'

import certIcon from '../images/certificate.svg';
import weedLabPhoto from '../images/weed-lab.jpg';
import drugsIcon from '../images/drugs.svg';
import locationIcon from '../images/location.svg';
import pillsIcon from '../images/pills.svg';
import bagIcon from '../images/bag.svg';
import extractIcon from '../images/extract.svg';

const ServicesPage = () => {
  return (
    <div className="container mx-auto py-4 flex flex-col gap-8 px-4">
      <main>
        <section className="flex lg:flex-row flex-col justify-between gap-8">
          <div className="lg:p-20 p-10 lg:w-4/6 w-full flex flex-col gap-4 relative bg-white rounded-lg shadow">
            <div className="flex items-center gap-4">
              <img src={certIcon} alt="Certificate icon" className="w-14" />
              <h1 className="custom-text-green 2xl:text-5xl font-bold xl:text-3xl">Services & Features</h1>
            </div>
            <p className="custom-text-darkblue font-semibold 2xl:text-xl xl:text-lg">We have an ever-growing list of services and features to offer
              you with affordable pricing options that work for you.</p>
            <p className="mt-4 text-sm text-gray-600">*Click on any of the below services or features to learn more.</p>
            <a href="#/" className="flex w-full lg:flex-row flex-col items-center text-base rounded-lg">
              <div className="lg:w-fit w-full justify-center custom-bg-yellow p-4 rounded-lg lg:rounded-tl-lg lg:rounded-bl-lg rounded-bl-none rounded-br-none flex items-center h-full gap-2">
                <img src={drugsIcon} alt="Cannabis bottle icon" className="lg:w-10 w-8" />
                <h2 className="w-auto font-medium lg:hidden">Prescription Benefits</h2>
              </div>
              <div className="w-full lg:py-4 lg:px-6 p-8 custom-bg-lightblue h-full flex items-center">
                <p className="lg:font-medium lg:text-base text-sm">Obtain a medical cannabis card for extra benefits and discounted pricing.</p>
              </div>
              <div className="lg:w-auto w-full py-4 px-5 custom-bg-darkblue lg:rounded-tr-lg lg:rounded-br-lg h-full flex justify-center items-center rounded-lg rounded-tl-none rounded-tr-none gap-2">
                <FontAwesomeIcon icon={faCircleInfo} className="text-white lg:text-2xl text-2xl" />
                <p className="text-white text-sm">Click to find out more!</p>
              </div>
            </a>
            <a href="#/" className="flex w-full items-center text-base font-medium rounded-lg">
              <div className="w-fit custom-bg-yellow p-4 rounded-tl-lg rounded-bl-lg flex items-center h-full">
                <img src={locationIcon} alt="Location icon" className="w-10" />
              </div>
              <div className="w-full p-4 px-6 custom-bg-lightblue h-full flex items-center">
                <p>We work with all dispensaries in the USA.</p>
              </div>
              <div className="w-auto py-4 px-5 custom-bg-darkblue rounded-tr-lg rounded-br-lg h-full flex items-center">
                <FontAwesomeIcon icon={faCircleInfo} className="text-white lg:text-2xl" />
              </div>
            </a>
            <a href="#/" className="flex w-full items-center text-base font-medium rounded-lg">
              <div className="w-fit custom-bg-yellow p-4 rounded-tl-lg rounded-bl-lg flex items-center h-full">
                <img src={pillsIcon} alt="Medication icon" className="w-10" />
              </div>
              <div className="w-full p-4 px-6 custom-bg-lightblue h-full flex items-center">
                <p>Get the proper dosages you need for easier medicine administration.</p>
              </div>
              <div className="w-auto py-4 px-5 custom-bg-darkblue rounded-tr-lg rounded-br-lg h-full flex items-center">
                <FontAwesomeIcon icon={faCircleInfo} className="text-white text-2xl" />
              </div>
            </a>
            <a href="#/" className="flex w-full items-center text-base font-medium rounded-lg">
              <div className="w-fit custom-bg-yellow p-4 rounded-tl-lg rounded-bl-lg flex items-center h-full">
                <img src={bagIcon} alt="Shopping bag icon" className="w-10" />
              </div>
              <div className="w-full p-4 px-6 custom-bg-lightblue h-full flex items-center">
                <p>All the cannabis products you need at a price you can afford.</p>
              </div>
              <div className="w-auto py-4 px-5 custom-bg-darkblue rounded-tr-lg rounded-br-lg h-full flex items-center">
                <FontAwesomeIcon icon={faCircleInfo} className="text-white text-2xl" />
              </div>
            </a>
            <a href="#/" className="flex w-full items-center text-base font-medium rounded-lg">
              <div className="w-fit custom-bg-yellow p-4 rounded-tl-lg rounded-bl-lg flex items-center h-full">
                <img src={extractIcon} alt="Lab testing icon" className="w-10" />
              </div>
              <div className="w-full p-4 px-6 custom-bg-lightblue h-full flex items-center">
                <p>All products are rigorously lab tested for quality assurance.</p>
              </div>
              <div className="w-auto py-4 px-5 custom-bg-darkblue rounded-tr-lg rounded-br-lg h-full flex items-center">
                <FontAwesomeIcon icon={faCircleInfo} className="text-white text-2xl" />
              </div>
            </a>
          </div>
          <div className="lg:w-2/6 w-full flex flex-col gap-6">
            <img src={weedLabPhoto} alt="Cannabis lab" className="rounded-lg shadow border-2 border-white" />
            <h2 className="custom-text-green font-bold 2xl:text-xl xl:text-xl px-4">We only work with companies that
              pride themselves on proper lab
              testing and quality assurance.</h2>
            <p className="text-white px-4">Our promise is to provide you with the highest
              quality cannabis for the lowest costs available. We guarantee high-quality products that
              go through rigorous lab testing and quality
              assurance.</p>
            <div className="flex gap-2 mt-4 w-full px-4">
              <a href="/plans" className="py-4 text-center rounded-lg custom-bg-green custom-text-darkblue font-medium w-full shadow">View Plans</a>
              <a href="/menu" className="py-4 text-center rounded-lg custom-text-darkblue bg-white font-medium w-full shadow">View Menu</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ServicesPage;