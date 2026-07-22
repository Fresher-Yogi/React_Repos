// import { useState } from "react";

// const App = () => {
//   console.log("app rendering");

//   let [count, setCount] = useState(0);
//   let [user, setUser] = useState({ name: "Aditya" });

//   return (
//     <div>
//       <h1> count: {count} </h1>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         {" "}
//         Increment{" "}
//       </button>
//       <br /> <br />
//       <h1> Name: {user.name} </h1>
//       <button
//         onClick={() => {
//           user.name = "Yogi";
//           // Refrence m koi value store nhi hoti h, evrery time new refrence aayega object ka -->
//           setUser(
//             // Iss object ka refrence kuch or hoga and uss object ka kuch or refrence hoga, and every click m new refrence create hoga..
//             {
//               name: "Yogi",
//             },

//           );
//           console.log(user.name);
//         }}
//       >
//         {" "}
//         Change Name{" "}
//       </button>
//     </div>
//   );
// };

// export default App;


// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |



// Why React is SPA (Single Page Application):-  Because It dislplay only Single page

import React from "react";
import Card from "./components/Card";
import Contact from "./components/Contact";

const App = () => {
  return (
    
    <div>
      <h1> I am App </h1>
      <Card />
      <Contact />
    </div>

  );
};

export default App;
