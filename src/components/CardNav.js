import React, {Component} from "react";

//pass props in as destructured object in parameters...once I name it.

const CardNav = (props) => {
    const {person, handleNext, handlePrevious} = props;
    return (
        <div className="cardnav">
            <button className="navbutton button-left" onClick={event => handlePrevious(event)}>{"< "}Previous</button>
            <button className="navbutton button-right" onClick={event => handleNext(event)}>Next{" >"}</button>
        </div>
    )
}

export default CardNav;