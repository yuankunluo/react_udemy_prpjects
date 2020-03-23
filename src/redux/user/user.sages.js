import { takeLatest, put , all, call} from 'redux-saga/effects';

// User Action Types;
import UserActionTypes from './user.types';
import { 
    signInSuccess, signInFailure
 } from './user.actions';
// Firebase Utils.
import { auth, gAuthProvider, createUserProfileDocument } from '../../firebase/firebase.utils';


export function* getUserSnapshotFromAuth(userAuth) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({
            id: userSnapshot.id, 
            ...userSnapshot.data()
        }));
    } catch(error){
        yield put(signInFailure(error))
    }
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

// ------------ sagas --------------
export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart)
    ])
}