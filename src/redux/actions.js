import NetInfo from '@react-native-community/netinfo';
import auth from '../utils/Auth';

import {
  HIDE_BANNER,
  NETWORK,
  LOGIN_SUCCESS,
  SHOW_SPINNER,
  HIDE_SPINNER,
  SHOW_TOAST,
  HIDE_TOAST,
  SET_USER_INFO,
  ERRORS,
  LOGOUT_SUCCESS,
  SKIP_AUTH,
  SET_CURRENT_APP_DATA,
  SET_SEARCH_RESULTS,
} from './consts';
import {logError} from '../utils/analytics';

/**
 * Network & Connection Checks
 */
const setConnection = status => ({
  type: NETWORK,
  payload: status,
});

export const checkConnection = () => {
  return dispatch => {
    NetInfo.addEventListener(state =>
      dispatch(setConnection(state.isConnected)),
    );
  };
};

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
 * Toast
 */
export const showToast = () => ({
  type: SHOW_TOAST,
});

export const hideToast = () => ({
  type: HIDE_TOAST,
});

/**
 * Ad Banner
 */
export const hideBanner = () => ({
  type: HIDE_BANNER,
  payload: false,
});

/**
 * login
 */
export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const loginRequest = (email, password) => {
  return dispatch => {
    dispatch(showSpinner());

    auth
      .firebaseLogin(email, password)
      .then(res => {
        if (res.user) {
          dispatch(loginSuccess());
          dispatch(setUserInfo(res.user));
        }
        dispatch(hideSpinner());
      })
      .catch(error => {
        dispatch(hideSpinner());
        logError(ERRORS.ERROR_FIREBASE_LOGIN, error);
        console.log(ERRORS.ERROR_FIREBASE_LOGIN, error);
      });
  };
};

export const loginAndSignupWithGoogleAuth = () => {
  return dispatch => {
    auth
      .fbGoogleAuth()
      .then(res => {
        if (res.user) {
          dispatch(loginSuccess());
          dispatch(setUserInfo(res.user));
        }
        dispatch(hideSpinner());
      })
      .catch(error => {
        dispatch(hideSpinner());
        logError(ERRORS.ERROR_GOOGLE_AUTH, error);
        console.log(ERRORS.ERROR_GOOGLE_AUTH, error);
      });
  };
};

export const setUserInfo = user => ({
  type: SET_USER_INFO,
  payload: user,
});

/**
 * logout
 */
export const logoutRequest = () => {
  return dispatch => {
    auth
      .firebaseSignOut()
      .then(_ => dispatch(logoutSuccess()))
      .catch(err => logError(ERRORS.ERROR_FIREBASE_LOGOUT, err));
  };
};

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

/**
 * skip Auth
 */
export const skipAuth = () => ({
  type: SKIP_AUTH,
});

export const setCurrentAppData = item => ({
  type: SET_CURRENT_APP_DATA,
  payload: item,
});

/**
 * Search
 */
export const setSearchResults = payload => ({
  type: SET_SEARCH_RESULTS,
  payload,
});
