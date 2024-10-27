import React from 'react';

import menuSearchIcon from '../images/research.svg';

const MenuPage = () => {
  return (
    <div className="container mx-auto py-4 flex gap-8 px-4">
      <main className="flex flex-col gap-8 w-4/6">
        <section className="flex justify-between items-center bg-white rounded-lg shadow">
          <div className="p-20 flex flex-col gap-4 justify-center relative">
            <h1 className="custom-text-green 2xl:text-5xl font-bold xl:text-5xl flex items-center gap-4"><img src={menuSearchIcon} alt="Cannabis search icon" className="w-14" />Menu Search</h1>
            <p className="font-semibold 2xl:text-lg xl:text-base custom-text-darkblue">Find menus from dispensaries all around you in an instant.</p>
          </div>
        </section>
        <section>
          <div className="w-2/6">Discount & Deals</div>
        </section>
        <section>
          <div className="w-2/6">Featured Products</div>
        </section>
      </main>
      <aside className="w-2/6">Maps Preview/Details</aside>
    </div>
  );
}

export default MenuPage;