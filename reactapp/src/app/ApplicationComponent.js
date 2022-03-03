//core react library to give us functionality of react rendering engine
import React, { Component } from "react"; //react-default import, Component- named import 


export default class AppComponent extends Component //React.Component
{
    render(){
        let someJSValues = "This is the plain text for application";
        
        return(
            <>
                <h1>This is the react view built using JSX - Javascript Like XML</h1>
                <b>{someJSValues}</b>
                <div>This is div in jsx</div>
            </>
        )
    }
}