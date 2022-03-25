import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../../state/cart/cartActions";


let DisplayDetailedProduct = ({product})=>{

    let [showHide, showHideDetails] = useState(false);
    let addItemToCartDispatcher = useDispatch();

    let addProductToCart = (product)=>{
        addItemToCartDispatcher(addItemToCart(product));
    }

    return(
        <ul className="product">
            <li className="product" onClick={()=>showHideDetails(!showHide)} >
            {product.name}
                {showHide ?
                    <ul>
                        <li>{product.price}</li>
                        <li>{product.desc}</li>
                        <li>{product.rating}</li> 
                        <button onClick={()=>{addProductToCart(product)}}>Add To Cart</button>
                    </ul>
                    : ""
                }
            </li>
        </ul>
    )
}

export default DisplayDetailedProduct;