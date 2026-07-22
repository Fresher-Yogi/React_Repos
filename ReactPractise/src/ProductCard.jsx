import React from "react";

const ProductCard = ({ product,del }) => {


  function RatingStars({ rating }) {
    let TotalStar = [];
    let star = Math.round(rating);
    let count = 0;
    for (let i = 0; i < 5; i++) {
        if (count < star) {
          TotalStar.push("⭐");
          count++;
        }else{
        TotalStar.push("☆");
        count++;
         }
      }
    
    return TotalStar;
  }



  let StockText;
  if (product.stock) {
    StockText = "✅ In Stock";
  } else StockText = "❌ Out of Stock";


  return (
    <div className="allproductcard ">


      <div className="productcard  w-70 h-fit bg-blue-50 flex flex-wrap flex-col border-2 border-blue-400 gap-5 rounded-xl p-2">
        <img src={product.image} alt="" />
        <h1>Name: {product.name}</h1>
        {product.price > 50000 && <h1> 🌟 Premium Product </h1>}
        <h2> {product.brand} </h2>
        <h2> {product.category} </h2>
        <h2 className="text-green-500 font-bold">Price: {product.price}</h2>
        <RatingStars rating={product.rating} />
        <h2>{StockText}</h2>

        <button className="bg-red-500 px-5 py-1 m-auto text-white rounded" onClick={()=>{
          del(product.id);
        }} > Delete </button>
      </div>
    </div>
  );
};

export default ProductCard;
