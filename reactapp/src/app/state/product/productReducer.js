import * as ActionTypes from "../actionTypes";

let INITIAL_STATE = {
     products:[],
     defaultProduct : {
         name : "Product Name",
         price : 2,
         desc : "Product Description",
         rating : "Product Rating"
     }
}


export default function ProductReducer(state=INITIAL_STATE, action)
{
    switch (action.type) {        

        case ActionTypes.ADD_PRODUCTS_TOSTORE:            
            return {...state, products:action.payload.products};

        // case ActionTypes.FETCH_PRODUCTS_FULFILLED:            
        //     return {...state, products:action.payload};

        default:
            return state;
    }
}


//products:[{
//     name: "Product 1"
// },
// {
//    name: "Product 2"
// }]