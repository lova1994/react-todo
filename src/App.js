import React, {Component} from 'react';
import logo from './logo.svg';
import Todos from './components/Todos';
import './App.css';

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'Eat',
        completed: false
      },
      {
        id: 2,
        title: 'Sleep',
        completed: false
      },
      {
        id: 3,
        title: 'Code',
        completed: false
      },
      {
        id: 4,
        title: 'Repeat',
        completed: false
      },
    ]
  }
  render (){

    console.log(this.state.todos)
    return (
    <div className="App">
 <Todos todos={this.state.todos} />
    </div>
    );
}
}

export default App;
