import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import florinRidicate from './audio/florin-ridicate.wav'

class App extends Component {
  componentDidMount() {
    // const msg = new window.SpeechSynthesisUtterance();
    // const voices = window.speechSynthesis.getVoices();
    // msg.voice = voices[12]; // Note: some voices don't support altering params
    // msg.voiceURI = 'native';
    // msg.text = 'ridica-te';
    // msg.lang = 'ro-RO';

    setTimeout(() => {
      //window.speechSynthesis.speak(msg);
      this.audioElm.play()
    }, 1000)

  }

  render() {
    return (
      <div className="App">
        <audio controls autoplay style={{ display: 'none' }} ref={(audioElm) => { this.audioElm = audioElm }}>
          <source src={florinRidicate} type="audio/wav" />
        </audio>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to RIDICA-TE</h1>
        </header>
        <div className="App-intro" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
        <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
        <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
        <p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.</p>
        <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p>        </div>
      </div>
    );
  }
}

export default App;
