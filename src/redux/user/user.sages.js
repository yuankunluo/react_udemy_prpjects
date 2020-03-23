import { takeLatest, put , all, call} from 'redux-saga/effects';

// User Action Types;
import UserActionTypes from './user.types';
import { 
    signInSuccess, signInFailure,
    signOutSuccess, signOutFailure, 
    singUpFailure, singUpSuccess
 } from './user.actions';
// Firebase Utils.
import { auth, gAuthProvider, 
    createUserProfileDocument, getCurrentUser
} from '../../firebase/firebase.utils';


export function* getUserSnapshotFromAuth(userAuth, additionalData) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({
            id: userSnapshot.id, 
            ...userSnapshot.data()
        }));
    } catch(error){
        yield put(signInFailure(error))
    }
}

export function* isUserAuthenticated(){
    try {
        const userAuth = yield getCurrentUser;
        if (!userAuth) return;
        yield getUserSnapshotFromAuth(userAuth);
    } catch (error) {
        yield put(signInFailure(error))
    }
}

// Check user session.
export function* onCheckUserSession(){
    yield takeLatest(
        UserActionTypes.CHECK_USER_SESSION, 
        isUserAuthenticated
    );
}


// Sign In With Google
export function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(gAuthProvider);
        yield getUserSnapshotFromAuth(user)
    } catch(error){
        yield put(signInFailure(error))
    }
}

export function* onGoogleSignInStart(){
    yield takeLatest(
        UserActionTypes.GOOGLE_SIGN_IN_START,
        signInWithGoogle
    );
}

export function* signInWithEmail({payload: {email, password}}) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getUserSnapshotFromAuth(user);
    }catch (error) {
        yield put(signInFailure(error));
    }
}

export function* onEmailSignInStart() {
    yield takeLatest(
        UserActionTypes.EMAIL_SIGN_IN_START,
        signInWithEmail
    )
}

export function* signOut(){
    try {
        yield auth.signOut();
        yield put(signOutSuccess())
    } catch(error) {
        yield put(signOutFailure(error))
    }
}

export function* onSignOutStart(){
    yield takeLatest(
        UserActionTypes.SIGN_OUT_START,
        signOut
    );
}
// ------------ Sign Up sagas --------------

export function* signUp({payload: {email, password , displayName}}){
    try {
        const {user} = yield auth.createUserWithEmailAndPassword(email, password);
        yield put(singUpSuccess({ user, additionalData: {displayName}}))
    } catch (error) {
        yield put(singUpFailure(error));
    }
}

export function* onSignUpStart(){
    yield takeLatest(
        UserActionTypes.SIGN_UP_START,
        signUp
    );
}


export function* singInAfterSignUp({payload: {user, additionalData}}){
    yield getUserSnapshotFromAuth(user, additionalData);
}

export function* onSignUpSuccess(){
    yield takeLatest(
        UserActionTypes.SIGN_UP_SUCCESS,
        singInAfterSignUp
    );
}


// ------------ sagas --------------
export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(isUserAuthenticated),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess)
    ])
}