import FIREBASE_CONFIG from './firebase.credentials';
import * as firebase from 'firebase';
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

// Create a user Profile in firebase store;
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) {
        return;
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const userSnapshot = await userRef.get();
    
    // User does not exist in Firestore.
    if (!userSnapshot.exists) {
        const { displayName , email } = userAuth;
        const createAt = new Date();

        try {
            await userRef.set({
                displayName, 
                email,
                createAt,
                ...additionalData
            })
        }   
        catch (error) {
            console.error('error creating user: ', error.message);
        }
    }

    return userRef;
}

export default firebase;
