// // const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
// // Render:
// // Apple
// // Banana
// // Mango

// import React from 'react'

// const App = () => {

//   const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

//   return (
//     <div>
//       {
//         fruits.map((e)=>{
//           return <h1 key={e}> {e} </h1>
//         })
//       }
//     </div>
//   )
// }

// export default App;

// // Task 2: Student List

// import React from "react";

// const App = () => {
//   const students = [
//     { id: 1, name: "Yogi", age: 20 },
//     { id: 2, name: "Rahul", age: 21 },
//     { id: 3, name: "Ankit", age: 19 },
//   ];

//   return (
//     <div>
//       {students.map((e) => {
//         return(
//         <div>
//           <h1>name: {e.name} </h1>
//           <h3>Age: {e.age}</h3>
//         </div>
//         )
//       })}
//     </div>
//   );
// };

// export default App;

// components + props

import React, { useState } from "react";
import ProductCard from "./ProductCard";

const App = () => {
  // HOOK
  let [products, setproducts] = useState([
    {
      id: 1,
      name: "MacBook Air M3",
      price: 114999,
      image: "https://picsum.photos/id/180/300/200",
      rating: 3.8,
      category: "Laptop",
      brand: "Apple",
      stock: true,
      discount: 10,
      favorite: false,
    },
    {
      id: 2,
      name: "iPhone 16",
      price: 79999,
      image: "https://picsum.photos/id/160/300/200",
      rating: 4.7,
      category: "Mobile",
      brand: "Apple",
      stock: true,
      discount: 5,
      favorite: false,
    },
    {
      id: 3,
      name: "Samsung Galaxy S25",
      price: 74999,
      image: "https://picsum.photos/id/250/300/200",
      rating: 3.6,
      category: "Mobile",
      brand: "Samsung",
      stock: false,
      discount: 12,
      favorite: false,
    },
    {
      id: 4,
      name: "Dell Inspiron 15",
      price: 58999,
      image: "https://picsum.photos/id/20/300/200",
      rating: 4.3,
      category: "Laptop",
      brand: "Dell",
      stock: true,
      discount: 18,
      favorite: false,
    },
    {
      id: 5,
      name: "Sony WH-1000XM5",
      price: 24999,
      image: "https://picsum.photos/id/1080/300/200",
      rating: 4.9,
      category: "Headphone",
      brand: "Sony",
      stock: true,
      discount: 15,
      favorite: false,
    },
    {
      id: 6,
      name: "Boat Rockerz 550",
      price: 1999,
      image: "https://picsum.photos/id/29/300/200",
      rating: 4.1,
      category: "Headphone",
      brand: "Boat",
      stock: false,
      discount: 25,
      favorite: false,
    },
    {
      id: 7,
      name: "Logitech MX Master 3S",
      price: 8999,
      image: "https://picsum.photos/id/30/300/200",
      rating: 2.8,
      category: "Mouse",
      brand: "Logitech",
      stock: true,
      discount: 8,
      favorite: false,
    },
    {
      id: 8,
      name: "Mechanical Keyboard K8",
      price: 6999,
      image: "https://picsum.photos/id/48/300/200",
      rating: 4.4,
      category: "Keyboard",
      brand: "Keychron",
      stock: true,
      discount: 20,
      favorite: false,
    },
    {
      id: 9,
      name: "LG UltraWide Monitor",
      price: 28999,
      image: "https://picsum.photos/id/96/300/200",
      rating: 4.5,
      category: "Monitor",
      brand: "LG",
      stock: true,
      discount: 14,
      favorite: false,
    },
    {
      id: 10,
      name: "Asus ROG Gaming Laptop",
      price: 139999,
      image: "https://picsum.photos/id/0/300/200",
      rating: 2.9,
      category: "Laptop",
      brand: "Asus",
      stock: false,
      discount: 7,
      favorite: false,
    },
  ]);

  // PREMIUM PRODUCT LOGIC
  function PremiumProduct(arrofproducts) {
    console.log(arrofproducts);
    let newarr = arrofproducts.filter((e) => {
      if (e.price > 50000) {
        return e;
      }
    });
    setproducts(newarr);
  }

  // FILTERED PRODUCT LOGIC
  function filteredproduct(allproducts, keyword) {
    let filter = allproducts.filter((product) => {
      if (product.name.includes(keyword)) {
        return product;
      } else {
        return 0;
      }
    });
    setproducts(filter);
  }



  // DELETE PRODUCT LOGIC
  function deleteproduct(id) {
    let delproduct = allproducts.filter((e) => e.id !== id);
    console.log('original products ', allproducts);
    console.log('products ', products);
    console.log(delproduct);
    setproducts(delproduct);
  }


  
  // ALLPRODUCTS ARRAY
  const allproducts = [
    {
      id: 1,
      name: "MacBook Air M3",
      price: 114999,
      image: "https://picsum.photos/id/180/300/200",
      rating: 3.8,
      category: "Laptop",
      brand: "Apple",
      stock: true,
      discount: 10,
      favorite: false,
    },
    {
      id: 2,
      name: "iPhone 16",
      price: 79999,
      image: "https://picsum.photos/id/160/300/200",
      rating: 4.7,
      category: "Mobile",
      brand: "Apple",
      stock: true,
      discount: 5,
      favorite: false,
    },
    {
      id: 3,
      name: "Samsung Galaxy S25",
      price: 74999,
      image: "https://picsum.photos/id/250/300/200",
      rating: 3.6,
      category: "Mobile",
      brand: "Samsung",
      stock: false,
      discount: 12,
      favorite: false,
    },
    {
      id: 4,
      name: "Dell Inspiron 15",
      price: 58999,
      image: "https://picsum.photos/id/20/300/200",
      rating: 4.3,
      category: "Laptop",
      brand: "Dell",
      stock: true,
      discount: 18,
      favorite: false,
    },
    {
      id: 5,
      name: "Sony WH-1000XM5",
      price: 24999,
      image: "https://picsum.photos/id/1080/300/200",
      rating: 4.9,
      category: "Headphone",
      brand: "Sony",
      stock: true,
      discount: 15,
      favorite: false,
    },
    {
      id: 6,
      name: "Boat Rockerz 550",
      price: 1999,
      image: "https://picsum.photos/id/29/300/200",
      rating: 4.1,
      category: "Headphone",
      brand: "Boat",
      stock: false,
      discount: 25,
      favorite: false,
    },
    {
      id: 7,
      name: "Logitech MX Master 3S",
      price: 8999,
      image: "https://picsum.photos/id/30/300/200",
      rating: 2.8,
      category: "Mouse",
      brand: "Logitech",
      stock: true,
      discount: 8,
      favorite: false,
    },
    {
      id: 8,
      name: "Mechanical Keyboard K8",
      price: 6999,
      image: "https://picsum.photos/id/48/300/200",
      rating: 4.4,
      category: "Keyboard",
      brand: "Keychron",
      stock: true,
      discount: 20,
      favorite: false,
    },
    {
      id: 9,
      name: "LG UltraWide Monitor",
      price: 28999,
      image: "https://picsum.photos/id/96/300/200",
      rating: 4.5,
      category: "Monitor",
      brand: "LG",
      stock: true,
      discount: 14,
      favorite: false,
    },
    {
      id: 10,
      name: "Asus ROG Gaming Laptop",
      price: 139999,
      image: "https://picsum.photos/id/0/300/200",
      rating: 2.9,
      category: "Laptop",
      brand: "Asus",
      stock: false,
      discount: 7,
      favorite: false,
    },
  ];

  return (
    <div>
      <div>
        <button
          onClick={() => {
            setproducts(allproducts);
          }}
          className="bg-blue-200 my-4 p-2 mx-50 cursor-pointer"
        >
          All Products
        </button>

        <input
          className="border-2 px-20 py-2"
          type="text"
          placeholder="Search Products here"
          onChange={(e) => {
            filteredproduct(allproducts, e.target.value);
          }}
        />

        <button
          onClick={() => {
            PremiumProduct(products);
          }}
          className="bg-blue-200 my-4 p-2 mx-50 cursor-pointer"
        >
          Premium Products
        </button>
      </div>

      <div className="flex flex-wrap m-4 gap-5">
        {products.map((e) => {
          return <ProductCard key={e.id} del={deleteproduct} product={e} />;
        })}
      </div>
    </div>
  );
};

export default App;
