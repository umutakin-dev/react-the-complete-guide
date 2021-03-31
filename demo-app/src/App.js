//import React, { Component } from 'react';
import React, { useState } from 'react';
import './App.css';

import Person from './Person/Person';

//class App extends Component {
const App = props => {

  // state = {
  //   persons: [
  //     { name: 'umut', age: 35 },
  //     { name: 'gigi', age: 34 },
  //     { name: 'memo', age: 34 }
  //   ],
  //   otherState: 'some other state'
  // }

  // switchNameHandler = () => {
  //   //console.log('was clicked');
  //   // DONT DO THIS! this.state.persons[0].name = 'umut akin';
  //   this.setState({
  //     persons: [
  //       { name: 'umut akin', age: 35 },
  //       { name: 'gigi', age: 34 },
  //       { name: 'memo', age: 37 }
  //     ] 
  //   })
  // }

  // render() {
  //   return (
  //     <div className="App">
  //       <h1>hi, i am a react app</h1>
  //       <p>this is really working</p>
  //       <button onClick={this.switchNameHandler}>Switch Name</button>
  //       <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
  //       <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >My Hobbies: Racing</Person>
  //       <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
  //     </div>
  //   );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'does this work now?'));

  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'umut', age: 35 },
      { name: 'gigi', age: 34 },
      { name: 'memo', age: 34 }
    ]
    //otherState: 'some other state'
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = (newName) => {
    //console.log('was clicked');
    // DONT DO THIS! this.state.persons[0].name = 'umut akin';
    setPersonsState({
      persons: [
        { name: newName, age: 35 },
        { name: 'gigi', age: 34 },
        { name: 'memo', age: 34 }
      ]
      //otherState: personsState.otherState 
    });
  }

  const nameChangeHandler = (event) => {
    setPersonsState({
      persons: [
        { name: 'umut', age: 35 },
        { name: event.target.value, age: 34 },
        { name: 'memo', age: 34 }
      ] 
    });
  }

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  return (
    <div className="App">
      <h1>hi, i am a react app</h1>
      <p>this is really working</p>
      <button 
        style={style}
        onClick={() => switchNameHandler('umut akin')}>Switch Name</button>
      <Person 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age} />
      <Person 
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age}
        click={switchNameHandler.bind(this, 'ydranthantalus')} 
        changed={nameChangeHandler} >
          My Hobbies: Racing
      </Person>
      <Person 
        name={personsState.persons[2].name} 
        age={personsState.persons[2].age} />
    </div>
  );
}

export default App;