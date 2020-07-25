import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './reset.css';
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

    this.handleNext = this.handleNext.bind(this)
    this.handlePrevious = this.handlePrevious.bind(this)
  }

  handleNext() {
    if(this.state.index === this.state.contacts.length - 1) {
      this.setState({
        index: 0
      })
    } else {
      this.setState({
        index: this.state.index + 1
      })
    }
  }

  handlePrevious() {
    if(this.state.index === 0) {
      let newIndex = this.state.contacts.length - 1
      this.setState({
        index: newIndex
      })
     } else {
       this.setState({
       index: this.state.index - 1
     })
    }
  } 

  render() {
    let mappedContacts = this.state.contacts.map(person => {
      return <Card  key={person.id} person={person}/>
    })

    return (
    <div className="App">
        <Header />
        {mappedContacts[this.state.index]}
        <CardNav handleNext={this.handleNext} handlePrevious={this.handlePrevious}/>
    </div>
    );
  }
  
}

export default App;

//every time i click on button, data needs to shift from item in the array to the next or previous item. 

//first - how do I display this first person's information
//hard code the access to that information - square brackets - use actual number in square brackets.