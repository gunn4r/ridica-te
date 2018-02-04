import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { map } from 'lodash'

export const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => {
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


const renderRoutes = ({ routes, isLoggedIn }) => map(routes, (route, index) => {
  const { component: Component } = route
  return route.isPrivate ?
    <PrivateRoute
      isLoggedIn={isLoggedIn}
      exact={route.exact}
      path={route.path}
      component={Component}
      key={index}
    />
    :
    <Route
      exact={route.exact}
      path={route.path}
      render={(props) => (<Component {...props} />)}
      key={index}
    />
})

renderRoutes.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  routes: PropTypes.array,
}

renderRoutes.defaultProps = {
  routes: [],
  notFound: null,
}

export default renderRoutes
