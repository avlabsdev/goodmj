import React from 'react';
import weedJarPhoto from '../images/weed-jar.jpg';
import givingHandPhoto from '../images/giving-cannabis.svg';

const HomePage = () => {
  return (
    <div className="container mx-auto py-4 flex flex-col gap-8">
      <main className="bg-white rounded-lg shadow">
        <section className="flex lg:flex-row justify-between flex-col">
          <div className="2xl:w-1/2 border-white border-2 rounded-lg md:w-full">
            <img src={weedJarPhoto} alt="Cannabis jar on kitchen counter" className="lg:rounded-tl-lg lg:rounded-bl-lg flex-grow object-cover h-full lg:rounded-tr-none rounded-tr-lg rounded-bl-none rounded-tl-lg" />
          </div>
          <div className="2xl:text-left xl:text-left lg:text-left md:p-20 2xl:w-1/2 md:w-full flex flex-col gap-4 justify-center relative sm:text-center p-10">
            <img src={givingHandPhoto} alt="Giving hands with cannabis leaf in palm" className="2xl:absolute xl:absolute lg:absolute 2xl:w-1/4 2xl:top-8 2xl:right-20 xl:w-1/5 xl:top-4 xl:right-20 lg:top-4 lg:w-1/5 lg:right-20 md:w-1/2 md:relative mx-auto sm:w-1/3 xs:w-1/5 w-1/2" />
            <h1 className="custom-text-green 2xl:text-7xl font-bold xl:text-6xl lg:text-5xl md:text-6xl sm:text-5xl">Affordable cannabis for all</h1>
            <h2 className="font-semibold 2xl:text-2xl xl:text-xl custom-text-darkblue lg:text-lg md:text-lg sm:text-lg">The only place here to help you get all your cannabis products and prescriptions at prices you can afford and sustain.</h2>
            <div className="flex gap-2 mt-4 w-full sm:flex-row flex-col">
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