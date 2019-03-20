import React, { Component } from 'react';
import NavBar from './components/NavBar'
import ShowList from './components/ShowList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar>  </NavBar>
        <ShowList> </ShowList>
      </div>
    );
  }
}

export default App;
