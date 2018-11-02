import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import routes from './route';
import './App.css';
import Header from './component/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
      
      <Header />

      { routes }

      </div>
    );
  }
}

export default App;
