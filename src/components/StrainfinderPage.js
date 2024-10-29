import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@awesome.me/kit-bc1b6271da/icons/classic/solid'

import microscopeIcon from '../images/microscope.svg';
import strainfinderHeroImage from '../images/strainfinder-hero-comp.png';

const StrainfinderPage = () => {
  return (
    <div className="container mx-auto py-4 flex flex-col gap-8 px-4">
      <main className="bg-white rounded-lg shadow">
        <section className="flex flex-col justify-between">
          <div className="p-20 w-full flex flex-col gap-4 justify-center relative">
            <h1 className="custom-text-green 2xl:text-5xl font-bold xl:text-5xl flex items-center gap-4"><img src={microscopeIcon} alt="Microscope icon" className="w-14" />Strainfinder&trade;</h1>
            <p className="custom-text-darkblue font-semibold 2xl:text-xl xl:text-lg">Search any cannabis strain or product to learn more.</p>
            <p className="my-4 text-sm text-gray-600">*Search by strain name, type, effects, etc.</p>
            <img src={strainfinderHeroImage} alt="3D illustration" className="w-1/3 absolute right-0 top-0" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default StrainfinderPage;