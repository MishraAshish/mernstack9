// export and import : ES6

//we assume that file in which we defined variables is constants.js

export const pi = 3.1415926; // named export
export const phy = 3.39415926;
export default shy = 1.242; //default export


//we are using values in another file usevalues.js

import shy, {pi, phy}  from "/path/constants";

console.log(pi)

// module.exports = {
//     pi,
//     phy
// }
//let constants = require("/constants.js") 
//constants.pi
//constants.phy


//only default export is allowed from a module
export default class Constants {
    //doing some stuffs
}

import Constants from "/constants"; // default import

//constants2.js"

export const pi = 6.28; // named export
export const pi1 = 6.28; // named export
export const pi2 = 6.28; // named export
export const pi3 = 6.28; // named export
export const pi4 = 6.28; // named export


import {pi} from "constants";
import {pi as pic2} from "constant2";

console.log(pic2)

import * as allExports from "constants2"; //importing all exports from constant2

//allExports.pi
//allExports.pi2
//allExports.pi3