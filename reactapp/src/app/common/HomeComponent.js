import React, {Component} from "react";
import {PropTypes} from "prop-types";

export default class Home extends Component {
    constructor(props, context){
        //props : is data object and is the only way to pass data between components
        super(props);//this synchronises props to Base Class component
        //this.props.title = "New Title" //props are immutable and cant be modified

        //kim - red color (car)
        //cody's - green (car)
    }

    render(){
        return(
        <>
            <h1>{this.props.title}</h1>
            {/* {this.props.children[0]}
            {this.props.children[1]} */}
        </>)
    }
}

// Home.defaultProps = {
//     title : "Default Title"
// }

Home.propTypes = {
    title : PropTypes.string.isRequired
}