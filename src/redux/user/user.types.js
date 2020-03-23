export const UserActionTypes = {
    // Check user.
    CHECK_USER_SESSION: 'CHECK_USER_SESSION',
    SET_CURRENT_USER : 'SET_CURRENT_USER',
    // Google sign in. 
    GOOGLE_SIGN_IN_START: 'GOOGLE_SIGN_IN_START',
    // Email password sign in.
    EMAIL_SIGN_IN_START: 'EMAIL_SIGN_IN_START',
    // SIGN IN Results.
    SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
    SIGN_IN_FAILURE: 'SIGN_IN_FAILURE',
    // SIGN OUT.
    SIGN_OUT_START : 'SIGN_OUT_START',
    SIGN_OUT_SUCCESS : 'SIGN_OUT_SUCCESS',
    SIGN_OUT_FAILURE : 'SIGN_OUT_FAILURE',
}

export default UserActionTypes;