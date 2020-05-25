import auth from '../utils/Auth';

import {
  SHOW_SPINNER,
  HIDE_SPINNER,
  SET_USER_INFO,
  LOGOUT_SUCCESS,
  SKIP_AUTH,
  SET_CURRENT_APP_DATA,
  SET_SEARCH_RESULTS,
  SET_LOCATION,
  SET_TERMS,
  SET_LANGUAGE,
  SAVE_APP,
  SET_IS_CURRENT_APP_SAVED,
  AUTH_SUCCESS,
  SHOW_GENERIC_ERROR,
  HIDE_GENERIC_ERROR,
  SET_USER_DISPLAY_NAME,
} from './consts';
import {INFO, ERROR, logError, logInfo} from '../utils/logger';
import localStorage, {TABLES} from '../utils/localStorage';

/**
 * Spinners
 */
export const showSpinner = () => ({
  type: SHOW_SPINNER,
});

export const hideSpinner = () => ({
  type: HIDE_SPINNER,
});

/**
 * Auth
 */
export const authSuccess = () => ({
  type: AUTH_SUCCESS,
});

export const setGenericError = payload => ({type: SHOW_GENERIC_ERROR, payload});
export const hideGenericError = () => ({type: HIDE_GENERIC_ERROR});

export const setUserInfo = user => ({
  type: SET_USER_INFO,
  payload: user,
});

export const setDisplayName = payload => ({
  type: SET_USER_DISPLAY_NAME,
  payload,
});

export const getUserInfo = () => {
  return (dispatch, getState) => {
    if (getState().auth.user.uid === '') {
      localStorage
        .getItem(TABLES.USER)
        .then(payload => {
          if (payload) {
            dispatch(authSuccess());
            dispatch(setUserInfo(payload));
          }
        })
        .catch(error => logError(ERROR.LOCALSTORAGE.GET_ITEM.AUTH, error));
    }
  };
};

/**
 * login
 */
const LOGIN_INVALID_CREDS_ERROR = "Email and Password don't match";
const GENERIC_ERROR = 'Something went wrong';
const SIGNUP_ERROR = 'The email address is already in use';
export const loginRequest = (email, password) => {
  return dispatch => {
    dispatch(showSpinner());

    auth
      .firebaseLogin(email, password)
      .then(res => {
        if (res.user) {
          dispatch(authSuccess());
          dispatch(setUserInfo(res.user));
          localStorage.multiSetItem(
            [TABLES.USER, res.user],
            [TABLES.ISLOGGEDIN, true],
          );
          logInfo(INFO.ACTION.FIREBASE_LOGIN);
        }
        dispatch(hideSpinner());
      })
      .catch(error => {
        let msg = GENERIC_ERROR;
        const errMsg = error.message.toString();
        if (
          errMsg.includes('wrong-password') ||
          errMsg.includes('user-not-found')
        ) {
          msg = LOGIN_INVALID_CREDS_ERROR;
        }
        dispatch(hideSpinner());
        dispatch(setGenericError(msg));
        logError(ERROR.ACTION.FIREBASE_LOGIN, error.message);
      });
  };
};

/**
 * Register
 */
export const registerRequest = (email, password, displayName) => {
  return dispatch => {
    dispatch(showSpinner());

    auth
      .firebaseRegister(email, password)
      .then(res => {
        if (res.user) {
          dispatch(authSuccess());
          dispatch(setUserInfo(res.user));
          dispatch(setDisplayName(displayName));
          localStorage.multiSetItem(
            [TABLES.USER, res.user],
            [TABLES.ISLOGGEDIN, true],
          );
          logInfo(INFO.ACTION.FIREBASE_REGISTER);
        }
        dispatch(hideSpinner());
      })
      .catch(error => {
        let msg = GENERIC_ERROR;
        if (error.message.toString().includes('email-already-in-use')) {
          msg = SIGNUP_ERROR;
        }
        dispatch(hideSpinner());
        dispatch(setGenericError(msg));
        logError(ERROR.ACTION.FIREBASE_REGISTER, error.message);
      });
  };
};

/**
 * logout
 */
export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

export const logoutRequest = () => {
  return dispatch => {
    try {
      auth
        .firebaseSignOut()
        .then(res => {
          dispatch(logoutSuccess());
          dispatch(skipAuth(false));
          localStorage.clearAll();
          logInfo(INFO.ACTION.FIREBASE_LOGOUT);
        })
        .catch(err => {
          dispatch(logoutSuccess());
          dispatch(skipAuth(false));
          localStorage.clearAll();
          logError(ERROR.ACTION.FIREBASE_LOGOUT, err);
        });
    } catch (error) {
      dispatch(logoutSuccess());
      dispatch(skipAuth(false));
      logError(ERROR.ACTION.FIREBASE_LOGOUT_CATCH, error);
    }
  };
};

/**
 * skip Auth
 */
export const skipAuth = (payload = true) => {
  return dispatch => {
    // SHORT CUT
    // dispatch(authSuccess());
    // dispatch(setLocation('KE'));
    // dispatch(setLanguage(true));
    // dispatch(setTerms(true));
    dispatch({type: SKIP_AUTH, payload});
  };
};

/**
 * Set App Data
 */
export const setCurrentAppData = item => {
  return (dispatch, getState) => {
    const {
      appState: {savedApps},
    } = getState();

    const isSaved = savedApps.find(app => app.id === item.id);

    if (isSaved) {
      dispatch({type: SET_IS_CURRENT_APP_SAVED, payload: true});
    } else {
      dispatch({type: SET_IS_CURRENT_APP_SAVED, payload: false});
    }

    dispatch({
      type: SET_CURRENT_APP_DATA,
      payload: item,
    });
  };
};

/**
 * Search
 */
export const setSearchResults = payload => ({
  type: SET_SEARCH_RESULTS,
  payload,
});

/**
 * LOCATION & Terms and condition
 */
export const setLanguage = (payload = true) => ({type: SET_LANGUAGE, payload});

export const setLocation = payload => ({
  type: SET_LOCATION,
  payload,
});

export const setTerms = (payload = true) => ({
  type: SET_TERMS,
  payload,
});

/**
 * saved apps
 */
export const setSavedApps = payload => ({
  type: SAVE_APP,
  payload,
});

export const saveApp = () => {
  return (dispatch, getState) => {
    const {
      appState: {currentAppData, savedApps},
    } = getState();

    const id = currentAppData.id;

    logInfo(INFO.ACTION.SAVE_APP + '_' + id);

    const isSaved = savedApps.find(item => item.id === id);

    let payload = {
      saved: false,
      newSavedApps: [],
    };

    if (isSaved) {
      payload.newSavedApps = savedApps.filter(item => item.id !== id);
    } else {
      payload.newSavedApps = [...savedApps, currentAppData];
      payload.saved = true;
    }

    dispatch(setSavedApps(payload));
    localStorage.setItem(TABLES.SAVED_APPS, payload);
  };
};

export const getSavedApps = () => {
  return (dispatch, getState) => {
    const {appState} = getState();
    if (!appState.savedApps.length) {
      localStorage
        .getItem(TABLES.SAVED_APPS)
        .then(payload => {
          if (payload) {
            dispatch(setSavedApps(payload));
            logInfo(INFO.LOCALSTORAGE.GET_ITEM.SAVE_APP);
          }
        })
        .catch(error => logError(ERROR.LOCALSTORAGE.GET_ITEM.SAVE_APP, error));
    }
  };
};

