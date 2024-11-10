import React from "react";

const ProductCard = (props) => {
  let discount = props.discount;
  let title = props.title;
  let img = props.img;
  return (
    <>
      <a
        href="#/"
        className="h-full rounded-lg aspect-square border-2 border-white shadow relative flex hover:-mt-1 ease-in-out duration-200"
      >
        <span className="flex items-center justify-center font-medium absolute uppercase left-0 top-8 px-4 py-2 custom-bg-yellow custom-text-darkblue rounded-lg shadow rounded-tl-none rounded-bl-none">
          {discount}
        </span>
        <span className="absolute bottom-0 flex items-center justify-center w-full custom-bg-green text-white py-2 rounded-br-lg rounded-bl-lg">
          {title}
        </span>
        <img
          src={img}
          alt="Cannabis oil"
          className="h-full w-full object-cover rounded-lg"
        />
      </a>
    </>
  );
};

export default ProductCard;
