import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@awesome.me/kit-bc1b6271da/icons/classic/brands'

const Footer = () => {
  return (
    <div className="container mx-auto py-4 flex flex-col gap-8 mb-6 px-4 mt-8">
      <footer className="flex lg:justify-between lg:flex-row lg:items-center px-4 flex-col gap-8 items-center">
        <p className="text-white text-center w-72 lg:w-auto">&copy; Copyright 2024 <a href="https://avweb.io" target="_blank" rel="noreferrer" className="underline hover:no-underline">AV Web Design</a>. All rights reserved.</p>
        <a href="https://github.com/avwebio" target="_blank" rel="noreferrer" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} className="text-2xl text-white lg:text-xl" /></a>
      </footer>
    </div>
  );
}

export default Footer;