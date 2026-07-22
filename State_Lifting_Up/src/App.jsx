import React, { useState } from 'react'
import Login from './components/Login'
import Registration from './components/Registration'
import UserCard from './components/UserCard'


const App = () => {

const [toggle, setToggle] = useState(false)
console.log(toggle);

  let [users, setUsers] = useState([]);
  console.log(users);

  return (
    <div className = 'h-screen flex justify-center items-center '>
      {
        toggle ? ( 
        <UserCard  users = {users} /> ) : 
          ( 
          <Registration setToggle={setToggle} setUsers={setUsers} users={users} /> 
        )
      }
      {console.log(users)}
    </div>
  )
}

export default App
