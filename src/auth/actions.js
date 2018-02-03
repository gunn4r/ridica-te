const prefix = 'auth'

export const types = {
  FIREBASE: {
    LOGIN: {
      REQUEST: `${prefix}/FIREBASE.LOGIN.REQUEST`,
      COMPLETE: `${prefix}/FIREBASE.LOGIN.COMPLETE`,
    },
    LOGOUT: {
      REQUEST: `${prefix}/FIREBASE.LOGOUT.REQUEST`,
      COMPLETE: `${prefix}/FIREBASE.LOGOUT.COMPLETE`,
    },
  },
  SYNC: {
    USER: `${prefix}/SYNC.USER`,
  },
}

export const loginFirebaseRequest = () => ({
  type: types.FIREBASE.LOGIN.REQUEST,
})

export const loginFirebaseComplete = (result) => ({
  type: types.FIREBASE.LOGIN.COMPLETE,
  result,
})

export const logoutFirebaseRequest = () => ({
  type: types.FIREBASE.LOGOUT.REQUEST,
})

export const logoutFirebaseComplete = (result) => ({
  type: types.FIREBASE.LOGOUT.COMPLETE,
  result,
})

export const syncUserData = (user) => ({
  type: types.SYNC.USER,
  user,
})
