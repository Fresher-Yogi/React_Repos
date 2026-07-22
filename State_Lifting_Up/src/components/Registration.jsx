import React, { useState } from "react";

const Registration = ({ setToggle, setUsers , users}) => {
  // controlled input / Two Way Binding 
  let [formData, setFData] = useState({  
    Name: "",
    Email: "",
    Password: ""
  });


  const handlechange = (e) => {
    let { name, value } = e.target;
    setFData({ ...formData, [name]: value });
    // console.log({formData});  // i will get the latest value only , because every time new value is coming...
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setUsers([...users, formData]); // push the formdata into users (state)
    console.log(users);
    setFData({
      Name: "",
      Email: "",
      Password: ""
    });

    setToggle((prev)=> !prev);
  };

  return (
    <div className="w-96 h-96 bg-blue-100 rounded-xl">
      <h2 className="text-xl font-bold py-5"> Registration Page </h2>

      <form onSubmit={handleSubmit} action="" className=" p-4 flex flex-col">
        <input
          required
          value={formData.Name} // Two Way Binding ke liye use krte h
          name="Name"
          onChange={handlechange}
          className="p-2 bg-white rounded text-black  m-2"
          type="text"
          id=""
          placeholder="Enter name"
        />
        <input
          required
          value={formData.Email} // Two Way Binding ke liye use krte h
          name="Email"
          onChange={handlechange}
          className="p-2 bg-white rounded text-black  m-2"
          type="email"
          id=""
          placeholder="Enter email"
        />
        <input
          required
          value={formData.Password} // Two Way Binding ke liye use krte h
          name="Password"
          onChange={handlechange}
          className="p-2 bg-white rounded text-black  m-2 mb-7"
          type="password"
          id=""
          placeholder="Enter password"
        />
        <button className="bg-blue-600 rounded-2xl py-2 text-white font-bold">
          Register
        </button>
      </form>

      <p className="p-6 cursor-pointer">
        Already have an Account?
        <span
          onClick={() => {
            setToggle((prev) => !prev);
            }}
          className="text-blue-700"
        >
          Login here
        </span>
      </p>
    </div>
  );
};

export default Registration;
