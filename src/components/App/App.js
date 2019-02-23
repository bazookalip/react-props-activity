import React, { Component } from 'react';
import Header from '../Header/Header';
import './App.css';
import CurrentTotal from '../CurrentTotal/CurrentTotal';
import History from '../History/History'
import EnterNumber from '../EnterNumber/EnterNumber';


class App extends Component {
  state = {
    numberInput: '',
    currentTotal: 0,
    historyList: [],
  }


  handleChange = (event) => {
    console.log('handleChange is running');
    this.setState({
      numberInput: event.target.value,
    })
  };

  handleClickUp = () => {
    console.log('up button has been clicked');
    this.setState({
      currentTotal: Number(this.state.numberInput) + this.state.currentTotal,
      numberInput: '',
    })
  }

  handleClickDown = () => {
    console.log('down button has been clicked');
    this.setState({
      currentTotal: Number(this.state.numberInput) - this.state.currentTotal,
      numberInput: '',
    })
  }

  handleClickSave = () => {
    console.log('down button has been clicked');
    this.setState({
      historyList: [...this.state.historyList, this.state.currentTotal],
    })
  }


  render() {
    return (
      <>
        <Header />
        <EnterNumber 
        numberInput={this.state.numberInput}
          handleChange={this.handleChange}
          handleClickUp={this.handleClickUp}
          handleClickDown={this.handleClickDown}
        />
        <CurrentTotal currenTotal={this.state.currentTotal} />
        <History historyList={this.state.historyList}/>
      </>
  
    );
  }
}

export default App;