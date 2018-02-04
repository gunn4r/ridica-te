import { call, fork, put, take, takeEvery, all } from 'redux-saga/effects'
import pick from 'lodash/pick'
import get from 'lodash/get'
import {
  types,
  loginFirebaseComplete,
  logoutFirebaseComplete,
  syncUserData,
} from './actions'

import { rsf, googleAuthProvider } from './firebaseConfig'


// Utilizies a redux-saga channel to communicate actions from the Firebase auth watcher.
// Dispatches the syncUser action anytime Firebase auth watcher emits a change in auth.
export function* handleFirebaseAuthentication() {
  const channel = yield call(rsf.auth.channel)

  while (true) { // eslint-disable-line no-constant-condition
    try {
      const { error, user } = yield take(channel)
      if (error) console.error('Error in Firebase Auth Saga: ', error)


      // Depending on whether we have a Firebase user or not run the appropriate saga to handle it.
      if (user) {
        const parsedUser = pick(user, [
          'displayName',
          'email',
          'emailVerified',
          'isAnonymous',
          'phoneNumber',
          'photoURL',
          'uid',
        ])
        parsedUser.lastSignInTime = get(user, 'metadata.lastSignInTime')
        parsedUser.creationTime = get(user, 'metadata.creationTime')
        yield put(syncUserData(parsedUser))
      } else {
        console.log('NO USER FOUND', user)
        yield put(syncUserData(null))
      }
    } catch (err) {
      console.error('ERROR SYNCING USER DATA GLOBAL STATE!', err)
    }
  }
}

export function* logoutSaga() {
  try {
    const data = yield call(rsf.auth.signOut)
    console.log('LOGOUT SUCCESS: ', data)
    yield put(logoutFirebaseComplete({ data }))
  } catch (error) {
    console.error('ERROR LOGGING OUT OF FIREBASE! ', error)
    yield put(logoutFirebaseComplete({ error }))
  }
}


function* loginSaga() {
  try {
    const data = yield call(rsf.auth.signInWithRedirect, googleAuthProvider)
    console.log('LOGIN SUCCESS: ', data)
    yield put(loginFirebaseComplete({ data }));
  } catch (error) {
    console.log('LOGIN ERROR: ', error)
    yield put(loginFirebaseComplete({ error }));
  }
}

export default function* authFirebaseSaga() {
  yield all([
    fork(handleFirebaseAuthentication),
    takeEvery(types.FIREBASE.LOGIN.REQUEST, loginSaga),
    takeEvery(types.FIREBASE.LOGOUT.REQUEST, logoutSaga),
  ])
}
