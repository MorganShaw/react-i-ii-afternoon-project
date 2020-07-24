import React, {Component} from "react";

//pass props in as destructured object in parameters...once I name it.

function CardNav ({contacts}){
    return (
        <div className="cardnav">
            <button className="navbutton button-left" onClick={event => this.handlePrevious(event)}>{"< "}Previous</button>
            <button className="navbutton button-right" onClick={event => this.handleNext(event)}>Next{" >"}</button>
        </div>
    )
}

export default CardNav;