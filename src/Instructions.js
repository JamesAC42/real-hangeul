import React, { Component } from 'react';

export default class Instructions extends Component {
    render(){
        return (
            <div className="instructions">
                <div className="instructions-inner">
                    Type the English pronunciation of the character shown in the text box at the bottom of the display. Press enter to show the answer.
                </div>
            </div>
        )
    }
}