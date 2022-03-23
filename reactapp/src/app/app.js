//core react library to give us functionality of react rendering engine
import React, { Component } from "react"; //react-default import, Component- named import 
import {BrowserRouter as Router, Routes, Redirect, Route} from "react-router-dom";//
import "./app.css";

import Footer, {Footer2, pi} from "./common/FooterComponent";
import Home from "./common/HomeComponent";
import Header from "./common/HeaderComponent";
import About from "./common/AboutComponent";
import NotFound from "./common/NotFoundComponent";
//import User from "./appComponents/Components/User/UserComponent";
//import User from "./appComponents/Container/UserContainer";
import UserHook from "./appComponents/Components/User/UserComponentHooks";
//import Hooks from "./hooks/hooksUsage";

export default class AppComponent extends Component //React.Component
{
    constructor(props, context){
        super(props);

        this.state = {
            timeNow : (new Date()).toLocaleTimeString(),
            title : "Home Component Title"
        }
        this.pi = 3.14159;
        //this.updateTime();
    }

    updateTime = () =>{
        setInterval(() => {
            console.log(this.state.timeNow)
            this.state.timeNow = (new Date()).toLocaleTimeString()
            
            // this.setState({
            //     timeNow : (new Date()).toLocaleTimeString()
            // })

            this.forceUpdate();//it must be avoided to use, but immediately invokes render method
        }, 1000)
    };

    onclickTest = (updatedTitle)=>{
        //alert("i am clicked");

        this.setState({
            title : updatedTitle
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        
        //return true;
        if (nextState.title == this.state.title) {
            return false; //to not call the render method
        } else {
            return true;    
        }
    }

    render(){
        let someJSValues = "This is the plain text for application";
        let num1 = 50;
        let num2 = 51;  
        console.log("Render of Application Component")      
        return(
            <Router>
                {/* <h1 onClick={()=>alert("i am clicked inline")}>This is the react view built using JSX - Javascript Like XML</h1>
                <b>{someJSValues}</b>
                <div> This is div in jsx {pi}</div>
                <p>{this.state.timeNow}</p> */}
                {/* <b>{num1*num2}</b>
                <br/>
                <b>{num1+num2}</b>
                <br/>
                <b>{num2 < 50 ? num1/num2 : "less than 1"}</b>
                
                <br/>
                <b>{this.pi}</b>
                <Footer2 /> 
                <Home title={this.state.title} updateTitle={this.onclickTest}>
                            <h1>Home Component</h1>
                            <h2>Passed from parent AppComponent </h2>    
                        </Home>
                */}
                <Header/>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home title={this.state.title} updateTitle={this.onclickTest}>
                            <h1>Home Component</h1>
                            <h2>Passed from parent AppComponent </h2>    
                        </Home>} /> 
                        {/* <Route path="/user" element={<User />} />  */}
                        <Route path="/user" element={<UserHook />} /> 
                        {/* <Route path="/about" element={<Hooks />} />  */}
                        <Route path="/about" element={<About />} /> 
                        <Route path="/about/:id" element={<About />} /> 
                        <Route path="*" element={<NotFound/>} />
                    </Routes>
                <Footer/>
                
            </Router>
        )
    }
}

//virtual dom //diffing //restricting developers not to make change directly in html