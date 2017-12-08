import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    const msg = new window.SpeechSynthesisUtterance();
    const voices = window.speechSynthesis.getVoices();
    msg.voice = voices[12]; // Note: some voices don't support altering params
    msg.voiceURI = 'native';
    msg.text = 'ridica-te';
    msg.lang = 'ro-RO';

    setTimeout(() => {
      window.speechSynthesis.speak(msg);
    }, 1000)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to RIDICA-TE</h1>
        </header>
        <p className="App-intro">
          YEHAW.
        </p>
      </div>
    );
  }
}

export default App;
