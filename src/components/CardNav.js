import React, {Component} from "react";

//pass props in as destructured object in parameters...once I name it.

function CardNav (){
    return (
        <div className="cardnav">
            <button className="navbutton button-left">{"< "}Previous</button>
            <button className="navbutton button-right">Next{" >"}</button>
        </div>
    )
}

export default CardNav;