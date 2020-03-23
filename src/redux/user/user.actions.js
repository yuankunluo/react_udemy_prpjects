import  UserActionTypes  from './user.types';

export const setCurrentUser = user  => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})

// ------------- Google Sign In -----------------
export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START
});


// -------------- Email Sign In -------------------
export const emailSignInStart = (emailAndPassword) => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
});

// ---------------- Sign In Results ---------------
export const signInSuccess = (user) => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user
});

export const signInFailure = (error) => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: error
});