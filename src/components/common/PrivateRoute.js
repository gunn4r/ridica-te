import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => {
  const RenderComponent = (props) => (isLoggedIn ?
    <Component {...props} /> :
    <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
  )

  RenderComponent.propTypes = { location: PropTypes.string }
  RenderComponent.defaultProps = { location: '' }

  return (<Route {...rest} render={RenderComponent} />)
}

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
}

export default PrivateRoute
