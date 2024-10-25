import React from 'react';
import certIcon from '../images/certificate.svg';
import weedLabPhoto from '../images/weed-lab.jpg';
import infoIcon from '../images/circle-info-solid.svg';
import drugsIcon from '../images/drugs.svg';

const ServicesPage = () => {
  return (
    <div className="container mx-auto py-4 flex flex-col gap-8 px-4">
      <main>
        <section className="flex justify-between gap-8">
          <div className="p-20 w-3/5 flex flex-col gap-4 relative bg-white rounded-lg shadow">
            <div className="flex items-center gap-4">
              <img src={certIcon} alt="Certificate icon" className="w-14" />
              <h1 className="custom-text-green 2xl:text-5xl font-bold xl:text-3xl">Services & Features</h1>
            </div>
            <h2 className="custom-text-darkblue font-semibold 2xl:text-xl xl:text-lg">We have an ever-growing list of services and features to offer
              you with affordable pricing options that work for you.</h2>
            <p className="mt-4">*Click on any of the below services or features to learn more.</p>
            <a href="#/" className="flex w-full items-center text-sm font-medium">
              <div className="w-fit custom-bg-yellow p-4 rounded-tl-lg rounded-bl-lg flex items-center">
                <img src={drugsIcon} alt="Cannabis bottle icon" className="w-10" />
              </div>
              <div className="w-full p-4 px-6 custom-bg-lightblue h-full flex items-center">
                <p>Obtain a medical cannabis card for extra benefits and discounted pricing.</p>
              </div>
              <div className="w-auto p-4 custom-bg-darkblue rounded-tr-lg rounded-br-lg h-full flex items-center">
                <img src={infoIcon} alt="Info icon" className="w-8" />
              </div>
            </a>
            <a href="#/" className="flex w-full items-center text-sm font-medium">
              <div className="w-fit custom-bg-yellow p-4 rounded-tl-lg rounded-bl-lg flex items-center">
                <img src={drugsIcon} alt="Cannabis bottle icon" className="w-10" />
              </div>
              <div className="w-full p-4 px-6 custom-bg-lightblue h-full flex items-center">
                <p>Obtain a medical cannabis card for extra benefits and discounted pricing.</p>
              </div>
              <div className="w-auto p-4 custom-bg-darkblue rounded-tr-lg rounded-br-lg h-full flex items-center">
                <img src={infoIcon} alt="Info icon" className="w-8" />
              </div>
            </a>
            <a href="#/" className="flex w-full items-center text-sm font-medium">
              <div className="w-fit custom-bg-yellow p-4 rounded-tl-lg rounded-bl-lg flex items-center">
                <img src={drugsIcon} alt="Cannabis bottle icon" className="w-10" />
              </div>
              <div className="w-full p-4 px-6 custom-bg-lightblue h-full flex items-center">
                <p>Obtain a medical cannabis card for extra benefits and discounted pricing.</p>
              </div>
              <div className="w-auto p-4 custom-bg-darkblue rounded-tr-lg rounded-br-lg h-full flex items-center">
                <img src={infoIcon} alt="Info icon" className="w-8" />
              </div>
            </a>
            <a href="#/" className="flex w-full items-center text-sm font-medium">
              <div className="w-fit custom-bg-yellow p-4 rounded-tl-lg rounded-bl-lg flex items-center">
                <img src={drugsIcon} alt="Cannabis bottle icon" className="w-10" />
              </div>
              <div className="w-full p-4 px-6 custom-bg-lightblue h-full flex items-center">
                <p>Obtain a medical cannabis card for extra benefits and discounted pricing.</p>
              </div>
              <div className="w-auto p-4 custom-bg-darkblue rounded-tr-lg rounded-br-lg h-full flex items-center">
                <img src={infoIcon} alt="Info icon" className="w-8" />
              </div>
            </a>
            <a href="#/" className="flex w-full items-center text-sm font-medium">
              <div className="w-fit custom-bg-yellow p-4 rounded-tl-lg rounded-bl-lg flex items-center">
                <img src={drugsIcon} alt="Cannabis bottle icon" className="w-10" />
              </div>
              <div className="w-full p-4 px-6 custom-bg-lightblue h-full flex items-center">
                <p>Obtain a medical cannabis card for extra benefits and discounted pricing.</p>
              </div>
              <div className="w-auto p-4 custom-bg-darkblue rounded-tr-lg rounded-br-lg h-full flex items-center">
                <img src={infoIcon} alt="Info icon" className="w-8" />
              </div>
            </a>
          </div>
          <div className="w-2/5 flex flex-col gap-6">
            <img src={weedLabPhoto} alt="Cannabis lab" className="rounded-lg shadow border-2 border-white" />
            <h2 className="custom-text-green font-bold 2xl:text-xl xl:text-xl px-4">We only work with companies that
              pride themselves on proper lab
              testing and quality assurance.</h2>
            <p className="text-white px-4">Our promise is to provide you with the highest
              quality cannabis for the lowest costs available. We guarantee high-quality products that
              go through rigorous lab testing and quality
              assurance.</p>
            <div className="flex gap-2 mt-4 w-full px-4">
              <a href="/plans" className="py-4 text-center rounded-md custom-bg-green custom-text-darkblue font-medium w-full shadow">View Plans</a>
              <a href="/menu" className="py-4 text-center rounded-md custom-text-darkblue bg-white font-medium w-full shadow">View Menu</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ServicesPage;