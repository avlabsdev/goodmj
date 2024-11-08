import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@awesome.me/kit-bc1b6271da/icons/classic/solid";

import microscopeIcon from "../images/microscope.svg";
import strainfinderHeroImage from "../images/strainfinder-hero-comp.png";
import cannabisFarmImage from "../images/cannabis-farm.jpg";
import strainfinderPreview from "../images/strainfinder-preview.png";

const StrainfinderPage = () => {
  return (
    <div className="container mx-auto flex flex-col gap-2">
      <section className="flex flex-col justify-between bg-white rounded-lg shadow">
        <div className="p-10 sm:p-20 w-full flex flex-col gap-4 justify-center relative">
          <h1 className="text-2xl custom-text-green font-bold lg:text-5xl md:text-4xl sm:text-3xl flex items-center gap-4">
            <img
              src={microscopeIcon}
              alt="Microscope icon"
              className="w-16 mb-2"
            />
            Strainfinder&trade;
          </h1>
          <p className="pr-0 custom-text-darkblue sm:pr-32 font-semibold 2xl:text-xl xl:text-lg">
            Search any cannabis strain or product to learn more.
          </p>
          <p className="mt-4 text-sm text-gray-600">
            *Search for a strain or product.
          </p>
          <form className="flex flex-col sm:flex-row gap-2 sm:gap-0 w-full md:w-4/6 text-base font-medium rounded-lg relative z-10 h-full items-stretch">
            <div className="w-fit custom-bg-yellow p-4 px-6 rounded-tl-lg rounded-bl-lg sm:flex items-center hidden">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-lg custom-text-darkblue"
              />
            </div>
            <div className="w-full flex items-center h-full">
              <input
                type="text"
                placeholder="Enter search here"
                className="w-full p-4 px-6 custom-bg-lightblue rounded-lg sm:rounded-none"
                required
              />
            </div>
            <div className="w-auto custom-bg-darkblue sm:rounded-tr-lg sm:rounded-tl-none sm:rounded-bl-none sm:rounded-br-lg flex items-center h-full justify-center rounded-lg">
              <button type="submit" className="text-white py-4 px-8">
                Search
              </button>
            </div>
          </form>
          <img
            src={strainfinderHeroImage}
            alt="3D illustration"
            className="hidden sm:block w-1/3 xl:w-2/5 2xl:w-1/3 md:w-1/2 sm:w-1/3 sm:right-4 sm:top-20 top-12 right-0 md:-right-12 md:top-8 absolute lg:-right-8 lg:top-0 xl:top-2 lg:w-1/2"
          />
        </div>
      </section>
      <section className="flex flex-col lg:flex-row gap-2">
        <div className="w-full lg:w-1/2 bg-white rounded-lg border-2 border-white shadow">
          <img
            src={cannabisFarmImage}
            alt="Cannabis farm handler"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
        <div className="w-full lg:w-1/2 bg-white rounded-lg border-2 border-white shadow flex flex-col justify-center p-10 gap-4">
          <div className="flex flex-col justify-center items-center gap-2">
            <h2 className="text-center text-3xl font-semibold custom-text-darkblue">
              Peyote Kush THCa Flower
            </h2>
            <span className="text-center font-semibold uppercase custom-text-green text-xl border-b-2 custom-border-yellow">
              Indica
            </span>
          </div>
          <img
            src={strainfinderPreview}
            alt="Strainfinder data preview"
            className="rounded-bl-lg rounded-br-lg w-full mx-auto"
          />
          <div className="flex gap-2 mt-4 w-full sm:flex-row flex-col">
            <a
              href="#/"
              className="py-4 text-center rounded-md custom-bg-green text-white font-medium w-full shadow"
            >
              Locate Dispensaries
            </a>
            <a
              href="#/"
              className="py-4 text-center rounded-md custom-bg-darkblue text-white font-medium w-full shadow"
            >
              View Full Details
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StrainfinderPage;
