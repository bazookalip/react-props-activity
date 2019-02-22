
import React, { Component } from 'react';
import Header from '../Header/Header';
import './App.css';

class App extends Component {
  state = {
    numberInput: '',
    currentTotal: 0,
    numberList: [],
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
      currentTotal: this.state.currentTotal + Number(this.state.numberInput),
    })
    // console.log(event);

    // this.setState({
    //   newStar: {
    //     name: '',
    //     diameter: '',
    //   },
    //   starList: [...this.state.starList, this.state.newStar],
    // });
  }

  handleClickDown = () => {
    console.log('down button has been clicked');
    this.setState({
      currentTotal: this.state.currentTotal - Number(this.state.numberInput),
    })
    // console.log(event);

    // this.setState({
    //   newStar: {
    //     name: '',
    //     diameter: '',
    //   },
    //   starList: [...this.state.starList, this.state.newStar],
    // });
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

      </div>
    );
  }
}

export default App;