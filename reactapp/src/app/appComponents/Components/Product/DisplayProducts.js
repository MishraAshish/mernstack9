import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../../state/product/productAction";
import DisplayDetailedProduct from "./DisplayDetailedProduct";

let DisplayProducts = (props)=>
{

    let products = useSelector((state)=>state.productReducer.products);

    let useDispatchToFetchProducts = useDispatch();

    products && products.length < 1 ? useDispatchToFetchProducts(fetchProducts()) : "";

    return(
            <>
                <h2>Below Products are available</h2>
                <div>
                    {products && products.length >= 1 ? 
                        products.map((product)=>{
                            return <DisplayDetailedProduct product={product} key={product._id}/>
                        })
                        :
                        <b>No Products Available. Please ask admin to add some!</b>
                    }
                </div>
            </>
    )
}

export default DisplayProducts;