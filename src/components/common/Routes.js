// import React from 'react'
// import PropTypes from 'prop-types'
// import { Route } from 'react-router-dom'
// import { map } from 'lodash'
// import PrivateRoute from './PrivateRoute'

// export default function Routes({ routes, isLoggedIn }) {
//   return map(routes, (route, index) => {
//     const { component: Component } = route
//     return route.isPrivate ?
//       <PrivateRoute
//         isLoggedIn={isLoggedIn}
//         exact={route.exact}
//         path={route.path}
//         component={Component}
//         key={index}
//       />
//       :
//       <Route
//         exact={route.exact}
//         path={route.path}
//         render={(props) => (<Component {...props} isLoggedIn={isLoggedIn} />)}
//         key={index}
//       />
//   })
// }

// Routes.propTypes = {
//   isLoggedIn: PropTypes.bool.isRequired,
//   routes: PropTypes.array,
// }

// Routes.defaultProps = {
//   routes: [],
// }
