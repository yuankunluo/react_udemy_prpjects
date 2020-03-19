import * as firebase from 'firebase';
import FIREBASE_CONFIG from './firebase.credentials'

firebase.initializeApp(FIREBASE_CONFIG);

// Export auth, firestore.
export const auth = firebase.auth()
export const firestore = firebase.firestore();

// Setup Google Authentication utils.
const gAuthProvider = new firebase.auth.GoogleAuthProvider();
gAuthProvider.setCustomParameters({
    prompt : 'select_account'
});


export const signInWithGoogle = () => auth.signInWithPopup(gAuthProvider);

export default firebase;
