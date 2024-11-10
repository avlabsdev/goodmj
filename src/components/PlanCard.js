import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPeopleLine,
  faAward,
  faCreditCardFront,
} from "@awesome.me/kit-bc1b6271da/icons/classic/solid";

import scalesIcon from "../images/law.svg";
import plansHeroGfx from "../images/plans-hero-gfx.png";
import checkIcon from "../images/check-icon.svg";

const PlanCard = (props) => {
  let title = props.title;
  let icon = props.icon;
  let price = props.price;
  let buttonText = props.buttonText;
  return (
    <>
      <div className="lg:w-1/3">
        <h2 className="w-full custom-bg-darkblue text-white p-6 text-center rounded-tl-lg rounded-tr-lg border-2 border-white font-medium flex items-center justify-center gap-3 border-b-0 text-lg">
          <FontAwesomeIcon icon={icon} className="custom-text-green text-2xl" />
          {title}
        </h2>
        <div className="p-2 custom-bg-yellow text-center font-medium uppercase text-sm border-l-2 border-r-2 border-white">
          {price}
        </div>
        <div className="bg-white rounded-lg rounded-tl-none rounded-tr-none p-8 flex flex-col gap-4">
          <ul className="flex flex-col gap-4 mb-4">
            {props.items.map((item) => (
              <li className="flex items-start gap-2">
                <img
                  src={checkIcon}
                  alt="Check icon"
                  className="w-4"
                  style={{ marginTop: "2px" }}
                />
                {item}
              </li>
            ))}
          </ul>
          <a
            href="#/"
            className="py-4 text-center rounded-md custom-bg-green text-white font-medium w-full shadow"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </>
  );
};

export default PlanCard;
