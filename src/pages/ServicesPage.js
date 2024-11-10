import React from "react";

import certIcon from "../images/certificate.svg";
import weedLabPhoto from "../images/weed-lab.jpg";
import drugsIcon from "../images/drugs.svg";
import locationIcon from "../images/location.svg";
import pillsIcon from "../images/pills.svg";
import bagIcon from "../images/bag.svg";
import extractIcon from "../images/extract.svg";

import FeatureCard from "../components/FeatureCard";

const ServicesPage = () => {
  return (
    <div className="container mx-auto flex flex-col gap-8">
      <main>
        <section className="flex justify-between gap-2 flex-col lg:flex-row">
          <div className="p-8 sm:p-20 lg:w-4/6 flex flex-col gap-4 relative bg-white rounded-lg shadow md:w-full">
            <div className="flex items-center gap-4 sm:flex-row text-left">
              <img src={certIcon} alt="Certificate icon" className="w-14" />
              <h1 className="custom-text-green 2xl:text-5xl font-bold xl:text-5xl lg:text-4xl md:text-5xl sm:text-4xl text-3xl">
                Services & Features
              </h1>
            </div>
            <p className="custom-text-darkblue font-semibold 2xl:text-xl xl:text-lg">
              We have an ever-growing list of services and features to offer you
              with affordable pricing options that work for you.
            </p>
            <p className="mt-4 text-sm text-gray-600">
              *Click on any of the below services or features to learn more.
            </p>
            <FeatureCard
              img={drugsIcon}
              title="Benefits & Discounts"
              content="Obtain a medical cannabis card for extra benefits and discounted
            pricing."
              footNote="Click for more details"
            />
            <FeatureCard
              img={locationIcon}
              title="Dispensary Locations"
              content="We work with all dispensaries in the USA."
              footNote="Click for more details"
            />
            <FeatureCard
              img={pillsIcon}
              title="Proper Dosages"
              content="Get the proper dosages you need for easier medicine
                  administration."
              footNote="Click for more details"
            />
            <FeatureCard
              img={bagIcon}
              title="Cannabis Products"
              content="All the cannabis products you need at a price you can afford."
              footNote="Click for more details"
            />
            <FeatureCard
              img={extractIcon}
              title="Quality Assurance"
              content="All products are rigorously lab tested for quality assurance."
              footNote="Click for more details"
            />
          </div>
          <div className="lg:w-2/6 flex flex-col gap-6 md:w-full">
            <img
              src={weedLabPhoto}
              alt="Cannabis lab"
              className="rounded-lg shadow border-2 border-white"
            />
            <h2 className="custom-text-green font-bold 2xl:text-xl xl:text-xl px-4">
              We only work with companies that pride themselves on proper lab
              testing and quality assurance.
            </h2>
            <p className="text-white px-4">
              Our promise is to provide you with the highest quality cannabis
              for the lowest costs available. We guarantee high-quality products
              that go through rigorous lab testing and quality assurance.
            </p>
            <div className="flex gap-2 mt-4 w-full px-4">
              <a
                href="/plans"
                className="py-4 text-center rounded-md custom-bg-green custom-text-darkblue font-medium w-full shadow"
              >
                View Plans
              </a>
              <a
                href="/menu"
                className="py-4 text-center rounded-md custom-text-darkblue bg-white font-medium w-full shadow"
              >
                View Menu
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ServicesPage;
