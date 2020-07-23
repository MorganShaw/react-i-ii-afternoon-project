import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data';
import Card from './components/Card';
import Header from './components/Header';
import CardNav from './components/CardNav';



class App extends Component {
  constructor(){
    super();

    this.state ={
      index: 0,
      dataArray: ""
    }

    //bind function here....
  }


  render() {
    return (
    <div className="App">
        <Header />
        <Card />
        <CardNav />
    </div>
    );
  }
  
}

export default App;
