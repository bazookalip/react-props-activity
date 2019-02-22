import React, { Component } from 'react';
import Header from '../Header/Header';
import './App.css';

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
      <div>
        <Header />
        <button onClick={this.handleClickUp}>Up</button>
        <input
          type="number"
          placeholder="Enter Number"
          onChange={this.handleChange}
          value={this.state.numberInput}
        />
        <button onClick={this.handleClickDown}>Down</button>
        <div>
          {this.state.currentTotal}
        </div>
        <div>
          <button onClick={this.handleClickSave}>Save</button>
        </div>
        <p>Click save above to save the current total in the history</p>


        <h2>History</h2>
        <div>
          <ul>{this.state.historyList.map(historyItem => <li key={historyItem}>{historyItem}</li>)}</ul>
        </div>

      </div>
    );
  }
}

export default App;