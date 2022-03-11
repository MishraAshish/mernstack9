import React from "react";

let Footer = (props)=>{ //functional component
    // props.name = "New Name";

    return(
        <div className="footer">
                © Copyright 2019 All rights reserved. &nbsp;|&nbsp; <a href="https://www.synergisticit.com/" target="_blank">SynergisticIT</a> &nbsp;|&nbsp; <a href="http://www.synergisticit.com/sitemap.xml" target="_blank">Sitemap</a>
                {/* {`This is footer component. Received address through props is ${props.address} and Name is ${props.name}
                ${props.user.name}
                ${props.user.pwd}
                `}
                {props.children[0]}
                {props.children[1]} */}
        </div>
     )
}

export default Footer;

export function Footer2(params) {
    return(
        <div>
            <b>This is footer2 element of the application</b>
        </div>
    )
}

export const pi = 3.14159;