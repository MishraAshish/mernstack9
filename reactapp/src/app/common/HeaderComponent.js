import React from "react";
import {NavLink} from "react-router-dom";
import { useNavigate } from "react-router-dom";

let Header = (props)=>{

    let navigate = useNavigate();

    let func = function(event) {
        event.preventDefault();
        
        navigate('/about/5000');
    }


    return(
        <>
            <h1>Header Component</h1>
            <hr/>
            <NavLink to="/home" className="button" activeClassName="success" >Home </NavLink> 
            <NavLink to="/about" className="button" activeClassName="success" >About </NavLink>
            <button onClick={func}>Go To About</button>
            <hr/>
        </>
    )
}

export default Header;