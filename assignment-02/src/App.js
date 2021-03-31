import React, { Component } from 'react';
import './App.css';

import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {

  state = {
    word: "umut"
  }

  nameChangedHandler = ( event ) => {
    this.setState( {
      word: event.target.value
    })
  }

  deleteCharHandler = (charIndex) => {
    const chars = this.state.word.split('');
    chars.splice(charIndex, 1);
    const newChars = chars.join('');
    this.setState( {
      word: newChars});
  }

  render () {

    const chars = this.state.word.split('');
    let charlist = null;
    charlist = (
        chars.map((char, index) => {
          return <Char 
            letter={char}
            key={index}
            clicked={() => this.deleteCharHandler(index)}/>
        })
    );

    return (
      <div className="App">
        <input type="text" onChange={this.nameChangedHandler } value={this.state.word}/>
        <p>
          { this.state.word.length }
        </p>
        <Validation length={this.state.word.length} />
        { charlist }
      </div>
    );
  }
}

export default App;
