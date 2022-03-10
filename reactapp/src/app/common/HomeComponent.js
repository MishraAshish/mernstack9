import React, {Component, PureComponent} from "react";
import {PropTypes} from "prop-types";
import Address from "./AddressComponent";

//export default class Home extends Component {
 export default class Home extends PureComponent {
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
            username : "props.username"
        }

        //ref - keyword uses
        //as we dont have any html selectors available in react so this provides a reference to html
        this.inputAddress = React.createRef(); 

        //this.inputAddress.current.focus(); //view can't be accessed in constructor
    }

    //creation life cycle method
    componentDidMount(){
        console.log("componentDidMount")
        //view is accessible
        setTimeout(() => {
            this.inputAddress.current.focus();
            this.inputAddress.current.value = "New value after three seconds";
        },3000)
    }

    //update lifecycle methods
    //this asks us to decide whether we need to stop calling the render method on state change
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("shouldComponentUpdate");
    //     console.log("nextState",nextState);
    //     console.log("nextProps", nextProps);
        
    //     //return true;
    //     if (nextProps.title == this.props.title) {
    //         return false; //to not call the render method
    //     } else {
    //         return true;    
    //     }
    // }

    getSnapshotBeforeUpdate(prevState, prevProps){
        console.log("getSnapshotBeforeUpdate");
        console.log("prevState", prevState);
        console.log("prevProps", prevProps);
        return {
            prevState,
            prevProps
        }
    }

    componentDidUpdate(prevState, prevProps){
        console.log("componentDidUpdate");
        console.log("prevState",prevState);
        console.log("prevProps", prevProps);
    }


    //destruction life cycle methods
    componentWillUnmount(){
        console.log("componentWillUnmount");
        //previous component needs to clear all subscriptions and any pending calls while navigating to other component
    }


    onChangeText = (evt) => {
        console.log("Target ", evt.target)

        //alert(evt.target.classList)
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
        console.log("Render method of Home Component")

        return(
        <>
            <h1>{this.props.title}</h1>
            <p>{this.state.username}</p>
            <a href="/about">Go To About</a>
            <input type={"text"} className="username" value={this.state.username} onChange={this.onChangeText} ></input>
            
            {/* sending title back from home component to application component using callback feature of Javascript */}
            <input type={"button"} onClick={()=>this.props.updateTitle("Updated Title From Home")} value="Click To Update Title"></input>
            
            <input type={"text"} value="Ref Textbox" ref={this.inputAddress} onChange={()=>{}}></input>

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