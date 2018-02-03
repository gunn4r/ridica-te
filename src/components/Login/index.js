import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loginFirebaseRequest } from '../../auth/actions'

class Login extends React.PureComponent {
    render() {
        return (
            <div>
                <button onClick={this.props.loginFirebaseRequest}>Login to Google Yo</button>
            </div>
        )
    }
}

Login.propTypes = {
    loginFirebaseRequest: PropTypes.func.isRequired,
}

// const mapStateToProps = ({ auth: { isLoading, isLoggedIn } }) => ({ isLoading, isLoggedIn })
const mapDispatchToProps = (dispatch) => bindActionCreators({ loginFirebaseRequest }, dispatch)
export default connect(null, mapDispatchToProps)(Login)
