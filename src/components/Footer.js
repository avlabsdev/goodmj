import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@awesome.me/kit-bc1b6271da/icons/classic/brands";

const Footer = () => {
  return (
    <div className="container mx-auto py-4 flex flex-col gap-8 m-8 px-4">
      <footer className="flex flex-col sm:flex-row px-0 justify-between items-center sm:px-4 gap-8 sm:gap-0">
        <p className="text-white text-sm sm:text-base text-center sm:text-left">
          &copy; Copyright 2024{" "}
          <a
            href="https://github.com/avlabsdev"
            target="_blank"
            rel="noreferrer"
            className="underline hover:no-underline"
          >
            AV Labs
          </a>
          . All rights reserved.
        </p>
        <a
          href="https://avlabs.dev"
          target="_blank"
          rel="noreferrer"
          aria-label="AV Labs Website"
        >
          <FontAwesomeIcon icon={faGithub} className="text-2xl text-white" />
        </a>
      </footer>
    </div>
  );
};

export default Footer;
