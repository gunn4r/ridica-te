import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Reboot from 'material-ui/Reboot'
// import { BrowserRouter as Router } from 'react-router-dom'

import GlobalHeader from './GlobalHeader'
// import LoadingOverlay from './LoadingOverlay'
import Standup from '../Standup'
import Login from '../Login'
import Routes from './Routes'
import routes from '../../routes'

import florinRidicate from '../../assets/audio/florin-ridicate.wav'

class AppWrapper extends React.PureComponent {
  
  componentDidMount() {
    // const msg = new window.SpeechSynthesisUtterance();
    // const voices = window.speechSynthesis.getVoices();
    // msg.voice = voices[12]; // Note: some voices don't support altering params
    // msg.voiceURI = 'native';
    // msg.text = 'ridica-te';
    // msg.lang = 'ro-RO';

    // setTimeout(() => {
    //   //window.speechSynthesis.speak(msg);
    //   this.audioElm.play()
    // }, 1000)

  }

  render() {
    const { isLoading } = this.props

    // if (isLoading) return <div>Loading</div> //<LoadingOverlay />

    // return (
    //   <Router>
    //     <div>
    //       <Routes routes={routes} isLoggedIn={isLoggedIn} />
    //     </div>
    //   </Router>
    // )
    return(
      <React.Fragment>
        <Reboot />
        <GlobalHeader />
        <Standup />
        <Login />
      </React.Fragment>
    )
  }
}

AppWrapper.propTypes = {
  isLoading: PropTypes.bool.isRequired,
}

AppWrapper.defaultProps = {
  name: null,
  picture: null,
}

const mapStateToProps = ({ auth: { isLoading, isLoggedIn } }) => ({ isLoading, isLoggedIn })

export default connect(mapStateToProps)(AppWrapper)
