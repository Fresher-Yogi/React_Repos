import React, { useState } from 'react'

const Counter = () => {

    console.log("count is rendering");
    let [count, setCount] = useState(0)
    console.log(count);


    return (
        <div>
            <h1>It's counter: {count} </h1>
            <button
            onClick={() => {
                // Rendering to ek hi bar hi hogi guru , kuch bhi ho jaye..
                // previous holds the current value 
                setCount((prev)=>prev+1);
                setCount((prev)=>prev+1);
                setCount((prev)=>prev+1);
            }}>
                Increment
            </button>

        </div>
    )
}

export default Counter
