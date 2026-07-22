import React, { useState } from "react";

const Card = () => {

  // Brute Force Apporach 
  // Issue:- issue is here , i need to create the multiple useState for each input 
  let [ele, setElement] = useState(0);
  let [email, setEmail] = useState("aaditya@gmail.com");
  let [contact, setContact] = useState();
  //   console.log(ele);


// |
// |
// |

// Better Approach

    let [formdata, setformData] = useState({})

 

// |
// |
// |

// Optimized Approach 

    const handlefunction = (e)=>{
      let {name, value} = e.target;
      console.log(name, value);
      setformData({...formdata, [name]:value})
      }



  return (
    //   // to get the real time value of input we have to use ocChange event ...

    //   // Brute Force Approach
    //   <div>
    //     <input
    //       onChange={(e) => {
    //         console.log(e.target.value);
    //         setElement(e.target.value);
    //       }}
    //       type="text"
    //       name=""
    //       id=""
    //       placeholder="Enter name"
    //     />
    //     <input
    //       onChange={(e) => {
    //         console.log(e);
    //         setEmail(e.target.value);
    //       }}
    //       type="text"
    //       name=""
    //       id=""
    //       placeholder="Enter email"
    //     />
    //     <input type="text" name="" id="" placeholder="Enter contact no" />
    //     <h1> This is Card </h1>
    //     <h2>hii, This is {email} </h2>

    // </div>

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


    
// Better Approach 

    // <div>
    //   <input onChange={(e)=>{
    //     setformData({...formdata, name: e.target.value});
    //     // console.log({...formdata, name:e.target.value});
    //     // console.log(e.target.value);
    //   }} type="text" name="" id="" placeholder="Enter name" />

    //   <input onChange={(e)=>{
    //     setformData({...formdata, email:e.target.value})
    //   }} type="text" name="" id="" placeholder="Enter email" />

    //   <input onChange={(e)=>{
    //     setformData({...formdata, contact:e.target.value})
    //   }} type="text" name="" id="" placeholder="Enter contact no." />
    // </div>



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


    <div>
      <input onChange={handlefunction} type="text" name="Name" id="" placeholder="Enter your Name" />
      <input onChange={handlefunction} type="text" name="Email" id="" placeholder="email" />
      <input onChange={handlefunction} type="text" name="Contact" id="" placeholder="contact" />
    
    
    
      <h3> hii, this is {formdata.Name} </h3>
      <h3> hii, this is my {formdata.Email} </h3>
      <h3> hii, this is my {formdata.Contact} </h3>
    
    
    </div>


  );
};

export default Card;
