//userComponent is going to be the react code
import React, { Component, Fragment } from "react";

export default class UserComponent extends Component {
    constructor(props, context) {
        super(props);

        this.state = {
            userName : props.user.userName,
            password : props.user.password,
            street : props.user.street,
            mobile : props.user.mobile,
        }
    }

    onTextChange = (evt)=>{
        let target = evt.target;
        let value = target.value;

        let classList = target.classList;

        //console.log("classlist ", classList)

        if(classList.contains("username")){
            this.setState({
                userName : value
            })
        } else if(classList.contains("pass"))
        {
            this.setState({
                password : value
            })
        }else if(classList.contains("street")){
            this.setState({
                street : value
            })
        }else if (classList.contains("mobile") && value.length <= 11) {
            this.setState({
                mobile: value
            })    
        }       

    }

    // static getDerivedStateFromProps(props, state) {
    //     // Note we need to store prevPropsState to detect changes.
    //     console.log("props ", props)
    //     console.log("state ", state)
    //     if (props.user !== state.user) {
    //         console.log("Changes in props")
    //       return {
    //         prevPropsState: state.user,
    //         state: props.user
    //       };
    //     }
    //     return null;
    //   }

    loginUser = ()=>{
        //alert("we are going to sign in below user - " +JSON.stringify(this.state))
        //this.props.addUserToStore(this.state);
        this.props.signInUpUserDB(this.state);
    }

    // shouldComponentUpdate(nexState, nextProps)
    // {
    //     console.log("user ", nexState.user)
    //     return true;
    // }
    render(){
        return(
            <Fragment>
                <h1>User Login Page</h1>
                <section className={"componentClass"}>
                <div className="form col-md-8">
                        <div className="col-md-12">
                            <b>User Name</b>
                            <input type="text" className="form-control col-md-6 username" value={this.state.userName} 
                                placeholder="User Name" onChange={this.onTextChange} maxLength={40}/>
                        </div>
                        <div className="col-md-12">
                            <b>Password</b>
                            <input type="password" className="form-control col-md-6 pass" value={this.state.password} 
                                placeholder="Password" onChange={this.onTextChange} maxLength={40}/>
                        </div>
                        <div className="col-md-12">
                        <b>Street </b>
                            <input type="text" className="form-control col-md-6 street" value={this.state.street} 
                                    placeholder="Street Name" onChange={this.onTextChange} />
                        </div>
                    
                        <div className="col-md-12">
                            <b>Mobile </b>
                            <input type="number" className="form-control col-md-6 mobile" value={this.state.mobile} 
                            placeholder="Mobile" maxLength="11"
                            onChange={this.onTextChange} />
                        </div>

                     {/* {this.props.user._id} */}

                     <input type="button" className={"btn btn-primary col-md-2 saveUser"} 
                            value={"SignIn-Up"} 
                            onClick={this.loginUser}/>
                </div>

                </section>
            </Fragment>
        )
    }
}