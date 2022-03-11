import React from "react";
import {NavLink} from "react-router-dom";

let Header = (props)=>{

    return(
        <>
            <h1>Header Component</h1>
            <hr/>
            <NavLink to="/home" className="button" activeClassName="success" >Home </NavLink> 
            <NavLink to="/about" className="button" activeClassName="success" >About </NavLink> 
            <hr/>
        </>
    )
}

export default Header;