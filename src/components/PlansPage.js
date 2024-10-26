import React from 'react';
import plansHeroGfx from '../images/plans-hero-gfx.png';
import checkIcon from '../images/check-icon.svg';
import groupIcon from '../images/people-line-solid.svg';

const PlansPage = () => {
  return (
    <div className="container mx-auto py-4 flex flex-col gap-8 px-4">
      <main className="flex flex-col gap-8">
        <section className="flex justify-between items-center bg-white rounded-lg shadow relative overflow-hidden">
          <img src={plansHeroGfx} alt="Banner graphic" className="absolute -right-12 -top-28 w-1/2" style={{ top: '-7.5rem' }} />
          <div className="p-20 w-full flex flex-col gap-4 justify-center relative">
            <h1 className="custom-text-green 2xl:text-5xl font-bold xl:text-5xl">Plans & Pricing</h1>
            <p className="font-semibold 2xl:text-lg xl:text-base custom-text-darkblue">Finding affordable cannabis products should not be hell and back for you.</p>
          </div>
        </section>
        <section className="flex justify-between items-start gap-8">
          <div className="w-1/3">
            <h2 className="w-full custom-bg-darkblue text-white p-6 text-center rounded-tl-lg rounded-tr-lg border-2 border-white font-medium flex items-center justify-center gap-2 border-b-0 text-lg"><img src={groupIcon} alt="Community plan icon" className="w-8" />Community Plan</h2>
            <div className="p-2 custom-bg-yellow text-center font-medium uppercase text-sm border-l-2 border-r-2 border-white">
              $100 Per Month
            </div>
            <div className="bg-white rounded-lg rounded-tl-none rounded-tr-none p-8 flex flex-col gap-4">
              <ul className="flex flex-col gap-4 mb-4">
                <li className="flex items-start gap-2"><img src={checkIcon} alt="Check icon" className="w-4" />One ounce of flower/month.</li>
                <li className="flex items-start gap-2"><img src={checkIcon} alt="Check icon" className="w-4" />Free delivery, if needed.</li>
                <li className="flex items-start gap-2"><img src={checkIcon} alt="Check icon" className="w-4" />Free eighth of your choice in the low to mid
                  range flower category. (restrictions apply)</li>
                <li className="flex items-start gap-2"><img src={checkIcon} alt="Check icon" className="w-4" />Exclusive fresh weekly discounts and sales
                  up to 75% off items.</li>
              </ul>
              <a href="#/" className="py-4 text-center rounded-md custom-bg-green text-white font-medium w-full shadow">Select Plan</a>
            </div>
          </div>
          <div className="w-1/3">
            <h2 className="w-full custom-bg-darkblue text-white p-6 text-center rounded-tl-lg rounded-tr-lg border-2 border-white font-medium flex items-center justify-center gap-2 border-b-0 text-lg"><img src={groupIcon} alt="Community plan icon" className="w-8" />Top Tier Plan</h2>
            <div className="p-2 custom-bg-yellow text-center font-medium uppercase text-sm border-l-2 border-r-2 border-white">
              $200 Per Month
            </div>
            <div className="bg-white rounded-lg rounded-tl-none rounded-tr-none p-8 flex flex-col gap-4">
              <ul className="flex flex-col gap-4 mb-4">
                <li className="flex items-start gap-2"><img src={checkIcon} alt="Check icon" className="w-4" />One ounce of flower/month.</li>
                <li className="flex items-start gap-2"><img src={checkIcon} alt="Check icon" className="w-4" />Free delivery, if needed.</li>
                <li className="flex items-start gap-2"><img src={checkIcon} alt="Check icon" className="w-4" />Free eighth of your choice in the low to mid
                  range flower category. (restrictions apply)</li>
                <li className="flex items-start gap-2"><img src={checkIcon} alt="Check icon" className="w-4" />Exclusive fresh weekly discounts and sales
                  up to 75% off items.</li>
              </ul>
              <a href="#/" className="py-4 text-center rounded-md custom-bg-green text-white font-medium w-full shadow">Select Plan</a>
            </div>
          </div>
          <div className="w-1/3">
            <h2 className="w-full custom-bg-darkblue text-white p-6 text-center rounded-tl-lg rounded-tr-lg border-2 border-white font-medium flex items-center justify-center gap-2 border-b-0 text-lg"><img src={groupIcon} alt="Community plan icon" className="w-8" />Pay-As-You-Go Perk Plan</h2>
            <div className="p-2 custom-bg-yellow text-center font-medium uppercase text-sm border-l-2 border-r-2 border-white">
              $20 Per Month
            </div>
            <div className="bg-white rounded-lg rounded-tl-none rounded-tr-none p-8 flex flex-col gap-4">
              <ul className="flex flex-col gap-4 mb-4">
                <li className="flex items-start gap-2"><img src={checkIcon} alt="Check icon" className="w-4" />One ounce of flower/month.</li>
                <li className="flex items-start gap-2"><img src={checkIcon} alt="Check icon" className="w-4" />Free delivery, if needed.</li>
                <li className="flex items-start gap-2"><img src={checkIcon} alt="Check icon" className="w-4" />Free eighth of your choice in the low to mid
                  range flower category. (restrictions apply)</li>
                <li className="flex items-start gap-2"><img src={checkIcon} alt="Check icon" className="w-4" />Exclusive fresh weekly discounts and sales
                  up to 75% off items.</li>
              </ul>
              <a href="#/" className="py-4 text-center rounded-md custom-bg-green text-white font-medium w-full shadow">Select Plan</a>
            </div>
          </div>
        </section>
        <p className="text-white text-center">*Don't see a plan that works for you? We can help you create a custom plan just for you. <a href="#/" className="underline hover:no-underline">Let us know</a>!</p>
      </main>
    </div>
  );
}

export default PlansPage;