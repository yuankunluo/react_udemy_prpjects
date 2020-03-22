// import FIREBASE_CONFIG from './firebase.credentials';
import * as firebase from 'firebase';

// TODO: please watch out to handle this configuration
// in more secure way. 
const  FIREBASE_CONFIG = {
    apiKey: "AIzaSyCp37s25EceuEEhb4ysMLK7JlzoTppblwU",
    authDomain: "crwn-clothing-shop-b16f4.firebaseapp.com",
    databaseURL: "https://crwn-clothing-shop-b16f4.firebaseio.com",
    projectId: "crwn-clothing-shop-b16f4",
    storageBucket: "crwn-clothing-shop-b16f4.appspot.com",
    messagingSenderId: "623496138143",
    appId: "1:623496138143:web:d30b38c39b75710bd781aa",
    measurementId: "G-5PHG8DDH3Z"
  };

// Init Firebase service.
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

// Add Documents to Firebase.
export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    objectToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    })
    // Firebase call.
    return await batch.commit();
}


export default firebase;
