import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { withStyles } from 'material-ui/styles'
import { Fade } from 'material-ui/transitions'

const styles = {
  wrapper: {
    backgroundImage: 'url("https://source.unsplash.com/random/1920x1080")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    flex: 1,
  },
}

class Login extends React.Component {
  state = { quote: null }
  async componentDidMount() {
    const { data: quote } = await axios.get('https://talaikis.com/api/quotes/random/')
    this.setState({ quote })
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.wrapper}>
        {this.state.quote &&
        <Fade in timeout={2000}>
          <div>
            {this.state.quote.quote} - {this.state.quote.author}
          </div>
        </Fade>
        }
      </div>
    )
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
}


export default withStyles(styles)(Login)
