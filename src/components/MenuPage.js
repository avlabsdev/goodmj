import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faSparkles, faMagnifyingGlass } from '@awesome.me/kit-bc1b6271da/icons/classic/solid'

import menuSearchIcon from '../images/research.svg';
import chalkboardImage from '../images/chalkboard.png';

const MenuPage = () => {
  return (
    <div className="container mx-auto py-4 flex gap-8 px-4">
      <main className="flex flex-col gap-8 w-4/6">
        <section className="flex flex-col bg-white rounded-lg shadow">
          <div className="p-20 pb-0 flex flex-col gap-4 justify-center relative">
            <img src={chalkboardImage} alt="Chalkboard sign" className="w-1/5 absolute top-5 right-10 z-0" />
            <h1 className="custom-text-green 2xl:text-5xl font-bold xl:text-5xl flex items-center gap-4"><img src={menuSearchIcon} alt="Cannabis search icon" className="w-14" />Menu Search</h1>
            <p className="font-semibold 2xl:text-lg xl:text-base custom-text-darkblue">Find menus from dispensaries all around you in an instant.</p>
          </div>
          <div className="p-8 px-20 pb-20">
            <form className="flex w-full items-center text-base font-medium rounded-lg h-full relative z-10">
              <div className="w-fit custom-bg-yellow p-4 px-6 rounded-tl-lg rounded-bl-lg flex items-center h-full">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="text-lg custom-text-darkblue" />
              </div>
              <div className="w-full h-full flex items-center">
                <input type="text" placeholder="Search by name of a dispensary, address, or zip code" className="w-full h-full p-4 px-6 custom-bg-lightblue" required />
              </div>
              <div className="w-auto custom-bg-darkblue rounded-tr-lg rounded-br-lg h-full flex items-center">
                <button type="submit" className="text-white p-4">Search</button>
              </div>
            </form>
          </div>
        </section>
        <section className="bg-white rounded-lg p-8">
          <h2 className="text-3xl font-semibold custom-text-darkblue flex items-center gap-4"><FontAwesomeIcon icon={faStar} className="custom-text-green" />Discount & Deals</h2>
          <div className="flex gap-8 mt-8">
            <a href="#/" className="h-full rounded-lg w-1/4 aspect-square border-2 border-white shadow">
              Card
            </a>
            <a href="#/" className="h-full rounded-lg w-1/4 aspect-square border-2 border-white shadow">
              Card
            </a>
            <a href="#/" className="h-full rounded-lg w-1/4 aspect-square border-2 border-white shadow">
              Card
            </a>
            <a href="#/" className="flex font-medium h-full rounded-lg w-1/4 aspect-square border-2 border-white shadow custom-bg-green items-center justify-center text-white">
              View All
            </a>
          </div>
        </section>
        <section className="bg-white rounded-lg p-8">
          <h2 className="text-3xl font-semibold custom-text-darkblue flex items-center gap-4"><FontAwesomeIcon icon={faSparkles} className="custom-text-green" />Featured Products</h2>
          <div className="flex gap-8 mt-8">
            <a href="#/" className="h-full rounded-lg w-1/4 aspect-square border-2 border-white shadow">
              Card
            </a>
            <a href="#/" className="h-full rounded-lg w-1/4 aspect-square border-2 border-white shadow">
              Card
            </a>
            <a href="#/" className="h-full rounded-lg w-1/4 aspect-square border-2 border-white shadow">
              Card
            </a>
            <a href="#/" className="flex font-medium h-full rounded-lg w-1/4 aspect-square border-2 border-white shadow custom-bg-green items-center justify-center text-white">
              View All
            </a>
          </div>
        </section>
      </main>
      <aside className="w-2/6 bg-white rounded-lg h-min sticky top-8">
        Maps Preview/Details
        {/* Maps preview/Storefront thumbnails/images */}
        {/* Dispensary name/title */}
        {/* Business details and contact info */}
        {/* Get Directions button */}
        {/* View store menu button */}
      </aside>
    </div>
  );
}

export default MenuPage;