import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Button from 'material-ui/Button'
import { loginFirebaseRequest } from '../../auth/actions'

const LoginButton = (props) => (
  <Button
    onClick={props.loginFirebaseRequest}
    color="inherit"
    size="small"
  >
    Log In
  </Button>
)


LoginButton.propTypes = {
  loginFirebaseRequest: PropTypes.func.isRequired,
}

// const mapStateToProps = ({ auth: { isLoading, isLoggedIn } }) => ({ isLoading, isLoggedIn })
const mapDispatchToProps = (dispatch) => bindActionCreators({ loginFirebaseRequest }, dispatch)
export default connect(null, mapDispatchToProps)(LoginButton)
