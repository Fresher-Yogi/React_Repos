import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { useState } from "react";


let App = () => {


    let [count, setcount] = useState(0);  // hook in react
    console.log(useState(0));
    console.log(count)




    return (
        <div>
            <h1>Count is :- {count}</h1>

            <button onClick={() => {
                setcount(count + 1);
                count+1
            }} >
                Increment
            </button>

        </div>
    )
}


export default App;

