import React, {Component} from "react";
import {PropTypes} from "prop-types";
import Address from "./AddressComponent";

export default class Home extends Component {
    constructor(props, context){
        //props : is data object and is the only way to pass data between components
        super(props);//this synchronises props to Base Class component
        //this.props.title = "New Title" //props are immutable and cant be modified

        //kim - red color (car)
        //cody's - green (car)
        this.state = {
            address : {
                homeaddress : "Somewhere on earth",
                flatNo : "12451",
                street : "Orange Street",
                zipcode : "a4b45g"
            },
            username : props.username
        }
    }

    onChangeText = (evt) => {
        console.log("Target ", evt.target)
        const targetValue = evt.target.value;
        // this.state.username = targetValue;
        // this.forceUpdate();

        //set state executes in a callback manner and updates the value in conservative batch processing and then 
        //invokes render method of the component
        this.setState({
            username : targetValue
        })

        console.log(this.state.username);
    }

    render(){
        return(
        <>
            <h1>{this.props.title}</h1>
            <p>{this.state.username}</p>

            <input type={"text"} value={this.state.username} onChange={this.onChangeText} ></input>

            <Address address = {this.state.address}></Address>
        </>)
    }
}

// Home.defaultProps = {
//     title : "Default Title"
// }

Home.propTypes = {
    title : PropTypes.string.isRequired
}