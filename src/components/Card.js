import React, {Component} from "react";

const Card = (props) => {
    const {person} = props;  //instead of destructuring the object in the parameters of the function above.
    return (
        <div className="card">
            <p className ="number">{person.id}/25</p>
            <p className="name">{person.name.first} {person.name.last}</p>
           
            <div className="from">
                <p className="person-label">From:</p>
                <p className="person-response">{person.city}, {person.country}</p>
            </div>

            <div className="job">    
                <p className="person-label">Job Title:</p>
                <p className="person-response">{person.title}</p>
            </div>

            <div className="employer midcard">
                <p className="person-label">Employer:</p>
                <p className="person-response">{person.employer}</p>
            </div>
            <p className="person-label">Favorite Movies:</p>
            <div className="movielist">
                <p className="person-response">1. {person.favoriteMovies[0]}</p>
                <p className="person-response">2. {person.favoriteMovies[1]}</p>
                <p className="person-response">3. {person.favoriteMovies[2]}</p>
            </div>
        </div>
    )
}

export default Card;


{/* <ol>
{item.favoriteMovies.map((movie, index) => {
    console.log("MOVIE???", movie)
    return<li key={index}>j{movie}</li>
})}

</ol>

</div> */}