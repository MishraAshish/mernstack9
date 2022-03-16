import React, { useState } from "react";
import Count from "./count";
import Button from "./button";
import Title from "./title";


function Hooks(props) {

    //let age = 18, text1 = "Age";
    //useState : Hook is used to initialize the state in functional component 
    //it returns a callback function that can be used to update the age and call re-render
    let [age, updateAge] = useState(18);

    let incrementAge = ()=>{
        age = age + 1;
        //alert("Age can't be updated in functional component "+ age);
        updateAge(age);
    }

    return(
    <>
        <Title />
        
        <Count text={"Age"} count={age}/>

        <Button handleClick={incrementAge}>Increment Age</Button>
    </>);
}

export default Hooks;