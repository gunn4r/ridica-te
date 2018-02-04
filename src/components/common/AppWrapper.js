import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'
import Reboot from 'material-ui/Reboot'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import AppHeader from './AppHeader'
import renderRoutes from './Routes'
import routes from '../../routes'

// import florinRidicate from '../../assets/audio/florin-ridicate.wav'

const styles = {
  appWrapper: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
  },
}

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
    const { auth: { isLoading, isLoggedIn }, classes } = this.props

    if (isLoading) return <div>Loading</div>

    return (
      <React.Fragment>
        <Reboot />
        <Router>
          <div className={classes.appWrapper}>
            <AppHeader auth={this.props.auth} />
            <Switch>
              {renderRoutes({ routes, isLoggedIn })}
            </Switch>
          </div>
        </Router>
      </React.Fragment>
    )
  }
}

AppWrapper.propTypes = {
  auth: PropTypes.object,
  classes: PropTypes.object.isRequired,
}

AppWrapper.defaultProps = {
  auth: null,
}

const mapStateToProps = ({ auth }) => ({ auth })
export default connect(mapStateToProps)(withStyles(styles)(AppWrapper))
