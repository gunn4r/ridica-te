import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import AccountCircle from 'material-ui-icons/AccountCircle'
import Switch from 'material-ui/Switch'
import { FormControlLabel, FormGroup } from 'material-ui/Form'
import Menu, { MenuItem } from 'material-ui/Menu'

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
}

class GlobalHeader extends React.Component {
  state = {
    anchorEl: null,
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  render() {
    const { classes } = this.props
    const { anchorEl } = this.state
    const open = Boolean(anchorEl)

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
              RIDICA-Te
            </Typography>
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
              </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

GlobalHeader.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(GlobalHeader)

// import React from 'react'
// import PropTypes from 'prop-types'
// import { map } from 'lodash'
// import { NavLink } from 'react-router-dom'
// import styled from 'styled-components'
// import logo from '@tcn/bootstrap-theme/dist/images/tcn-logo-main-02-tcnpri1.svg'
// import routes from '../routes'

// const Brand = styled(NavLink)`
//   color: #395578!important
//   margin-right: 2rem
// `

// const TCNLogo = styled.img`
//   margin-top: 3px
// `


// export default class GlobalHeader extends React.Component {
//   render() {
//     const { loggedIn, userFullName, userAvatar, logoutAuth0Request } = this.props

//     return (
//       <div className="container-fluid mx-0 global-head">
//         <nav className="row navbar navbar-expand-sm navbar-light bg-light">
//           <Brand className="navbar-brand align-top" to={'/'}>
//             <TCNLogo src={logo} width="55" className="d-inline-block align-top tcn-logo" alt="TCN Logo" />
//           </Brand>

//           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#top-nav" aria-controls="top-nav" aria-expanded="false" aria-label="Toggle Navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           <div className="collapse navbar-collapse" id="top-nav">
//             {loggedIn &&
//               <ul className="navbar-nav mr-auto">
//                 {/* MAIN NAVIGATION */}
//                 { // Map over the routes... only output links for ones with labels.
//                   map(routes, (route) => (route.label ?
//                     <li className="nav-item" key={`nav-${route.path}`}>
//                       <NavLink to={route.path} className="nav-link" activeClassName="active">{route.label}</NavLink>
//                     </li>
//                     :
//                     null
//                   ))
//                 }
//               </ul>
//             }

//             {loggedIn &&
//               <ul className="navbar-nav" style={{ alignItems: 'center' }}>
//               <button className="dropdown-item btn" tabIndex={0} type="button" onClick={logoutAuth0Request}>
//                 <span className="glyphicons glyphicons-log-out"></span> Logout
//                 </button>
            
//                 <Dropdown
//                   alignRight
//                   trigger={
//                     <li className="nav-item">
//                       <span className="nav-link" style={{ cursor: 'default' }}>
//                         <img src={userAvatar} className="rounded-circle mr-2" style={{ height: '2rem' }} alt={userFullName} />
//                         { userFullName } <span className="glyphicons glyphicons-chevron-down"></span>
//                       </span>
//                     </li>
//                   }
//                 >
                  
//                 </Dropdown>
//               </ul>
//             }

//             {!loggedIn &&
//               <ul className="navbar-nav ml-auto">
//                 <li className="nav-item">
//                   <a className="btn btn-primary" href="/login"><span className="glyphicons glyphicons-log-in"></span> Login</a>
//                 </li>
//               </ul>
//             }

//           </div>
//         </nav>
//       </div>
//     )
//   }
// }

// GlobalHeader.propTypes = {
//   loggedIn: PropTypes.bool.isRequired,
//   userFullName: PropTypes.string,
//   userAvatar: PropTypes.string,
//   logoutAuth0Request: PropTypes.func.isRequired,
// }

// GlobalHeader.defaultProps = {
//   userFullName: null,
//   userAvatar: null,
// }
