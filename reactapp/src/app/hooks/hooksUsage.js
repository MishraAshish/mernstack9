import React, { useState, useCallback, useMemo } from "react";
import Count from "./count";
import Button from "./button";
import Title from "./title";


function Hooks(props) {

    //let age = 18, text1 = "Age";
    //useState : Hook is used to initialize the state in functional component 
    //it returns a callback function that can be used to update the age and call re-render
    let [age, updateAge] = useState(18);

    //useCallback will return a memoized version of the callback that only changes if one of the inputs has changed.
    let incrementAge =  useCallback(()=>{
        console.log("aggeee")
        age = age + 1;
        //alert("Age can't be updated in functional component "+ age);
        updateAge(age);
    },[age])

    //let [user, setUser] = useState({name:"test",age:22}); //assigning the object

    let [salary, setSalary] = useState(20000);
    //this.state.salary = salary
    //this,setState(salary) = setSalary

    let incrementSalary = useCallback(()=>{
        console.log("salary")
        setSalary(salary + 100)
    },[salary]);

    //useMemo will only recompute the memoized value when one of the deps has changed.
    let isEven = useMemo(()=>{
        console.log("IsEven")
        let i = 1
        while(i < 200000000) i++;

        return age % 2 === 0;
    },[age])

    return(
    <>
        <Title />
        
        <Count text={"Age"} count={age}/>
        <Button handleClick={incrementAge}>Increment Age</Button>
            {/* <span>{isEven() ? ' Even' : ' Odd'}</span> */}
            <span>{isEven ? ' Even' : ' Odd'}</span>
        
        <Count text={"Salary"} count={salary}/>
        <Button handleClick={incrementSalary}>Increment Salary</Button>
    </>);
}



export default Hooks;