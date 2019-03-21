import React, { Component } from 'react';
import NavBar from './components/NavBar'
import ShowNav from './components/ShowNav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar>  </NavBar>
       
        <ShowNav> </ShowNav>
      </div>
    );
  }
}

export default App;
