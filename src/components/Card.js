import React, {Component} from "react";

class Card extends Component {
    render(){
        return(
            <div className="card">
                <h2 className ="number">{this.props.personCard[0].id}/25</h2>

                <h2 className="name">{this.props.personCard[0].name.first} {this.props.personCard[0].name.last}</h2>

                <h3 className="person-label">From:</h3>
                <h3 className="person-response">{this.props.personCard[0].city}, {this.props.personCard[0].country}</h3>

                <h3 className="person-label">Job Title:</h3>
                <h3 className="person-response">{this.props.personCard[0].title}</h3>

                <h3 className="person-label">Employer:</h3>
                <h3 className="person-response">{this.props.personCard[0].company}</h3>

                <h3 className="person-label">Favorite Movies</h3>
                <h3 className="person-response">1. {this.props.personCard[0].favoriteMovies[0]}</h3>
                <h3 className="person-response">2. {this.props.personCard[0].favoriteMovies[1]}</h3>
                <h3 className="person-response">3. {this.props.personCard[0].favoriteMovies[2]}</h3>
            
            </div>
        )
    }





}







export default Card;