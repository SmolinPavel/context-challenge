import React, { Component } from 'react';
import './App.css';

import Context from './context/Solution';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Context />
      </div>
    );
  }
}

export default App;
