import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount(){
    fetch("http://api.repo.nypl.org/api/v1/items/search?q=book&publicDomainOnly=true", {
      mode: 'no-cors',
      headers: {
        Accept: 'application/json',
        Authorization: 'Token ' + '4kxcerb9sm8uqqx4'
      }
    })
    // .then(response => response.text())
    .then(response => console.log(response))

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
