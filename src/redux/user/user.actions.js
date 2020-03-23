import  UserActionTypes  from './user.types';

export const setCurrentUser = user  => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})

export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION
});

// ------------- Google Sign In -----------------
export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START
});


// -------------- Email Sign In -------------------
export const emailSignInStart = (emailAndPassword) => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
});

// ---------------- Sign In actions ---------------
export const signInSuccess = (user) => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user
});

export const signInFailure = (error) => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: error
});


// ---------------- Sign Out actions ---------------
export const singOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = (error) => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS,
    payload: error
});