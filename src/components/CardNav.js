import React, {Component} from "react";

//pass props in as destructured object in parameters...once I name it.

function CardNav (contacts){
    return (
        <div className="cardnav">
            <button className="navbutton button-left" onChange={this.handlePrevious}>{"< "}Previous</button>
            <button className="navbutton button-right" onChange={this.handleNext}>Next{" >"}</button>
        </div>
    )
}

export default CardNav;