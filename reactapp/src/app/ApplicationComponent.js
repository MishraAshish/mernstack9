//core react library to give us functionality of react rendering engine
import React, { Component } from "react"; //react-default import, Component- named import 
import Footer, {Footer2, pi} from "./common/FooterComponent";
import Home from "./common/HomeComponent";

export default class AppComponent extends Component //React.Component
{
    constructor(props, context){
        super(props);

        this.state = {
            timeNow : (new Date()).toLocaleTimeString()
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

    onclickTest = ()=>{
        alert("i am clicked");
    }

    render(){
        let someJSValues = "This is the plain text for application";
        let num1 = 50;
        let num2 = 51;        
        return(
            <>
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
                <Footer2 /> */}
                
                <Home title="Home Component Title">
                    <h1>Home Component</h1>
                    <h2>Passed from parent AppComponent </h2>    
                </Home>
                <Footer></Footer>
                
            </>
        )
    }
}

//virtual dom //diffing //restricting developers not to make change directly in html