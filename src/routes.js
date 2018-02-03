import Login from './components/Login'
import Standup from './components/Standup'
import Profile from './components/Profile'

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
]

export default routes
