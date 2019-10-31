import React from 'react';
import twitchlogo from './twitch-icon.svg'
import './App.css';

class NavBar extends React.Component {
  render() {
      return (
          <div>
              <ul id="nav">
                <li><img src={twitchlogo} className="twitch-logo" alt="twitch-logo" /> Search Twitch Games</li>
              </ul>
          </div>
      )

  }
}

function App() {
  return (
    <div className="App">
      <div className="NavBar">
        <NavBar/>
      </div>
      <header className="App-header">
        <img src={twitchlogo} className="twitch-logo" alt="twitch-logo" />
        <p>
            Search for your favorite games in the search box below.
            Click on their name to find out more info about them. 
        </p>
        <p>
          :monkaS
        </p>
      </header>
      <body>
        <div className="SearchText">
          <b>Search: </b>
          <input
            type="text" 
          />
        </div>
       
        {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a> */}

      </body>
    </div>
  );
}

export default App;
