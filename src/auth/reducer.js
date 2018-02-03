import { types } from './actions'

const initialState = {
  isLoading: true,
  permissions: [],
  firebasePath: null,
  firebaseRef: null,
  idToken: null,
  name: null,
  picture: null,
  email: null,
}

export default function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.FIREBASE.LOGIN.REQUEST:
      return {
        ...state,

      }
    case types.FIREBASE.LOGOUT.REQUEST:
      return {
        ...state,
        isLoading: true,
      }

    case types.FIREBASE.LOGOUT.COMPLETE:
      return {
        ...state,
        isLoading: false,
      }

    case types.SYNC.USER:
      return {
        ...state,
        isLoggedIn: action.user != null,
        isLoading: false,
        ...action.user,
      }

    default:
      return state
  }
}
