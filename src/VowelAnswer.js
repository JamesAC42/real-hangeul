import React, { Component } from 'react';

export default class VowelAnswer extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="answer">
                <div className="spacer"></div>
                <div className="indicator">
                    <img src="./icons/wrong.png" alt="incorrect"/>
                </div>
                <div className="pronunciation-chart">
                    <div className="row row-header">
                        <div className="col">Vowel</div>
                    </div>
                    <div className="row">
                        <div className="col">{this.props.letter.sound}</div>
                    </div>
                    <div className="row">
                        <div className="col">{this.props.letter.word}</div>
                    </div> 
                </div>
            </div>
        )
    }
}