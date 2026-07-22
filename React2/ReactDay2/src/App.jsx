import React from "react";
import About from "./About";

function APP() {

  // Ye react ke element creation ki behind the working h, jise use nhi krte h.
  // let ui = React.createElement('div', {}, [
  //   React.createElement('h1', {}, "Hello"),
  //   React.createElement('h1', {}, "Bye Yogi"),
  //   React.createElement('h3', {}, "Vapas Aao")
  // ])



  // Ye use krte h 

  return (

    <main>
      <h1> Hello </h1>
      <h2> Dosto </h2>
      <h3> M hoon Lucky... </h3>

   {/* <About lname= 'juyal' element = '<h1> oye hoye </h1>' />  */}
    // here i passed the element like a prop , but i will not able to use there as a element or it will not behave like an element

      <About fname='raghav' lname='juyal' element='<h1> Hello this is raghav juyal </h1>'> 
      <h1> Hello this is raghav juyal </h1> 
      <h1> i'm an Actor  </h1> 
      </About>

    </main>

  )

}

export default APP;
