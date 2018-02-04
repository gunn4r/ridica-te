import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import { LinearProgress } from 'material-ui/Progress';

const loaderText = 'Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It’s not a story the Jedi would tell you. It’s a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life… He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful… the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic. He could save others from death, but not himself.'.split(' ')

// const loaderText = [
//   'Are you bready for this?',
//   'Setting stuff up...',
//   '...but not really.',
//   'DILLY DILLY',
//   'Yawnnnnn',
//   'Did you leave your stove on?',
//   'Jenna is a QT pie.',
//   'CUURRSEEE YOUUUUUUUUU, TIIIIMMMM COOOOOOOOOOOOKKKK!!!!!!!',
//   'RIDICA-TTTEEEEEEEE!!!!',
//   'Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It’s not a story the Jedi would tell you. It’s a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life… He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful… the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic. He could save others from death, but not himself.',
// ]

const styles = (theme) => ({
  loaderWrapper: {
    backgroundColor: 'rgba(0,0,0,.4)',
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderInner: {
    width: '100%',
    color: theme.palette.common.white,
  },
  loaderText: {
    padding: theme.spacing.unit * 2,
  },
})

class Loader extends React.Component {
  constructor(props) {
    super(props)
    this.delay = 150
    this.timeout = null
    this.state = { index: 0 }
  }

  componentDidMount() {
    this.timeout = setTimeout(this.handleTimeout, this.delay)
  }

  componentWillUnmount() {
    window.clearTimeout(this.timeout)
  }

  handleTimeout = () => {
    this.setState(
      (prevState) => ({ index: prevState.index >= loaderText.length - 1 ? 0 : prevState.index + 1 }),
      () => { this.timeout = setTimeout(this.handleTimeout, this.delay) }
    )
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.loaderWrapper}>
        <div className={classes.loaderInner}>
          <Typography color="inherit" type="subheading" align="center" gutterBottom className={classes.loaderText}>
            {loaderText[this.state.index]}
          </Typography>
          <LinearProgress mode="query" />
        </div>
      </div>
    )
  }
}

Loader.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Loader)
