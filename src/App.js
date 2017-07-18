import React, { Component } from 'react';
import './App.css';

import Card from './Card.js';

const range = (s) => Array.apply(null, Array(s)).map((_, i) => i )

class App extends Component {
  render() {
    return (
      <div className="App">
        { range(20).map((i) => <Card key={i} number={i} onEnter={ (x) => console.log(x) } /> ) }
      </div>
    );
  }
}

export default App;
