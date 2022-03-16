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
            address1 : "address1",
            username : "props.username",
            inputAddress : "inputAddress",
            inputSession : "MERNStack"
        }

        //ref - keyword uses
        //as we dont have any html selectors available in react so this provides a reference to html
        this.inputAddress = React.createRef(); 

        //this.inputAddress.current.focus(); //view can't be accessed in constructor
        this.inputSession = React.createRef();
    }

    //creation life cycle method
    componentDidMount(){
        console.log("componentDidMount")
        //view is accessible
        // setTimeout(() => {
        //     this.inputAddress.current.focus();
        //     this.inputAddress.current.value = "New value after three seconds";
        // },3000)
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

    onSubmitForm = (evt)=>{

        const session = this.inputSession.current.value;
        const newAddress = this.inputAddress.current.value;

        //alert(session + " " + newAddress)

        this.setState({
            inputSession : session,
            inputAddress  : newAddress
        })

        evt.preventDefault();//we stop the default behaviour of form submission to serverso avoid page reload
    }

    render(){
        console.log("Render method of Home Component")

        return(
        
        <div className={"loadimage form"} style={{backgroundImage: "url(/images/hm_pic4.jpg)"}}>
            {/* <p>{this.state.name}</p> */}
            {/* <img src={"./images/hm_pic4.jpg"} /> */}
            {/* {this.state.Title} */}
            <b className="feature">{"Below Feature's We've Implemented in our project :"}</b>
            <ul>                     
                <li>Sign up new users</li>
                <li>Login existing users.</li>
                <li>Add products/items to create product collection.</li>
                <li>Allow user's to add to cart.</li>
                <li>Save the user's cart.</li>
                <li>Checkout and pay for items.</li>
                <li>Allow users to cancel the order.</li>
                <li>Allow users to reorder the cart.</li>
                <li>Allow users to give ratings to each product.</li>
                <li>Have notifications on top right with logout.</li>
            </ul>
            {/* <h1>{this.props.title}</h1>
            <p>{this.state.username}</p>
            
            <input type={"text"} className="username" value={this.state.username} onChange={this.onChangeText} ></input>
            <input type={"text"} className="address" value={this.state.address1} 
                            onChange={(e)=>{this.setState({ address1 : e.target.value })}} ></input>
             */}
            {/* sending title back from home component to application component using callback feature of Javascript */}
            {/* <input type={"button"} onClick={()=>this.props.updateTitle("Updated Title From Home")} value="Click To Update Title"></input> */}
            
            {/* We are going to create an uncontrolled html form with html elements, 
                it is controlled element values are not going to be part of react state */}

            {/*<form onSubmit={this.onSubmitForm}>
                <label>
                        Session Name:
                        <input type="text" ref={this.inputSession} placeholder="Please enter session"/>
                </label>
                
                <label>
                        Address:
                        <input type="text" ref={this.inputAddress} placeholder="Please enter address"/>
                </label>

                <input type="submit" value="Submit" />

                <div>
                        Age: {this.state.inputSession}
                        <br/>
                        Address: {this.state.inputAddress}
                </div>
            </form>

            <Address address = {this.state.address}></Address> */}
        </div>)
    }
}

// Home.defaultProps = {
//     title : "Default Title"
// }

// Home.propTypes = {
//     title : PropTypes.string.isRequired
// }