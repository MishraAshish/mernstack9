//this is the entry point of our application
console.log("this is the entry file of our project")
//alert("Entry file!")
import React from "react";
import {render} from "react-dom"; // responsible to create virtual dom 
import AppComponent from "./app/ApplicationComponent";

//for diff between real dom and virtual dom, patch if any difference is found
render(
    <AppComponent/>,//component that we need to render as the core application
    document.getElementById("root") //bootstrapping react application on root container
)

//class and functional components (state, component, lifecylce methods, statless, etc)
//jsx, expression
//react-dom its render method