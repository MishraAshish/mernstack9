//core react library to give us functionality of react rendering engine
import React, { Component } from "react"; //react-default import, Component- named import 
import Footer, {Footer2, pi} from "./common/FooterComponent";

export default class AppComponent extends Component //React.Component
{
    constructor(props, context){
        super(props);

        this.state = {
            timeNow : (new Date()).toLocaleTimeString()
        }

        this.updateTime();
    }

    updateTime = () =>{
        setInterval(() => {
            console.log(this.state.timeNow)
            this.setState({
                timeNow : "XYZ"//(new Date()).toLocaleTimeString()
            })
        }, 1000)
    };

    render(){
        let someJSValues = "This is the plain text for application";
        
        return(
            <>
                <h1>This is the react view built using JSX - Javascript Like XML</h1>
                <b>{someJSValues}</b>
                <div>This is div in jsx {pi}</div>
                <p>{this.state.timeNow}</p>
                <Footer></Footer>
                <Footer2 />
            </>
        )
    }
}