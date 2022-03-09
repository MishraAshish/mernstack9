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
