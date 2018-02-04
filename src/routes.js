import Login from './components/Login'
import Standup from './components/Standup'
import Profile from './components/Profile'
import NotFound from './components/NotFound'

const routes = [
  {
    path: '/',
    exact: true,
    component: Standup,
    isPrivate: true,
  },
  {
    path: '/login',
    component: Login,
    label: 'Login',
    isPrivate: false,
  },
  {
    path: '/profile',
    component: Profile,
    label: 'Profile',
    isPrivate: true,
  },
  {
    component: NotFound,
  }
]

export default routes
