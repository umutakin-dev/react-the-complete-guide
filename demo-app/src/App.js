import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: "0001", name: 'umut', age: 35 },
      { id: "0002", name: 'gigi', age: 35 },
      { id: "0003", name: 'memo', age: 34 }
    ],
    otherState: 'some other value',
    showPersons: false
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

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]; // spread operator, more modern
    persons.splice(personIndex, 1);
    this.setState( {
      persons: persons});
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
          { this.state.persons.map((person, index) => {
            return <Person
              key={person.id}
              click={() => this.deletePersonHandler(index)}
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