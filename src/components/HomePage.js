import React from 'react';
import weedJarPhoto from '../images/weed-jar.jpg';
import givingHandPhoto from '../images/giving-cannabis.svg';

const HomePage = () => {
  return (
    <div className="container mx-auto py-4 flex flex-col gap-8">
      <main className="bg-white rounded-lg shadow">
        <section className="flex justify-between items-center">
          <div className="w-1/2 border-white border-2 rounded-lg">
            <img src={weedJarPhoto} alt="Cannabis jar on kitchen counter" className="rounded-tl-lg rounded-bl-lg flex-grow object-cover h-full" />
          </div>
          <div className="p-20 w-1/2 flex flex-col gap-4 justify-center items-center relative">
            <img src={givingHandPhoto} alt="Giving hands with cannabis leaf in palm" className="absolute w-1/5 -top-2 right-24 xl:w-1/6 xl:top-4" />
            <h1 className="custom-text-green 2xl:text-7xl font-bold xl:text-5xl">Affordable cannabis for all</h1>
            <h2 className="font-semibold 2xl:text-2xl xl:text-xl custom-text-darkblue">The only place here to help you get all your cannabis products and prescriptions at prices you can afford and sustain.</h2>
            <div className="flex gap-2 mt-4 w-full">
              <a href="#/" className="py-4 text-center rounded-md custom-bg-green text-white font-medium w-full shadow">How It Works</a>
              <a href="/services" className="py-4 text-center rounded-md custom-bg-darkblue text-white font-medium w-full shadow">View Services</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;