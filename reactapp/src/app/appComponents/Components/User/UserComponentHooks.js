import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {addUser, signinUser} from "../../../state/user/userActions";

let UserHook = ()=>{

    //let refInput = react.createRef()
    // creating inputs with the help of ref keyword with userRef function
    let inputUserName = useRef(null);
    let inputPassword = useRef(null);
    let inputMobile = useRef(null);
    let inputStreet = useRef(null);

    // to make our component subscribe to the store we need to use - useSelector and then
    // select the state with which we want to map our data (mapStateToProps)
    let user = useSelector((state)=>state.userReducer.user);//async call

    //implementation of mapDispatch to props so that we can dispatch the action
    let dispatchUser = useDispatch();

    const setInt = setInterval(() => {
        console.log("My name is Something")
    }, 1000);

    //inputUserName = user.userName; // we will not be able to directly assign value we read from useSelector

    // replacemnet of shouldComponentUpdate or componentDidMount or componentWillUnmout
    useEffect(()=>{
        //console.log(user)        
        inputUserName.current.value = user.userName;        
        inputPassword.current.value = user.password;
        inputStreet.current.value = user.street;
        inputMobile.current.value = user.mobile;


        //componentWillUnmount
        return function cleanup() {
            //we must avoid doing any data cleanup, it is for javascript functions, callbacks, 
            console.log("useEffect is working as component will unmount, to cleanup the component");
            clearInterval(setInt); //cleaning up interval call
        };
    }) //shouldComponent update

    //ComponentDidMount - once we initilize the value in second parameter
    // useEffect(()=>{
    //     //console.log(user)        
    //     inputUserName.current.value = user.userName;        
    //     inputPassword.current.value = user.password;
    //     inputStreet.current.value = user.street;
    //     inputMobile.current.value = user.mobile;
    // },[]) 

    let handleSubmit = (evt)=>{
        // `current` points to the mounted text input element
        
        let userObj = {
            userName : inputUserName.current.value,
            password : inputPassword.current.value,
            street : inputStreet.current.value,
            mobile : inputMobile.current.value
        }
        //alert("User Object :" + JSON.stringify(userObj))

        //dispatchUser(addUser(userObj));
        dispatchUser(signinUser(userObj));
        evt.preventDefault();

    }

    return(
        <>
            <h1>User Hook</h1>

            <form className={"form col-md-10 userHook"} onSubmit={handleSubmit}>                
                <label>
                    <b>User Name :</b>
                    <input type="text" className={"form-control col-md-12"} ref={inputUserName} 
                            placeholder="Please enter user name" maxLength={20} required/>
                </label>
                <br/>
                <label>
                    <b>Password :</b>
                    <input type="password" className={"form-control col-md-12"} ref={inputPassword} 
                            placeholder="Please enter password" maxLength={20} required/>
                </label>
                <br/>
                <label>
                    <b>Street :</b>
                    <input type="text" className={"form-control col-md-12"} ref={inputStreet} 
                            placeholder="Please enter address" maxLength={20}/>
                </label>
                <br/>
                <label>
                    <b>Mobile :</b>
                    <input type="number" className={"form-control col-md-12"} ref={inputMobile} 
                            placeholder="Please enter mobile" />
                </label>

                <br/>
                <input type="submit" className={"btn btn-primary"} value="Signin" />
            </form>


        </>
    )
}

export default UserHook;