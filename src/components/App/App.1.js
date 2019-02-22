import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header'
import EnterNumber from '../EnterNumber/EnterNumber';
import CurrentTotal from '../CurrentTotal/CurrentTotal';
import History from '../History/History'

class App extends Component {

  state= {
    numberInput: '',
    currentTotal: 0,
    numberList: [],
  }




  render() {
    
    return (
      <div>
        <Header/>
        <EnterNumber/>
        <CurrentTotal/>
        <History/>
        
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header'
import EnterNumber from '../EnterNumber/EnterNumber';
import CurrentTotal from '../CurrentTotal/CurrentTotal';
import History from '../History/History'

class App extends Component {

  state = {
    numberInput: '',
    currentTotal: 0,
    numberList: [],
  }




  render() {

    return (
      <div>
        <Header />
        <EnterNumber />
        <CurrentTotal />
        <History />

      </div>
    );
  }
}

export default App;