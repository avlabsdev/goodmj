import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@awesome.me/kit-bc1b6271da/icons/classic/brands";

const Footer = () => {
  return (
    <div className="container mx-auto py-4 flex flex-col gap-8 m-8 px-4">
      <footer className="flex justify-between items-center px-4">
        <p className="text-white">
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
          href="https://github.com/avwebio"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FontAwesomeIcon icon={faGithub} className="text-xl text-white" />
        </a>
      </footer>
    </div>
  );
};

export default Footer;
