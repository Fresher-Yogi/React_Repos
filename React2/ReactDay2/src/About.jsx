import { React } from "react";

function About({children}) {

    console.log(children);

    return (
            <nav>
            <h1> Hii </h1>
            <h2> dosto , kaise ho  </h2>
            <h3> m hoon Yogi </h3>
            <h4> i'm instructor at sheryians coding school </h4>
            {children}
            </nav>

    )

}

export default About;
