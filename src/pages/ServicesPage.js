import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@awesome.me/kit-bc1b6271da/icons/classic/solid";

import certIcon from "../images/certificate.svg";
import weedLabPhoto from "../images/weed-lab.jpg";
import drugsIcon from "../images/drugs.svg";
import locationIcon from "../images/location.svg";
import pillsIcon from "../images/pills.svg";
import bagIcon from "../images/bag.svg";
import extractIcon from "../images/extract.svg";

const ServicesPage = () => {
  return (
    <div className="container mx-auto flex flex-col gap-8">
      <main>
        <section className="flex justify-between gap-2 flex-col lg:flex-row">
          <div className="p-8 sm:p-20 lg:w-4/6 flex flex-col gap-4 relative bg-white rounded-lg shadow md:w-full">
            <div className="flex items-center gap-4 flex-col sm:flex-row text-center sm:text-left">
              <img src={certIcon} alt="Certificate icon" className="w-14" />
              <h1 className="custom-text-green 2xl:text-5xl font-bold xl:text-5xl lg:text-4xl md:text-5xl text-4xl">
                Services & Features
              </h1>
            </div>
            <p className="custom-text-darkblue font-semibold 2xl:text-xl xl:text-lg">
              We have an ever-growing list of services and features to offer you
              with affordable pricing options that work for you.
            </p>
            <p className="mt-4 text-sm text-gray-600">
              *Click on any of the below services or features to learn more.
            </p>
            <a
              href="#/"
              className="flex-col sm:flex-row flex text-base font-medium rounded-lg"
            >
              <div className="rounded-tl-lg rounded-tr-lg custom-bg-yellow p-4 sm:rounded-tl-lg sm:rounded-bl-lg sm:rounded-tr-none flex items-center justify-center gap-2">
                <img
                  src={drugsIcon}
                  alt="Cannabis bottle icon"
                  className="w-12"
                />
                <p className="sm:hidden custom-text-darkblue">
                  Benefits & Discounts
                </p>
              </div>
              <div className="w-full p-4 px-6 custom-bg-lightblue flex items-center text-center sm:text-left">
                <p>
                  Obtain a medical cannabis card for extra benefits and
                  discounted pricing.
                </p>
              </div>
              <div className="py-4 px-5 custom-bg-darkblue sm:rounded-tr-lg sm:rounded-br-lg flex items-center justify-center rounded-bl-lg rounded-br-lg sm:rounded-bl-none gap-2">
                <FontAwesomeIcon
                  icon={faCircleInfo}
                  className="text-white text-3xl"
                />
                <p className="sm:hidden text-white">Click for more details</p>
              </div>
            </a>
            <a
              href="#/"
              className="flex-col sm:flex-row flex text-base font-medium rounded-lg"
            >
              <div className="rounded-tl-lg rounded-tr-lg custom-bg-yellow p-4 sm:rounded-tl-lg sm:rounded-bl-lg flex items-center justify-center sm:rounded-tr-none gap-2">
                <img src={locationIcon} alt="Location icon" className="w-12" />
                <p className="sm:hidden custom-text-darkblue">
                  Dispensary Locations
                </p>
              </div>
              <div className="w-full p-4 px-6 custom-bg-lightblue flex items-center text-center sm:text-left">
                <p>We work with all dispensaries in the USA.</p>
              </div>
              <div className="py-4 px-5 custom-bg-darkblue sm:rounded-tr-lg sm:rounded-br-lg flex items-center justify-center rounded-bl-lg rounded-br-lg sm:rounded-bl-none gap-2">
                <FontAwesomeIcon
                  icon={faCircleInfo}
                  className="text-white text-3xl"
                />
                <p className="sm:hidden text-white">Click for more details</p>
              </div>
            </a>
            <a
              href="#/"
              className="flex-col sm:flex-row flex text-base font-medium rounded-lg"
            >
              <div className="rounded-tl-lg rounded-tr-lg custom-bg-yellow p-4 sm:rounded-tl-lg sm:rounded-bl-lg flex items-center justify-center sm:rounded-tr-none gap-2">
                <img src={pillsIcon} alt="Medication icon" className="w-12" />
                <p className="sm:hidden custom-text-darkblue">Proper Dosages</p>
              </div>
              <div className="w-full p-4 px-6 custom-bg-lightblue flex items-center text-center sm:text-left">
                <p>
                  Get the proper dosages you need for easier medicine
                  administration.
                </p>
              </div>
              <div className="py-4 px-5 custom-bg-darkblue sm:rounded-tr-lg sm:rounded-br-lg flex items-center justify-center rounded-bl-lg rounded-br-lg sm:rounded-bl-none gap-2">
                <FontAwesomeIcon
                  icon={faCircleInfo}
                  className="text-white text-3xl"
                />
                <p className="sm:hidden text-white">Click for more details</p>
              </div>
            </a>
            <a
              href="#/"
              className="flex-col sm:flex-row flex text-base font-medium rounded-lg"
            >
              <div className="rounded-tl-lg rounded-tr-lg custom-bg-yellow p-4 sm:rounded-tl-lg sm:rounded-bl-lg flex items-center justify-center sm:rounded-tr-none gap-2">
                <img src={bagIcon} alt="Shopping bag icon" className="w-12" />
                <p className="sm:hidden custom-text-darkblue">
                  Cannabis Products
                </p>
              </div>
              <div className="w-full p-4 px-6 custom-bg-lightblue flex items-center text-center sm:text-left">
                <p>
                  All the cannabis products you need at a price you can afford.
                </p>
              </div>
              <div className="py-4 px-5 custom-bg-darkblue sm:rounded-tr-lg sm:rounded-br-lg flex items-center justify-center rounded-bl-lg rounded-br-lg sm:rounded-bl-none gap-2">
                <FontAwesomeIcon
                  icon={faCircleInfo}
                  className="text-white text-3xl"
                />
                <p className="sm:hidden text-white">Click for more details</p>
              </div>
            </a>
            <a
              href="#/"
              className="flex-col sm:flex-row flex text-base font-medium rounded-lg"
            >
              <div className="rounded-tl-lg rounded-tr-lg custom-bg-yellow p-4 sm:rounded-tl-lg sm:rounded-bl-lg flex items-center justify-center sm:rounded-tr-none gap-2">
                <img
                  src={extractIcon}
                  alt="Lab testing icon"
                  className="w-12"
                />
                <p className="sm:hidden custom-text-darkblue">
                  Quality Assurance
                </p>
              </div>
              <div className="w-full p-4 px-6 custom-bg-lightblue flex items-center text-center sm:text-left">
                <p>
                  All products are rigorously lab tested for quality assurance.
                </p>
              </div>
              <div className="py-4 px-5 custom-bg-darkblue sm:rounded-tr-lg sm:rounded-br-lg flex items-center justify-center rounded-bl-lg rounded-br-lg sm:rounded-bl-none gap-2">
                <FontAwesomeIcon
                  icon={faCircleInfo}
                  className="text-white text-3xl"
                />
                <p className="sm:hidden text-white">Click for more details</p>
              </div>
            </a>
          </div>
          <div className="lg:w-2/6 flex flex-col gap-6 md:w-full">
            <img
              src={weedLabPhoto}
              alt="Cannabis lab"
              className="rounded-lg shadow border-2 border-white"
            />
            <h2 className="custom-text-green font-bold 2xl:text-xl xl:text-xl px-4">
              We only work with companies that pride themselves on proper lab
              testing and quality assurance.
            </h2>
            <p className="text-white px-4">
              Our promise is to provide you with the highest quality cannabis
              for the lowest costs available. We guarantee high-quality products
              that go through rigorous lab testing and quality assurance.
            </p>
            <div className="flex gap-2 mt-4 w-full px-4">
              <a
                href="/plans"
                className="py-4 text-center rounded-md custom-bg-green custom-text-darkblue font-medium w-full shadow"
              >
                View Plans
              </a>
              <a
                href="/menu"
                className="py-4 text-center rounded-md custom-text-darkblue bg-white font-medium w-full shadow"
              >
                View Menu
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ServicesPage;
