import React, { Component } from 'react';

export default class Options extends Component {
    constructor(props){
        super(props);
        this.checkUncheck = this.checkUncheck.bind(this);
    }
    checkUncheck(event){
        let target = event.target;
        let consonants = this.props.consonants;
        let vowels = this.props.vowels;
        if(target.name === "consonant") {
            consonants = target.checked;
        } else {
            vowels = target.checked;
        }
        if(!(consonants || vowels)) {
            return;
        }else {
            this.props.updateOptions(consonants, vowels);
        }
    }
    render(){
        return(
            <div className="options-container">
                <div className="options-row">
                    <div className="option-header">OPTIONS</div>
                </div>
                <div className="options-row">
                    <div className="options-label">자음 (Consonants)</div>
                    <div className="options-checkbox">
                        <input onChange={this.checkUncheck} checked={this.props.consonants} type="checkbox" name="consonant"/>
                    </div>
                </div>
                <div className="options-row">
                    <div className="options-label">모음 (Vowels)</div>
                    <div className="options-checkbox">
                        <input onChange={this.checkUncheck} checked={this.props.vowels} type="checkbox" name="vowel"/>
                    </div>
                </div>
            </div>
        )
    }
}