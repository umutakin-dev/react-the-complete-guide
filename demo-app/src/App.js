import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'umut', age: 35 },
      { name: 'gigi', age: 35 },
      { name: 'memo', age: 34 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState( {
      persons: [
        { name: newName, age: 35 },
        { name: 'gigi', age: 35 },
        { name: 'memo', age: 34 }
      ]
    })
  }

  nameChangeHandler = ( event ) => {
    this.setState( {
      persons: [
        { name: 'umut', age: 35 },
        { name: event.target.value, age: 35 },
        { name: 'memo', age: 34 }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render () {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          { this.state.persons.map(person => {
            return <Person 
              name={person.name} 
              age={person.age}/>
          }) }
        </div>
      );
    }

    return(
      <div className="App">
        <h1>hi, i am a react app</h1>
        <p>this is really working</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        { persons }
      </div>
    );
  }
}

export default App;