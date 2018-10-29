import React, { Component } from 'react';

export default class ConsonantAnswer extends Component {
    render() {
        return(
            <div className="answer">
                <div className="indicator">
                    <img src="./icons/wrong.png" alt="incorrect"/>
                </div>
                <div className="char-name">
                    {this.props.letter.name}
                </div>
                <div className="pronunciation-chart">
                    <div className="row row-header">
                        <div className="col">Start of Word</div>
                        <div className="col">Start of Syllable</div>
                        <div className="col">End of Word</div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="letters">{this.props.letter.soundStart}</div>
                            <div className="example">{this.props.letter.wordStart}</div>
                        </div>
                        <div className="col">
                            <div className="letters">{this.props.letter.soundSyllable}</div>
                            <div className="example">{this.props.letter.wordSyllable}</div>
                        </div>
                        <div className="col">
                            <div className="letters">{this.props.letter.soundEnd}</div>
                            <div className="example">{this.props.letter.wordEnd}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}