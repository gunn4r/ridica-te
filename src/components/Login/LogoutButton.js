import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import noop from 'lodash/noop'
import { MenuItem } from 'material-ui/Menu'
import { logoutFirebaseRequest } from '../../auth/actions'

const LogoutButton = (props) => (
  <MenuItem onClick={() => { props.onClick(); props.logoutFirebaseRequest() }}>Logout</MenuItem>
)


LogoutButton.propTypes = {
  logoutFirebaseRequest: PropTypes.func.isRequired,
  onClick: PropTypes.func,
}

LogoutButton.defaultProps = {
  onClick: noop,
}

// const mapStateToProps = ({ auth: { isLoading, isLoggedIn } }) => ({ isLoading, isLoggedIn })
const mapDispatchToProps = (dispatch) => bindActionCreators({ logoutFirebaseRequest }, dispatch)
export default connect(null, mapDispatchToProps)(LogoutButton)
