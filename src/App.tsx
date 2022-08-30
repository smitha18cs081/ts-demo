import React from 'react';
import logo from './logo.svg';
import './App.css';
import { userInfo } from 'os';
import Demo from './Demo';

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">
        User is {user.name}
  </header>*/}
  <Demo/>
    </div>
  );
}

export default App;
