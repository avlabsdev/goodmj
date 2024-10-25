import React from 'react';

const StrainfinderPage = () => {
  return (
    <div className="container mx-auto py-4 flex flex-col gap-8 px-4">
      <main className="bg-white rounded-lg shadow">
        <section className="flex justify-between items-center">
          <div className="p-20 w-full flex flex-col gap-4 justify-center relative">
            <h1 className="custom-text-green 2xl:text-5xl font-bold xl:text-5xl">Strainfinder&trade;</h1>
            <p className="font-semibold 2xl:text-lg xl:text-base custom-text-darkblue">Search any cannabis strain or product to learn more..</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default StrainfinderPage;