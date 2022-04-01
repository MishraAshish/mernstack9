import React from "react";
import {NavLink} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

let Header = (props)=>{

    let navigate = useNavigate();

    let func = function(event) {
        event.preventDefault();
        
        navigate('/about/5000');
    }

    let userName = props.user && props.user.userName ? props.user.userName : ""; 

    return(
        <>
            Hi <b>{userName +", "}</b> Welcome to SynergisticIT Shopping Cart 
            {userName == "" ?<b> Please Login to see other features</b>:""}
            <hr/>
            <NavLink to="/home" className="button" activeClassName="success" >Home </NavLink> 
            <NavLink to="/user" className="button" activeClassName="success" >{userName == "" ? "Login" : "User"} </NavLink> 
            {userName &&
                <React.Fragment> 
                <NavLink to="/product" className="button" activeClassName="success" >Product </NavLink> 
                <NavLink to="/cart" className="button" activeClassName="success" >Cart </NavLink>
                <NavLink to="/checkout" className="button" activeClassName="success" >Checkout </NavLink>
                    {/* <Dropdown as={ButtonGroup}>
                        <Button variant="success">Split Button</Button>
                        <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
                        <Dropdown.Menu>
                            <Dropdown.Item href="/about">About</Dropdown.Item>
                            <Dropdown.Item href="/product">Product</Dropdown.Item>
                            <Dropdown.Item href="/checkout">Checkout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown> */}
                </React.Fragment>
            }
            {/* <button onClick={func}>Go To About</button> */}
            <hr/>
        </>
    )
}

let mapStateToProps = (state)=>{
    return{
        user : state.userReducer.user
    }
}

export default connect(mapStateToProps, null)(Header);

//export default Header;


//create a class with your own name and implement all the component lifecyles