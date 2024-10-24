import React from 'react';
import logo from '../logo.svg';

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
      <main className="bg-white flex justify-between align-center py-4 px-6 rounded-lg shadow">
        <p>Welcome to my simple React home page! This is a basic example of a React project.</p>
      </main>
      <footer>
        <p className="text-white">&copy; Copyright 2024 AV Web Design. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;