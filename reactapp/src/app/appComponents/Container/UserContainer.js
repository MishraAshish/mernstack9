//user Container is going to be the react-redux code => taking data from redux and passing it to react as props 

import {connect} from "react-redux";
import UserComponent from "../Components/User/UserComponent";

import { addUser, signinUser} from "../../state/user/userActions";

//mapStateToProps -> to make UserComponent Subscriber 

let mapStateToProps = (state)=>{ //state => actually our store (reducers like userreducer, other reducer states)
    return{
        user : state.userReducer.user
    }
}

//mapDispatchToProps -> to make our component Publisher

let mapDispatchToProps = (dispatch)=>{
    return{
        addUserToStore : (user)=>{
            dispatch(addUser(user))
        },
        signInUpUserDB : (user)=>{
            dispatch(signinUser(user))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);