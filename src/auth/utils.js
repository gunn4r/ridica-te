export const parseFirebaseUserData = (firebaseUser, orgId) => {
  if (!firebaseUser || !orgId) {
    console.log('Cannot get user data. Invalid or no user provided.')
    return null
  }

  try {
    return {
      firebaseUser: firebaseUser.toJSON(),
    }
  } catch (err) {
    throw new Error('ERROR PARSING USER DATA!', err)
  }
}
