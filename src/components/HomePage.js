import React from 'react';
import logo from '../logo.svg';
import weedJarPhoto from '../images/weed-jar.jpg';
import givingHandPhoto from '../images/giving-cannabis.svg';

const HomePage = () => {
  return (
    <div className="container mx-auto py-8 flex flex-col gap-8 my-2">
      <header className="bg-white flex justify-between items-center py-4 px-6 rounded-lg shadow">
        <a href="#/" className="flex items-center justify-center p-2 text-xl">
          <img src={logo} alt="Logo Icon" className="w-8 mr-2" /><span className="font-bold">Good</span>Mj
        </a>
        <nav className="flex gap-6 text-lg font-medium">
          <a className="p-2" href="#/">Link</a>
          <a className="p-2" href="#/">Link</a>
          <a className="p-2" href="#/">Link</a>
        </nav>
      </header>
      <main className="bg-white rounded-lg shadow">
        <section className="flex justify-between items-center">
          <div className="w-1/2 border-white border-2 rounded-lg">
            <img src={weedJarPhoto} alt="Cannabis jar on kitchen counter" className="rounded-tl-lg rounded-bl-lg flex-grow object-cover h-full" />
          </div>
          <div className="p-20 w-1/2 flex flex-col gap-4 justify-center items-center relative">
          <img src={givingHandPhoto} alt="Giving hands with cannabis leaf in palm" className="absolute w-1/5 -top-2 right-24" />
            <h1 className="custom-text-green text-7xl font-bold">Affordable cannabis for all</h1>
            <p className="font-semibold text-lg">The only place here to help you get all your cannabis products and prescriptions at prices you can afford and sustain.</p>
            <div className="flex gap-2 mt-4 w-full">
              <a href="#/" className="py-4 bg-blue-300 text-center rounded-md custom-bg-green text-white font-medium w-full">Button</a>
              <a href="#/" className="py-4 bg-blue-300 text-center rounded-md custom-bg-darkblue text-white font-medium w-full">Button</a>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <p className="text-white">&copy; Copyright 2024 AV Web Design. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;