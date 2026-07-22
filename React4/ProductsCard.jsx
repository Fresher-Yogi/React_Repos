import React, { useState } from "react";

const ProductsCard = ( {product, del} ) => {
// console.log(product);

return (
    <div className="p-2 m-2 ">
      <div className="w-60 h-[500px] bg-blue-100 flex flex-col  border-2 border-white rounded-xl">
        <div>
          <img className="p-5 h-[300px]" src={product.image} alt="" />
        </div>

        <div>
          <h2 className="text-2xl"> {product.title.substring(0, 15)} </h2>
          <h3 className="text-xl text-green-400 font-semibold">{product.price}</h3>
          <h4 className="text-lg"> {product.category} </h4>
        </div>

        <div>
          <button
            className="bg-red-600 py-1 px-5 m-4"
            onClick={() => {
              del(product.id);
              }} >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
