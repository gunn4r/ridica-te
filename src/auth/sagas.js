import { call, fork, put, take, takeEvery, takeLatest, all } from 'redux-saga/effects'
import { startsWith } from 'lodash'
import { parseFirebaseUserData } from './utils'
import {
  types,
  loginFirebaseRequest,
  loginFirebaseComplete,
  logoutFirebaseRequest,
  logoutFirebaseComplete,
  syncUserData,
} from './actions'

import { rsf, googleAuthProvider } from './firebaseConfig'


// Utilizies a redux-saga channel to communicate actions from the Firebase auth watcher.
// Dispatches the syncUser action anytime Firebase auth watcher emits a change in auth.
// export function* handleFirebaseAuthentication() {
//   const channel = yield call(rsf.auth.channel)

//   while (true) { // eslint-disable-line no-constant-condition
//     try {
//       const { error, user } = yield take(channel)
//       if (error) throw new Error('ERROR IN syncUser SAGA!', error)

 
//       // Depending on whether we have a Firebase user or not run the appropriate saga to handle it.
//       if (user) {
//         const parsedFirebaseUser = yield call(parseFirebaseUserData, user)
//         yield put(syncUserData({ ...parsedFirebaseUser }))
//       } else {
//         yield put(syncUserData(null))
//       }
//     } catch (err) {
//       console.error('ERROR SYNCING USER DATA GLOBAL STATE!', err)
//     }
//   }
// }

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
    const data = yield call(rsf.auth.signInWithPopup, googleAuthProvider)
    console.log('LOGIN SUCCESS: ', data)
    yield put(loginFirebaseComplete({ data }));
  }
  catch(error) {
    console.log('LOGIN ERROR: ', error)
    yield put(loginFirebaseComplete({ error }));
  }
}

export default function* authFirebaseSaga() {
  yield all([
    // fork(handleFirebaseAuthentication),
    takeEvery(types.FIREBASE.LOGIN.REQUEST, loginSaga),
    takeEvery(types.FIREBASE.LOGOUT.REQUEST, logoutSaga),
  ])
}
