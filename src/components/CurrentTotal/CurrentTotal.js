import React, { Component } from 'react';

class CurrentTotal extends Component {
    render() {
        return (
            <div className="CurrentTotal">
                <div>
                    <button onClick={this.props.handleClickSave}>Save</button>
                </div>
                <div>
                    {this.props.currentTotal}
                </div>
                <p>Click save above to save the current total in the history</p>
            </div>

            
        );
    }
}

export default CurrentTotal;