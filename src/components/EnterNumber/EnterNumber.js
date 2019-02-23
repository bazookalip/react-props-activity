import React, { Component } from 'react';

class EnterNumber extends Component {


    render() {
        return (
            <>
            <div className="EnterNumber">
               Enter a number and click up or down. The total will increase or decrease by that amount.
            </div>

            <div className="Keypad">
            
            <button onClick={this.props.handleClickUp}>Up</button>
  
                    <input
                        type="number"
                        placeholder="Enter Number"
                        onChange={this.props.handleChange}
                        value={this.props.numberInput}
                    />
            <button onClick={this.props.handleClickDown}>Down</button>

                    
            </div>

                
            </>
        );
    }
}

export default EnterNumber;