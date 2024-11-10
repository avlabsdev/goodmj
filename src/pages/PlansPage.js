import React from "react";
import {
  faPeopleLine,
  faAward,
  faCreditCardFront,
} from "@awesome.me/kit-bc1b6271da/icons/classic/solid";

import scalesIcon from "../images/law.svg";
import plansHeroGfx from "../images/plans-hero-gfx.png";

import PlanCard from "../components/PlanCard";

const PlansPage = () => {
  const communityList = [
    "One ounce of flower/month.",
    "Free delivery, if needed.",
    "Free eighth of your choice in the low to mid range flower category. (restrictions apply)",
    "Exclusive fresh weekly discounts and sales up to 75% off items.",
  ];
  const topTierList = [
    "One ounce of flower/month.",
    "Free delivery, if needed.",
    "Free eighth of your choice in the low to mid range flower category. (restrictions apply)",
    "Exclusive fresh weekly discounts and sales up to 75% off items.",
  ];
  const payAsYouGoList = [
    "One ounce of flower/month.",
    "Free delivery, if needed.",
    "Free eighth of your choice in the low to mid range flower category. (restrictions apply)",
    "Exclusive fresh weekly discounts and sales up to 75% off items.",
  ];
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
          <PlanCard
            icon={faPeopleLine}
            title="Community Plan"
            price="$100 Per Month"
            items={communityList}
            buttonText="Select Plan"
          />
          <PlanCard
            icon={faAward}
            title="Top Tier Plan"
            price="$200 Per Month"
            items={topTierList}
            buttonText="Select Plan"
          />
          <PlanCard
            icon={faCreditCardFront}
            title="Pay-As-You-Go Perk Plan"
            price="$20 Per Month"
            items={payAsYouGoList}
            buttonText="Select Plan"
          />
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
