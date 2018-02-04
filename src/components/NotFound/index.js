import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import blackhole from '../../assets/blackhole.jpg'
import cromulon from '../../assets/cromulon.png'

const styles = (theme) => ({
  '@keyframes blackhole': {
    from: { transform: 'translate(-50%, -50%) rotate(0deg)' },
    to: { transform: 'translate(-50%, -50%) rotate(360deg)' },
  },
  '@keyframes showmewhatyougottext': {
    from: { opacity: 0, bottom: '-20px' },
    to: { opacity: 1, bottom: '200px' },
  },
  '@keyframes showmewhatyougottextsm': {
    from: { opacity: 0, bottom: '-20px' },
    to: { opacity: 1, bottom: '20px' },
  },
  '@keyframes showmewhatyougotimg': {
    from: { opacity: 0, bottom: '-250px' },
    to: { opacity: 1, bottom: '20px' },
  },
  wrapper: {
    flex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bhImg: {
    position: 'absolute',
    height: '3000px',
    top: '50%',
    left: '50%',
    transformOrigin: 'center center',
    transformStyle: 'preserve-3D',
    animation: 'blackhole 30s infinite linear',
    zIndex: -1,
  },
  text: {
    fontSize: '3rem',
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  showmetext: {
    animation: 'showmewhatyougottext 1s ease-in forwards',
    animationDelay: '2s',
    opacity: 0,
    position: 'absolute',
    bottom: '-20px',
    left: '200px',
    zIndex: 10,
    transform: 'rotate(-20deg)',
    fontSize: '1.5rem',
    lineHeight: 1.25,
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      left: '10px',
      animation: 'showmewhatyougottextsm 1s ease-in forwards',
      animationDelay: '2s',
      transform: 'none',
    },
  },
  showmeimg: {
    animation: 'showmewhatyougotimg 1.5s ease-in forwards',
    animationDelay: '1.5s',
    position: 'absolute',
    left: '30px',
    height: '250px',
    bottom: '-250px',
    transform: 'rotate(-20deg)',
  },
  showmelink: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    display: 'block',
  },
})

const NotFound = ({ classes: { wrapper, bhImg, showmetext, text, showmeimg, showmelink } }) => (
  <div className={wrapper}>
    <img src={blackhole} alt="Are you lost??" className={bhImg} />
    <Typography className={text} align="center">
      ARE YOU LOST???<br />
      <span className={showmetext}>SHOW ME WHAT YOU GOT!!! <Link to="/" className={showmelink}>DISQUALIFIED!!!</Link></span>
      <img src={cromulon} alt="SHOW ME WHAT YOU GOTT!!!!" className={showmeimg} />
    </Typography>
  </div>
)

NotFound.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(NotFound)
