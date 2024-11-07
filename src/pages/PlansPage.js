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

const PlansPage = () => {
  return (
    <div className="container mx-auto flex flex-col gap-8">
      <main className="flex flex-col gap-2">
        <section className="flex justify-between items-center bg-white rounded-lg shadow relative overflow-hidden">
          <img
            src={plansHeroGfx}
            alt="Banner graphic"
            className="hidden sm:flex sm:absolute -right-12 w-1/2 xl:-top-8 2xl:-top-24"
          />
          <div className="p-8 py-12 md:p-20 md:py-24 w-full flex flex-col gap-4 justify-center relative">
            <h1 className="custom-text-green 2xl:text-5xl font-bold xl:text-5xl md:text-4xl flex items-center gap-4 sm:text-3xl text-2xl">
              <img src={scalesIcon} alt="Scales icon" className="w-14" />
              Plans & Pricing
            </h1>
            <p className="custom-text-darkblue font-semibold 2xl:text-xl xl:text-lg lg:w-1/2 2xl:w-full sm:w-2/3 md:pr-4 lg:pr-0 w-full">
              Finding affordable cannabis products should not be hell and back
              for you.
            </p>
          </div>
        </section>
        <section className="flex justify-between items-start gap-2 flex-col lg:flex-row">
          <div className="lg:w-1/3">
            <h2 className="w-full custom-bg-darkblue text-white p-6 text-center rounded-tl-lg rounded-tr-lg border-2 border-white font-medium flex items-center justify-center gap-3 border-b-0 text-lg">
              <FontAwesomeIcon
                icon={faPeopleLine}
                className="custom-text-green text-2xl"
              />
              Community Plan
            </h2>
            <div className="p-2 custom-bg-yellow text-center font-medium uppercase text-sm border-l-2 border-r-2 border-white">
              $100 Per Month
            </div>
            <div className="bg-white rounded-lg rounded-tl-none rounded-tr-none p-8 flex flex-col gap-4">
              <ul className="flex flex-col gap-4 mb-4">
                <li className="flex items-start gap-2">
                  <img
                    src={checkIcon}
                    alt="Check icon"
                    className="w-4"
                    style={{ marginTop: "2px" }}
                  />
                  One ounce of flower/month.
                </li>
                <li className="flex items-start gap-2">
                  <img
                    src={checkIcon}
                    alt="Check icon"
                    className="w-4"
                    style={{ marginTop: "2px" }}
                  />
                  Free delivery, if needed.
                </li>
                <li className="flex items-start gap-2">
                  <img
                    src={checkIcon}
                    alt="Check icon"
                    className="w-4"
                    style={{ marginTop: "2px" }}
                  />
                  Free eighth of your choice in the low to mid range flower
                  category. (restrictions apply)
                </li>
                <li className="flex items-start gap-2">
                  <img
                    src={checkIcon}
                    alt="Check icon"
                    className="w-4"
                    style={{ marginTop: "2px" }}
                  />
                  Exclusive fresh weekly discounts and sales up to 75% off
                  items.
                </li>
              </ul>
              <a
                href="#/"
                className="py-4 text-center rounded-md custom-bg-green text-white font-medium w-full shadow"
              >
                Select Plan
              </a>
            </div>
          </div>
          <div className="lg:w-1/3">
            <h2 className="w-full custom-bg-darkblue text-white p-6 text-center rounded-tl-lg rounded-tr-lg border-2 border-white font-medium flex items-center justify-center gap-3 border-b-0 text-lg">
              <FontAwesomeIcon
                icon={faAward}
                className="custom-text-green text-2xl"
              />
              Top Tier Plan
            </h2>
            <div className="p-2 custom-bg-yellow text-center font-medium uppercase text-sm border-l-2 border-r-2 border-white">
              $200 Per Month
            </div>
            <div className="bg-white rounded-lg rounded-tl-none rounded-tr-none p-8 flex flex-col gap-4">
              <ul className="flex flex-col gap-4 mb-4">
                <li className="flex items-start gap-2">
                  <img
                    src={checkIcon}
                    alt="Check icon"
                    className="w-4"
                    style={{ marginTop: "2px" }}
                  />
                  One ounce of flower/month.
                </li>
                <li className="flex items-start gap-2">
                  <img
                    src={checkIcon}
                    alt="Check icon"
                    className="w-4"
                    style={{ marginTop: "2px" }}
                  />
                  Free delivery, if needed.
                </li>
                <li className="flex items-start gap-2">
                  <img
                    src={checkIcon}
                    alt="Check icon"
                    className="w-4"
                    style={{ marginTop: "2px" }}
                  />
                  Free eighth of your choice in the low to mid range flower
                  category. (restrictions apply)
                </li>
                <li className="flex items-start gap-2">
                  <img
                    src={checkIcon}
                    alt="Check icon"
                    className="w-4"
                    style={{ marginTop: "2px" }}
                  />
                  Exclusive fresh weekly discounts and sales up to 75% off
                  items.
                </li>
              </ul>
              <a
                href="#/"
                className="py-4 text-center rounded-md custom-bg-green text-white font-medium w-full shadow"
              >
                Select Plan
              </a>
            </div>
          </div>
          <div className="lg:w-1/3">
            <h2 className="w-full custom-bg-darkblue text-white p-6 text-center rounded-tl-lg rounded-tr-lg border-2 border-white font-medium flex items-center justify-center gap-3 border-b-0 text-lg">
              <FontAwesomeIcon
                icon={faCreditCardFront}
                className="custom-text-green text-2xl"
              />
              Pay-As-You-Go Perk Plan
            </h2>
            <div className="p-2 custom-bg-yellow text-center font-medium uppercase text-sm border-l-2 border-r-2 border-white">
              $20 Per Month
            </div>
            <div className="bg-white rounded-lg rounded-tl-none rounded-tr-none p-8 flex flex-col gap-4">
              <ul className="flex flex-col gap-4 mb-4">
                <li className="flex items-start gap-2">
                  <img
                    src={checkIcon}
                    alt="Check icon"
                    className="w-4"
                    style={{ marginTop: "2px" }}
                  />
                  One ounce of flower/month.
                </li>
                <li className="flex items-start gap-2">
                  <img
                    src={checkIcon}
                    alt="Check icon"
                    className="w-4"
                    style={{ marginTop: "2px" }}
                  />
                  Free delivery, if needed.
                </li>
                <li className="flex items-start gap-2">
                  <img
                    src={checkIcon}
                    alt="Check icon"
                    className="w-4"
                    style={{ marginTop: "2px" }}
                  />
                  Free eighth of your choice in the low to mid range flower
                  category. (restrictions apply)
                </li>
                <li className="flex items-start gap-2">
                  <img
                    src={checkIcon}
                    alt="Check icon"
                    className="w-4"
                    style={{ marginTop: "2px" }}
                  />
                  Exclusive fresh weekly discounts and sales up to 75% off
                  items.
                </li>
              </ul>
              <a
                href="#/"
                className="py-4 text-center rounded-md custom-bg-green text-white font-medium w-full shadow"
              >
                Select Plan
              </a>
            </div>
          </div>
        </section>
        <p className="text-white text-center my-8">
          *Don't see a plan that works for you? We can help you create a custom
          plan just for you.{" "}
          <a href="#/" className="underline hover:no-underline">
            Let us know
          </a>
          !
        </p>
      </main>
    </div>
  );
};

export default PlansPage;
