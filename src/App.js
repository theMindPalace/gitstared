import React, { Component } from 'react';

import Gitstarlist from './components/Gitstarlist';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
          <header>
            <h2>gitstared</h2>
          </header>

          <div className="main">
          <Gitstarlist/>
          </div>

          	

      </div>
    );
  }
}

export default App;
