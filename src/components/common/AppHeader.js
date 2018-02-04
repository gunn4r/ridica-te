import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import Avatar from 'material-ui/Avatar'
import Menu, { MenuItem } from 'material-ui/Menu'
import AccountCircle from 'material-ui-icons/AccountCircle'

import LoginButton from '../Login/LoginButton'
import LogoutButton from '../Login/LogoutButton'

const styles = (theme) => ({
  root: {
    width: '100%',
  },
  flex: {
    marginRight: 'auto',
  },
  menu: {
    width: '100%',
  },
  avatar: {
    textTransform: 'uppercase',
    marginRight: theme.spacing.unit,
    height: 30,
    width: 30,
    fontSize: theme.spacing.unit * 1.5,
  },
})

class AppHeader extends React.Component {
  state = { anchorEl: null }

  getAvatar = (photoURL, displayName) => {
    if (photoURL) {
      return <Avatar alt={displayName || 'Avatar'} src={photoURL} className={this.props.classes.avatar} />
    }
    if (displayName) {
      const split = displayName.split(' ')
      const initials = split.length > 1 ? [split[0][0], split[split.length - 1][0]].join('') : split[0][0]
      return <Avatar className={this.props.classes.avatar}>{initials}</Avatar>
    }
    return <AccountCircle className={this.props.classes.avatar} />
  }

  handleMenu = (event) => { this.setState({ anchorEl: event.currentTarget }) }
  handleClose = () => { this.setState({ anchorEl: null }) }

  render() {
    const { classes, auth: { displayName, email, photoURL, isLoggedIn } } = this.props
    const { anchorEl } = this.state
    const open = Boolean(anchorEl)
    const avatar = this.getAvatar(photoURL, displayName)

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography type="title" color="inherit" className={classes.flex}>
              RIDICA-Te
            </Typography>
            {isLoggedIn ?
              <div>
                <Button
                  aria-owns={open ? 'user-menu' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                  className={classes.button}
                  size="small"
                >
                  { avatar }
                  {displayName || email || ''}
                </Button>
                <Menu
                  id="user-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={this.handleClose}
                  className={classes.menu}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <LogoutButton onClick={this.handleClose} />
                </Menu>
              </div>
              :
              <LoginButton />
            }
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

AppHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  auth: PropTypes.object,
}

AppHeader.defaultProps = {
  auth: null,
}

export default withStyles(styles)(AppHeader)
