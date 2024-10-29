import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPercent, faRankingStar, faMagnifyingGlass, faArrowUpRightFromSquare } from '@awesome.me/kit-bc1b6271da/icons/classic/solid'

import menuSearchIcon from '../images/research.svg';
import chalkboardImage from '../images/chalkboard.png';
import cannabisOilsImage from '../images/cannabis-oil.jpg';
import cannabisEdiblesImage from '../images/cannabis-edibles.jpg';
import cannabisCartImage from '../images/cannabis-cart.jpg';
import budsImage from '../images/cannabis-buds.jpg';
import lifeOilsImage from '../images/canna-life-oils.jpg';
import vapePensImage from '../images/canna-vape-pens.jpg';
import storefrontImage from '../images/storefront.jpg';

const MenuPage = () => {
  return (
    <div className="container mx-auto py-4 flex gap-8 px-4">
      <main className="flex flex-col gap-8 w-4/6">
        <section className="flex flex-col bg-white rounded-lg shadow">
          <div className="p-20 pb-0 flex flex-col gap-4 justify-center relative">
            <img src={chalkboardImage} alt="Chalkboard sign" className="w-1/4 absolute top-14 right-0 z-0" />
            <h1 className="custom-text-green 2xl:text-5xl font-bold xl:text-5xl flex items-center gap-4"><img src={menuSearchIcon} alt="Cannabis search icon" className="w-14" />Menu Search</h1>
            <p className="custom-text-darkblue font-semibold 2xl:text-xl xl:text-lg">Find menus from dispensaries all around you in an instant.</p>
            <p className="my-4 text-sm text-gray-600">*Search by dispensary name, address, or zip code.</p>
          </div>
          <div className="p-8 px-20 pb-20 py-0">
            <form className="flex w-5/6 items-center text-base font-medium rounded-lg h-full relative z-10">
              <div className="w-fit custom-bg-yellow p-4 px-6 rounded-tl-lg rounded-bl-lg flex items-center h-full">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="text-lg custom-text-darkblue" />
              </div>
              <div className="w-full h-full flex items-center">
                <input type="text" placeholder="Enter search here" className="w-full h-full p-4 px-6 custom-bg-lightblue" required />
              </div>
              <div className="w-auto custom-bg-darkblue rounded-tr-lg rounded-br-lg h-full flex items-center">
                <button type="submit" className="text-white py-4 px-8">Search</button>
              </div>
            </form>
          </div>
        </section>
        <section className="bg-white rounded-lg p-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold custom-text-darkblue flex items-center gap-4"><FontAwesomeIcon icon={faPercent} className="custom-text-green" />Discounts & Deals</h2>
            <p className="text-sm text-gray-600">*Results based on your current location and search.</p>
          </div>
          <div className="flex gap-8 mt-8">
            <a href="#/" className="h-full rounded-lg w-1/4 aspect-square border-2 border-white shadow relative flex justify-center items-center">
              <img src={cannabisOilsImage} alt="Cannabis oil" className="h-full w-full object-cover rounded-lg" />
            </a>
            <a href="#/" className="h-full rounded-lg w-1/4 aspect-square border-2 border-white shadow">
              <img src={cannabisEdiblesImage} alt="Cannabis edibles" className="h-full w-full object-cover rounded-lg" />
            </a>
            <a href="#/" className="h-full rounded-lg w-1/4 aspect-square border-2 border-white shadow">
              <img src={cannabisCartImage} alt="Cannabis vape cartridge" className="h-full w-full object-cover rounded-lg" />
            </a>
            <a href="#/" className="flex font-medium h-full rounded-lg w-1/4 aspect-square shadow custom-bg-green items-center justify-center text-white">
              View All
            </a>
          </div>
        </section>
        <section className="bg-white rounded-lg p-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold custom-text-darkblue flex items-center gap-4"><FontAwesomeIcon icon={faRankingStar} className="custom-text-green" />Top-Rated Products</h2>
            <p className="text-sm text-gray-600">*Results based on your current location and search.</p>
          </div>
          <div className="flex gap-8 mt-8">
            <a href="#/" className="h-full rounded-lg w-1/4 aspect-square border-2 border-white shadow relative flex justify-center items-center">
              <img src={budsImage} alt="Cannabis buds" className="h-full w-full object-cover rounded-lg" />
            </a>
            <a href="#/" className="h-full rounded-lg w-1/4 aspect-square border-2 border-white shadow">
              <img src={lifeOilsImage} alt="Cannabis oils" className="h-full w-full object-cover rounded-lg" />
            </a>
            <a href="#/" className="h-full rounded-lg w-1/4 aspect-square border-2 border-white shadow">
              <img src={vapePensImage} alt="Cannabis oils" className="h-full w-full object-cover rounded-lg" />
            </a>
            <a href="#/" className="flex font-medium h-full rounded-lg w-1/4 aspect-square shadow custom-bg-green items-center justify-center text-white">
              View All
            </a>
          </div>
        </section>
      </main>
      <aside className="w-2/6 bg-white rounded-lg h-min sticky top-8">
        <div>
          <img src={storefrontImage} alt="Storefront" className="border-2 border-white rounded-lg rounded-br-none rounded-bl-none" />
          <div className="py-5 px-2 bg-white border-l-2 border-r-2 border-white shadow">
            <h3 className="text-3xl font-medium text-center custom-text-darkblue">Medical & Recreational Cannabis Dispensary</h3>
          </div>
        </div>
        <div className="p-10 flex flex-col gap-4 custom-bg-lightblue border-l-2 border-r-2 border-white">
          <p className="flex gap-4"><span className="font-medium custom-text-darkblue">Address:</span> 12121 Madison Ave, Clifton, OH 44107</p>
          <p className="flex gap-4"><span className="font-medium custom-text-darkblue">Hours:</span>7:00 AM - 9:00 PM</p>
          <p className="flex gap-4"><span className="font-medium custom-text-darkblue">Phone:</span>(123) 456-7890</p>
          <p className="flex gap-4"><span className="font-medium custom-text-darkblue">Shop:</span><a href="#/" className="underline hover:no-underline">ordercannabis.com</a></p>
        </div>
        <button className="custom-bg-darkblue text-white w-full p-4 py-6 border-l-2 border-r-2 border-white flex items-center justify-center gap-2">Get Directions<FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button>
        <button className="custom-bg-yellow custom-text-darkblue w-full p-4 py-8 rounded-br-lg rounded-bl-lg border-l-2 border-r-2 border-b-2 border-white font-medium">View Store Menu</button>
        {/* Get Directions button */}
        {/* View store menu button */}
      </aside>
    </div>
  );
}

export default MenuPage;