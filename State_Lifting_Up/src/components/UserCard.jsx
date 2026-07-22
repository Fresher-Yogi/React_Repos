import React from "react";

const UserCard = ({ users}) => {
  return (
    <div className="flex flex-col bg-blue-100 h-full w-full">
      {users.map((e) => {
        <div className="usercard  bg-blue-300 p-5 rounded-xl w-50 h-50 m-4 flex flex-col gap-4 text-xl  text-white font-black">
          <p> {e.Name} </p>
          <p> {e.Email} </p> 
          {console.log(e)}
        </div>;
      })}
    </div>
  );
};

export default UserCard;
