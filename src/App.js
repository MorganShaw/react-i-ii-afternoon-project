import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts';
import Card from './components/Card';
import Header from './components/Header';
import CardNav from './components/CardNav';



class App extends Component {
  constructor(){
    super();

    this.state = {
      index: 0,
      contacts: contacts
    }

    // this.nextCard = this.handleNext.bind(this)
    // this.previousCard = this.handlePrevious.bind(this)
  }



  nextCard(index) {
    const cardDisplayed = [this.state.contacts[0]];
    this.setState({
      index: index + 1
    })
    this.state.contacts[1]
  }

  previousCard(index) {
    const person = [this.state.contacts[index]];
    this.setState({
      index: index - 1
    })
  }


  render() {
    return (
    <div className="App">
        <Header />
        <Card personCard={this.state.contacts}/>
        <CardNav next={this.handleNext} previous={this.handlePrevious}/>
    </div>
    );
  }
  
}

export default App;

//every time i click on button, data needs to shift from item in the array to the next or previous item. 

//first - how do I display this first person's information
//hard code the access to that information - square brackets - use actual number in square brackets.