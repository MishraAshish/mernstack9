import React from "react";


let Address = (props)=>{
    const address = props.address;
    return(
        <>
            <h2>Address</h2>
            <div>
                <p>{address.homeaddress}</p>
                <p>{address.flatNo}</p>
                <p>{address.street}</p>
            </div>
        </>
    )
}

export default Address;

//create a student component and make it child in home and pass studentDetails as an object
//defaultProps and PropTypes
