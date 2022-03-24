import React from "react";

let DisplayDetailedProduct = ({product})=>{

    return(
        <ul >
            <li  > {product.name} </li>
                <li>{product.price}</li>
                <li>{product.desc}</li>
                <li>{product.rating}</li>    
        </ul>
    )
}

export default DisplayDetailedProduct;