import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import { Fade } from 'material-ui/transitions'
import Typography from 'material-ui/Typography'
import Loader from '../common/Loader'

const styles = (theme) => ({
  wrapper: {
    backgroundImage: 'url("https://source.unsplash.com/random/3840x2160")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    flex: 1,
    color: theme.palette.common.white,
  },
  quoteBox: {
    padding: theme.spacing.unit * 8,
    marginTop: theme.spacing.unit * 20,
    marginLeft: theme.spacing.unit * 10,
    backgroundColor: 'rgba(0,0,0,.4)',
    display: 'inline-block',
    maxWidth: 700,
    boxShadow: '2px 2px 40px 0 rgba(0,0,0,.3)',
    borderRadius: '20px',
  },
  disclaimer: {
    padding: theme.spacing.unit,
    backgroundColor: 'rgba(0,0,0,.5)',
    position: 'absolute',
    bottom: 0,
    left: 0,
    fontSize: '.8rem',
    width: '100%',
    opacity: 0.5,
  },
  link: {
    color: theme.palette.common.white,
  },
})

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = { quote: null, bgImageLoaded: false }
    this.bgImage = new Image()
  }

  async componentDidMount() {
    if (this.props.isLoggedIn) return
    const { data: quote } = await axios.get('https://talaikis.com/api/quotes/random/')
    this.bgImage.onload = () => { this.setState({ bgImageLoaded: true }) }
    this.bgImage.src = `https://source.unsplash.com/random/1920x1080/?${quote.cat}`
    this.setState({ quote })
  }

  render() {
    const { classes, isLoggedIn } = this.props
    if (isLoggedIn) return <Redirect to="/" />
    if (!this.state.quote || !this.state.bgImageLoaded) return <Loader />

    return (
      <Fade in timeout={3000}>
        <div className={classes.wrapper} style={{ backgroundImage: `url("${this.bgImage.src}")` }}>
          <Typography type="headline" color="inherit" className={classes.quoteBox}>
            {this.state.quote.quote} <br /><em>-{this.state.quote.author}</em>
          </Typography>
          <Typography type="caption" color="inherit" align="center" className={classes.disclaimer}>
            Quotes and images are entirely random. Quotes are courtesy <a href="https://talaikis.com/" target="_blank" className={classes.link} rel="noopener noreferrer">https://talaikis.com/</a>. Images are courtsey <a href="http://unsplash.com" target="_blank" className={classes.link} rel="noopener noreferrer">http://unsplash.com</a>.
          </Typography>
        </div>
      </Fade>
    )
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  isLoggedIn: PropTypes.bool,
}

Login.defaultProps = {
  isLoggedIn: false,
}

export default withStyles(styles)(Login)
