import React from "react";

const FoodCard = ({ item }) => {
  const { price, name, recipe, image } = item;

  return (
    <div>
      <div className="card bg-[#F3F3F3]">
        <figure>
          <img src={image} alt="Shoes" className="w-full max-h-[300px]" />
        </figure>
        <p className="absolute right-0 mt-3 mr-3 font-semibold text-[16px] bg-slate-900 text-white py-2 px-3 rounded-md">
          ${price}
        </p>
        <div className="card-body items-center text-center">
          <h2 className=" font-semibold text-[24px]">{name}</h2>
          <p className="text-[16px]">{recipe}</p>
          <div className="card-actions">
            <button className="btn text-[#BB8506] border-0 uppercase border-b-2 border-[#BB8506] hover:bg-[#1F2937]">
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
