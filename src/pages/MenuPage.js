import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPercent,
  faRankingStar,
  faMagnifyingGlass,
  faArrowUpRightFromSquare,
} from "@awesome.me/kit-bc1b6271da/icons/classic/solid";

import menuSearchIcon from "../images/research.svg";
import chalkboardImage from "../images/chalkboard.png";
import cannabisOilsImage from "../images/cannabis-oil.jpg";
import cannabisEdiblesImage from "../images/cannabis-edibles.jpg";
import cannabisCartImage from "../images/cannabis-cart.jpg";
import budsImage from "../images/cannabis-buds.jpg";
import lifeOilsImage from "../images/canna-life-oils.jpg";
import vapePensImage from "../images/canna-vape-pens.jpg";
import storefrontImage from "../images/storefront.jpg";
import mapImage from "../images/maps-gfx.png";

const MenuPage = () => {
  return (
    <div className="container mx-auto flex gap-2">
      <main className="flex flex-col gap-2 lg:w-4/6">
        <section className="flex flex-col bg-white rounded-lg shadow">
          <div className="p-10 sm:p-10 md:p-20 md:pb-0 sm:pb-0 pb-0 flex flex-col gap-4 justify-center relative">
            <img
              src={chalkboardImage}
              alt="Chalkboard sign"
              className="w-1/4 absolute top-12 right-0 z-0 sm:top-8 md:top-8 lg:top-20 xl:top-8 2xl:top-0 hidden sm:block"
            />
            <h1 className="custom-text-green text-3xl sm:text-5xl md:text-5xl 2xl:text-5xl font-bold xl:text-5xl lg:text-5xl flex items-center gap-4">
              <img
                src={menuSearchIcon}
                alt="Cannabis search icon"
                className="w-14"
              />
              Menu Search
            </h1>
            <p className="custom-text-darkblue font-semibold pr-0 md:pr-24 2xl:text-xl xl:text-lg lg:pr-24 lg:text-lg sm:pr-24">
              Find menus from dispensaries all around you in an instant.
            </p>
            <p className="my-4 text-sm text-gray-600">
              *Search by dispensary name, address, or zip code.
            </p>
          </div>
          <div className="p-10 pt-0 sm:p-20 sm:pt-0 sm:px-10 sm:pb-10">
            <form className="flex flex-col sm:flex-row sm:w-full xl:w-5/6 lg:w-full items-center text-base font-medium rounded-lg h-full relative z-10">
              <div className="hidden w-fit custom-bg-yellow p-4 px-6 rounded-tl-lg rounded-bl-lg sm:flex items-center h-full">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="text-lg custom-text-darkblue"
                />
              </div>
              <div className="w-full h-full flex items-center">
                <input
                  type="text"
                  placeholder="Enter search here"
                  className="w-full h-full p-4 px-6 custom-bg-lightblue rounded-lg sm:rounded-none"
                  required
                />
              </div>
              <div className="sm:w-auto custom-bg-darkblue rounded-lg mt-2 sm:mt-0 w-full justify-center sm:rounded-tl-none sm:rounded-bl-none sm:rounded-tr-lg sm:rounded-br-lg h-full flex items-center">
                <button type="submit" className="text-white py-4 px-8">
                  Search
                </button>
              </div>
            </form>
          </div>
        </section>
        <section className="bg-white rounded-lg p-8">
          <div className="flex justify-between xl:flex-row lg:flex-col gap-2 items-start flex-col md:items-start md:flex-col xl:items-center">
            <h2 className="text-2xl sm:text-3xl font-semibold custom-text-darkblue flex gap-4 items-center">
              <FontAwesomeIcon icon={faPercent} className="custom-text-green" />
              Discounts & Deals
            </h2>
            <p className="text-sm text-gray-600">
              *Results based on your current location and search.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8 mt-8 lg:grid-cols-2 xl:grid-cols-4">
            <a
              href="#/"
              className="h-full rounded-lg aspect-square border-2 border-white shadow relative flex hover:-mt-1 ease-in-out duration-200"
            >
              <span className="flex items-center justify-center font-medium absolute uppercase left-0 top-8 px-4 py-2 custom-bg-yellow custom-text-darkblue rounded-lg shadow rounded-tl-none rounded-bl-none">
                10% Off
              </span>
              <span className="absolute bottom-0 flex items-center justify-center w-full custom-bg-green text-white py-2 rounded-br-lg rounded-bl-lg">
                Oils
              </span>
              <img
                src={cannabisOilsImage}
                alt="Cannabis oil"
                className="h-full w-full object-cover rounded-lg"
              />
            </a>
            <a
              href="#/"
              className="h-full rounded-lg aspect-square border-2 border-white shadow relative flex hover:-mt-1 ease-in-out duration-200"
            >
              <span className="flex items-center justify-center font-medium absolute uppercase left-0 top-8 px-4 py-2 custom-bg-yellow custom-text-darkblue rounded-lg shadow rounded-tl-none rounded-bl-none">
                20% Off
              </span>
              <span className="absolute bottom-0 flex items-center justify-center w-full custom-bg-green text-white py-2 rounded-br-lg rounded-bl-lg">
                Edibles
              </span>
              <img
                src={cannabisEdiblesImage}
                alt="Cannabis edibles"
                className="h-full w-full object-cover rounded-lg"
              />
            </a>
            <a
              href="#/"
              className="h-full rounded-lg aspect-square border-2 border-white shadow relative flex hover:-mt-1 ease-in-out duration-200"
            >
              <span className="flex items-center justify-center font-medium absolute uppercase left-0 top-8 px-4 py-2 custom-bg-yellow custom-text-darkblue rounded-lg shadow rounded-tl-none rounded-bl-none">
                30% Off
              </span>
              <span className="absolute bottom-0 flex items-center justify-center w-full custom-bg-green text-white py-2 rounded-br-lg rounded-bl-lg">
                Vape Cartridges
              </span>
              <img
                src={cannabisCartImage}
                alt="Cannabis vape cartridge"
                className="h-full w-full object-cover rounded-lg"
              />
            </a>
            <a
              href="#/"
              className="flex font-medium h-16 w-full sm:h-full rounded-lg aspect-square shadow custom-bg-darkblue items-center justify-center text-white"
            >
              View All
            </a>
          </div>
        </section>
        <section className="bg-white rounded-lg p-8">
          <div className="flex flex-col justify-between items-start xl:flex-row lg:flex-col gap-2 md:items-start md:flex-col xl:items-center">
            <h2 className="text-2xl sm:text-3xl font-semibold custom-text-darkblue flex gap-4 items-center">
              <FontAwesomeIcon
                icon={faRankingStar}
                className="custom-text-green"
              />
              Top-Rated Products
            </h2>
            <p className="text-sm text-gray-600">
              *Results based on your current location and search.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8 mt-8 lg:grid-cols-2 xl:grid-cols-4">
            <a
              href="#/"
              className="h-full rounded-lg aspect-square border-2 border-white shadow relative flex hover:-mt-1 ease-in-out duration-200"
            >
              <span className="flex items-center justify-center font-medium absolute uppercase left-0 top-8 px-4 py-2 custom-bg-yellow custom-text-darkblue rounded-lg shadow rounded-tl-none rounded-bl-none">
                10% Off
              </span>
              <span className="absolute bottom-0 flex items-center justify-center w-full custom-bg-green text-white py-2 rounded-br-lg rounded-bl-lg">
                Flower
              </span>
              <img
                src={budsImage}
                alt="Cannabis buds"
                className="h-full w-full object-cover rounded-lg"
              />
            </a>
            <a
              href="#/"
              className="h-full rounded-lg aspect-square border-2 border-white shadow relative flex hover:-mt-1 ease-in-out duration-200"
            >
              <span className="flex items-center justify-center font-medium absolute uppercase left-0 top-8 px-4 py-2 custom-bg-yellow custom-text-darkblue rounded-lg shadow rounded-tl-none rounded-bl-none">
                20% Off
              </span>
              <span className="absolute bottom-0 flex items-center justify-center w-full custom-bg-green text-white py-2 rounded-br-lg rounded-bl-lg">
                Oils
              </span>
              <img
                src={lifeOilsImage}
                alt="Cannabis oils"
                className="h-full w-full object-cover rounded-lg"
              />
            </a>
            <a
              href="#/"
              className="h-full rounded-lg aspect-square border-2 border-white shadow relative flex hover:-mt-1 ease-in-out duration-200"
            >
              <span className="flex items-center justify-center font-medium absolute uppercase left-0 top-8 px-4 py-2 custom-bg-yellow custom-text-darkblue rounded-lg shadow rounded-tl-none rounded-bl-none">
                30% Off
              </span>
              <span className="absolute bottom-0 flex items-center justify-center w-full custom-bg-green text-white py-2 rounded-br-lg rounded-bl-lg">
                Disposable Vapes
              </span>
              <img
                src={vapePensImage}
                alt="Cannabis oils"
                className="h-full w-full object-cover rounded-lg"
              />
            </a>
            <a
              href="#/"
              className="flex font-medium h-full rounded-lg aspect-square shadow custom-bg-darkblue items-center justify-center text-white h-16 w-full sm:h-full"
            >
              View All
            </a>
          </div>
        </section>
      </main>
      <aside className="w-2/6 bg-white rounded-lg h-min sticky top-2 hidden lg:block">
        <div>
          <img
            src={storefrontImage}
            alt="Storefront"
            className="border-2 border-white rounded-lg rounded-br-none rounded-bl-none"
          />
          <div className="py-5 px-2 bg-white border-l-2 border-r-2 border-white shadow">
            <h3 className="text-3xl lg:text-2xl xl:text-3xl font-medium text-center custom-text-darkblue">
              Medical & Recreational Cannabis Dispensary
            </h3>
          </div>
        </div>
        <div className="xl:p-10 lg:p-6 flex flex-col gap-4 custom-bg-lightblue border-l-2 border-r-2 border-white relative">
          <p className="flex lg:flex-col 2xl:flex-row lg:gap-2 xl:gap-2 z-10">
            <span className="font-medium custom-text-darkblue">Address:</span>{" "}
            12121 Madison Ave, Clifton, OH 44107
          </p>
          <p className="flex lg:flex-col 2xl:flex-row lg:gap-2 xl:gap-2 z-10">
            <span className="font-medium custom-text-darkblue">Hours:</span>7:00
            AM - 9:00 PM
          </p>
          <p className="flex lg:flex-col 2xl:flex-row lg:gap-2 xl:gap-2 z-10">
            <span className="font-medium custom-text-darkblue">Phone:</span>
            (123) 456-7890
          </p>
          <p className="flex lg:flex-col 2xl:flex-row lg:gap-2 xl:gap-2 z-10">
            <span className="font-medium custom-text-darkblue">Shop:</span>
            <a href="#/" className="underline hover:no-underline">
              ordercannabis.com
            </a>
          </p>
          <img
            src={mapImage}
            alt="Map"
            className="absolute w-1/2 xl:-right-8 lg:-right-10 xl:-bottom-8 lg:-bottom-5 overflow-hidden z-0"
          />
        </div>
        <button className="custom-bg-darkblue text-white w-full p-4 py-6 border-l-2 border-r-2 border-white flex items-center justify-center gap-2 relative z-10">
          Get Directions
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </button>
        <button className="custom-bg-yellow custom-text-darkblue w-full p-4 py-8 rounded-br-lg rounded-bl-lg border-l-2 border-r-2 border-b-2 font-medium">
          View Store Menu
        </button>
      </aside>
    </div>
  );
};

export default MenuPage;
