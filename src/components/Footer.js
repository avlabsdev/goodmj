import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@awesome.me/kit-bc1b6271da/icons/classic/brands'

const Footer = () => {
  return (
    <div className="container mx-auto py-4 flex flex-col gap-8 mb-6 px-4">
      <footer className="flex justify-between items-center px-4">
        <p className="text-white">&copy; Copyright 2024 <a href="#/" className="underline hover:no-underline">AV Web Design</a>. All rights reserved.</p>
        <a href="#/"><FontAwesomeIcon icon={faGithub} className="text-xl text-white" /></a>
      </footer>
    </div>
  );
}

export default Footer;