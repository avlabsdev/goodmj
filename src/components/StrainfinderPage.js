import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@awesome.me/kit-bc1b6271da/icons/classic/solid'

import microscopeIcon from '../images/microscope.svg';
import strainfinderHeroImage from '../images/strainfinder-hero-comp.png';
import cannabisFarmImage from '../images/cannabis-farm.jpg';
import strainfinderPreview from '../images/strainfinder-preview.png'

const StrainfinderPage = () => {
  return (
    <div className="container mx-auto flex flex-col gap-8 p-4">
      <section className="flex flex-col justify-between bg-white rounded-lg shadow">
        <div className="p-20 w-full flex flex-col gap-4 justify-center relative">
          <h1 className="custom-text-green 2xl:text-5xl font-bold xl:text-5xl flex items-center gap-4"><img src={microscopeIcon} alt="Microscope icon" className="w-14" />Strainfinder&trade;</h1>
          <p className="custom-text-darkblue font-semibold 2xl:text-xl xl:text-lg">Search any cannabis strain or product to learn more.</p>
          <p className="mt-4 text-sm text-gray-600">*Search by strain name, type, effects, etc.</p>
          <form className="flex w-4/6 text-base font-medium rounded-lg relative z-10 h-full items-stretch">
            <div className="w-fit custom-bg-yellow p-4 px-6 rounded-tl-lg rounded-bl-lg flex items-center">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="text-lg custom-text-darkblue" />
            </div>
            <div className="w-full flex items-center h-full">
              <input type="text" placeholder="Enter search here" className="w-full p-4 px-6 custom-bg-lightblue" required />
            </div>
            <div className="w-auto custom-bg-darkblue rounded-tr-lg rounded-br-lg flex items-center h-full">
              <button type="submit" className="text-white py-4 px-8">Search</button>
            </div>
          </form>
          <img src={strainfinderHeroImage} alt="3D illustration" className="w-1/3 absolute right-0 top-2" />
        </div>
      </section>
      <section className="flex gap-8">
        <div className="w-1/2 bg-white rounded-lg border-2 border-white shadow">
          <img src={cannabisFarmImage} alt="Cannabis farm handler" className="rounded-lg object-cover w-full h-full" />
        </div>
        <div className="w-1/2 bg-white rounded-lg border-2 border-white shadow flex flex-col justify-center p-10 gap-4">
          <div className="flex flex-col justify-center items-center gap-2">
            <h2 className="text-center text-3xl font-semibold custom-text-darkblue">Peyote Kush THCa Flower</h2>
            <span className="text-center font-semibold uppercase custom-text-green text-xl border-b-2 custom-border-yellow">Indica</span>
          </div>
          <img src={strainfinderPreview} alt="Strainfinder data preview" className="rounded-bl-lg rounded-br-lg w-full mx-auto" />
          <div className="flex gap-2 mt-4 w-full sm:flex-row flex-col">
            <a href="#/" className="py-4 text-center rounded-md custom-bg-green text-white font-medium w-full shadow">Locate Dispensaries</a>
            <a href="#/" className="py-4 text-center rounded-md custom-bg-darkblue text-white font-medium w-full shadow">View Full Details</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StrainfinderPage;