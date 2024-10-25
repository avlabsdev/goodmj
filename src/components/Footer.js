import React from 'react';
import githubIcon from "../images/github-brands-solid.svg";

const Footer = () => {
  return (
    <div className="container mx-auto py-4 flex flex-col gap-8 mb-6 px-4">
      <footer className="flex justify-between items-center px-4">
        <p className="text-white">&copy; Copyright 2024 <a href="#/" className="underline hover:no-underline">AV Web Design</a>. All rights reserved.</p>
        <a href="#/"><img src={githubIcon} alt="GitHub icon" className="w-5" /></a>
      </footer>
    </div>
  );
}

export default Footer;