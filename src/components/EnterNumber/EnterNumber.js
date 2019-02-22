import React, { Component } from 'react';

class EnterNumber extends Component {


    render() {
        return (
            <>
            <div className="EnterNumber">
               Enter a number and click up or down. The total will increase or decrease by that amount.
            </div>

            <div className="Keypad">
            
            <button>Up</button>
            <input placeholder="Enter Number"/>
            <button>Down</button>

                    
            </div>

                
            </>
        );
    }
}

export default EnterNumber;