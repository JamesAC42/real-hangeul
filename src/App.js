import React, { Component } from 'react';
import './App.css';
import fullAlphabet from './alphabet.json';
import Prompt from './Prompt.js';
import Options from './Options.js';
import Instructions from './Instructions.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      consonants: true,
      vowels: true,
      background:'space.jpg'
    }
    this.updateOptions = this.updateOptions.bind(this);
  }
  updateOptions(consonants, vowels){
    this.setState({
      consonants,
      vowels
    });
  }
  render() {
    let alphabet = {};
    if(this.state.consonants) alphabet["consonants"] = fullAlphabet.consonants;
    if(this.state.vowels) alphabet["vowels"] = fullAlphabet.vowels;
    return (
      <div className="App">
        <img id="background-image" src={"./backgrounds/" + this.state.background} alt=""/>
        <div className="header">
            REAL HANGEUL <span id="author">by <a href="https://github.com/JamesAC42">JAMES</a></span>
        </div>
        <Options 
          consonants={this.state.consonants}
          vowels={this.state.vowels}
          updateOptions={this.updateOptions}/>
        <Prompt 
          alphabet={alphabet}
          background={this.state.background}/>
        <Instructions />
      </div>
    );
  }
}

export default App;
