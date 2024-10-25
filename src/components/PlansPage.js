import React from 'react';

const PlansPage = () => {
  return (
    <div className="container mx-auto py-4 flex flex-col gap-8 px-4">
      <main className="flex flex-col gap-8">
        <section className="flex justify-between items-center bg-white rounded-lg shadow">
          <div className="p-20 w-full flex flex-col gap-4 justify-center relative">
            <h1 className="custom-text-green 2xl:text-5xl font-bold xl:text-5xl">Plans & Pricing</h1>
            <p className="font-semibold 2xl:text-lg xl:text-base custom-text-darkblue">Finding affordable cannabis products should not be hell and back for you.</p>
          </div>
        </section>
        <section className="flex justify-between items-center gap-8">
          <div className="bg-white rounded-lg w-1/3 p-8 flex flex-col gap-4">
            <h2>Plan 1</h2>
            <a href="#/" className="py-4 text-center rounded-md custom-bg-green text-white font-medium w-full shadow">Select Plan</a>
          </div>
          <div className="bg-white rounded-lg w-1/3 p-8 flex flex-col gap-4">
            <h2>Plan 2</h2>
            <a href="#/" className="py-4 text-center rounded-md custom-bg-green text-white font-medium w-full shadow">Select Plan</a>
          </div>
          <div className="bg-white rounded-lg w-1/3 p-8 flex flex-col gap-4">
            <h2>Plan 3</h2>
            <a href="#/" className="py-4 text-center rounded-md custom-bg-green text-white font-medium w-full shadow">Select Plan</a>
          </div>
        </section>
        <p className="text-white text-center">*Don't see a plan that works for you? We can help you create a custom plan just for you. <a href="#/" className="underline hover:no-underline">Let us know</a>!</p>
      </main>
    </div>
  );
}

export default PlansPage;