import React, { Component } from 'react';

class History extends Component {
    render() {
        return (
            <div className="History">
                <h2>History</h2>
                <div>
                    <ul>{this.props.historyList.map(historyItem => <li key={historyItem}>{historyItem}</li>)}</ul>
                </div>
            </div>
        );
    }
}

export default History;