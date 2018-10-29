import React, { Component } from 'react';
import ConsonantAnswer from './ConsonantAnswer.js';
import VowelAnswer from './VowelAnswer.js';

export default class Prompt extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentLetter:null,
            currentType:null,
            amountShown:0,
            amountCorrect:0,
            answerVisible:false
        }
        this.checkInput = this.checkInput.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    componentWillMount(){
        this.resetLetter();
    }
    resetLetter() {
        let alphabet = {...this.props.alphabet};
        let keys = Object.keys(alphabet);
        let type = keys[Math.floor(Math.random() * keys.length)];
        let letter = alphabet[type][Math.floor(Math.random() * alphabet[type].length)];
        let amountShown = this.state.amountShown + 1;
        this.setState({
            currentLetter:letter,
            currentType:type,
            answerVisible:false,
            amountShown
        });
    }
    handleKeyPress(event){
        if(event.key == 'Enter') {
            if(this.state.answerVisible){
                this.resetLetter();
            } else {
                this.setState({answerVisible:true});
            }
            this.inputField.value = "";
        }
    }
    showAnswer(){
        this.setState({answerVisible:true});
    }
    checkInput(e) {
        let value = e.target.value;
        let letter = this.state.currentLetter;
        let maxLength;
        let validAnswers = [];
        if(this.state.currentType === "consonants"){
            validAnswers = [letter.soundStart, letter.soundSyllable, letter.soundEnd];
            let l = validAnswers.map(sound => sound.length);
            maxLength = Math.max(...l);
        } else {
            validAnswers = [letter.sound];
            maxLength = letter.sound.length;
        }
        if(validAnswers.indexOf(value) !== -1) {
            this.resetLetter();
            let amountCorrect = this.state.amountCorrect + 1;
            this.setState({amountCorrect})
            this.inputField.value = "";
        } else {
            if(value.length >= maxLength) this.showAnswer();
        }
    }
    renderAnswer(){
        if(this.state.answerVisible){
            console.log(this.state.currentType);
            if(this.state.currentType === "consonants") {
                return(
                    <ConsonantAnswer letter={this.state.currentLetter} />
                );
            } else {
                return(
                    <VowelAnswer letter={this.state.currentLetter} />
                );
            }
        }
    }
    render(){
        return(
            <div className="container">
                <div className="container-inner">
                    <div className="container-background">
                        <img id="container-background-image" src={"./backgrounds/" + this.props.background} alt=""/>
                    </div>
                    <div className="container-blur"></div>
                    <div className={this.state.answerVisible ? "prompt-char" : "prompt-char prompt-char-center"}>
                        {this.state.currentLetter.character}
                    </div>
                    {
                        this.renderAnswer()
                    }
                    <div className="input-bar">
                        <div className="amount-shown">{this.state.amountShown} Shown</div>
                        <div className="input">
                            <input type="text" name="answer" ref={el => this.inputField = el} value={this.state.inputValue} maxLength="3" onChange={this.checkInput} onKeyPress={this.handleKeyPress}/>
                        </div>
                        <div className="amount-correct">{this.state.amountCorrect} Correct</div>
                    </div>
                </div>
            </div>
        )
    }
}