import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@awesome.me/kit-bc1b6271da/icons/classic/solid";

const FeatureCard = (props) => {
  let img = props.img;
  let title = props.title;
  let content = props.content;
  let footNote = props.footNote;
  return (
    <>
      <a
        href="#/"
        className="flex-col sm:flex-row flex text-base font-medium rounded-lg"
      >
        <div className="rounded-tl-lg rounded-tr-lg custom-bg-yellow p-4 sm:rounded-tl-lg sm:rounded-bl-lg sm:rounded-tr-none flex items-center justify-center gap-2">
          <img src={img} alt="Cannabis bottle icon" className="w-12" />
          <p className="sm:hidden custom-text-darkblue">{title}</p>
        </div>
        <div className="w-full px-8 py-10 sm:p-4 sm:px-6 custom-bg-lightblue flex items-center text-center sm:text-left">
          <p>{content}</p>
        </div>
        <div className="py-4 px-5 custom-bg-darkblue sm:rounded-tr-lg sm:rounded-br-lg flex items-center justify-center rounded-bl-lg rounded-br-lg sm:rounded-bl-none gap-2">
          <FontAwesomeIcon
            icon={faCircleInfo}
            className="text-white text-3xl"
          />
          <p className="sm:hidden text-white">{footNote}</p>
        </div>
      </a>
    </>
  );
};

export default FeatureCard;
