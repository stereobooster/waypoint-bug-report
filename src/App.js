import React, { Component } from 'react';
import './App.css';

import Card from './Card.js';

const range = (s) => Array.apply(null, Array(s)).map((_, i) => i )

class App extends Component {
  componentDidMount() {
    this.currentValue = -1;
    this.handleScroll = () => {
      let st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > this.lastScrollTop){
        this.scrollDirection = false; //'down';
      } else {
        this.scrollDirection = true; //'up';
      }
      this.lastScrollTop = st;
    }
    window.addEventListener('scroll', this.handleScroll, {passive: true})
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, {passive: true});
  }

  render() {
    return (
      <div className="App">
        { range(20).map((i) => <Card key={i} number={i} onEnter={ (x) => console.log(this.currentValue = this.scrollDirection ? Math.min(x, this.currentValue) : Math.max(x, this.currentValue)) } /> ) }
      </div>
    );
  }
}

export default App;
