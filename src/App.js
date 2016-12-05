import React, { Component } from 'react';

import Gitstarlist from './components/Gitstarlist';



import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h3> Gitstared</h3>
          <Gitstarlist/>
      </div>
    );
  }
}

export default App;
