import NetInfo from '@react-native-community/netinfo';
import functions from '@react-native-firebase/functions';

import auth from '../utils/Auth';

import {
  HIDE_BANNER,
  NETWORK,
  LOGIN_SUCCESS,
  SHOW_SPINNER,
  HIDE_SPINNER,
  SET_USER_INFO,
  LOGOUT_SUCCESS,
  SKIP_AUTH,
  SET_CURRENT_APP_DATA,
  SET_SEARCH_RESULTS,
  SET_LOCATION,
  SET_APPS_WITH_LOCATION,
  FETCH_APP_DATA,
  HIDE_SPLASH,
  SAVE_APP,
  SET_IS_CURRENT_APP_SAVED,
  AD_STATE,
} from './consts';
import {INFO, ERROR, logError, logInfo} from '../utils/logger';
import localStorage, {TABLES} from '../utils/localStorage';

const ENDPOINTS = {
  APPSTATE: 'appstate',
  LOANFINDER: 'loanfinder',
};

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

const setAdState = payload => ({
  type: AD_STATE,
  payload,
});

export const adNetwork = () => {
  return (dispatch, getState) => {
    logInfo(INFO.ACTION.FIREBASE_FETCH_API[ENDPOINTS.APPSTATE]);
    const {connection} = getState();
    if (connection.isConnected) {
      try {
        const request = functions().httpsCallable(ENDPOINTS.APPSTATE);
        request()
          .then(res => {
            dispatch(setAdState(res.data.loanfinder));
          })
          .catch(error => {
            logError(
              ERROR.ACTION.FIREBASE_FETCH_API[ENDPOINTS.APPSTATE],
              error,
            );
          });
      } catch (error) {
        logError(
          ERROR.ACTION.FIREBASE_FETCH_API_CATCH[ENDPOINTS.APPSTATE],
          error,
        );
      }
    }
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
    logInfo(INFO.ACTION.FIREBASE_LOGIN);
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
        logError(ERROR.ACTION.FIREBASE_LOGIN, error);
      });
  };
};

export const loginAndSignupWithGoogleAuth = () => {
  return dispatch => {
    logInfo(INFO.ACTION.FIREBASE_GOOGLE_AUTH);
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
        logError(ERROR.ACTION.FIREBASE_GOOGLE_AUTH, error);
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
    logInfo(INFO.ACTION.FIREBASE_LOGOUT);
    try {
      auth
        .firebaseSignOut()
        .then(res => {
          dispatch(logoutSuccess());
          dispatch(skipAuth(false));
        })
        .catch(err => logError(ERROR.ACTION.FIREBASE_LOGOUT, err));
    } catch (error) {
      dispatch(logoutSuccess());
      dispatch(skipAuth(false));
      logError(ERROR.ACTION.FIREBASE_LOGOUT_CATCH, error);
    }
  };
};

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

/**
 * skip Auth
 */
export const skipAuth = (payload = true) => ({
  type: SKIP_AUTH,
  payload,
});

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

export const setAppsWithLocation = () => ({
  type: SET_APPS_WITH_LOCATION,
});

export const setAppsData = payload => ({
  type: FETCH_APP_DATA,
  payload,
});

export const fetchApps = () => {
  return dispatch => {
    logInfo(INFO.ACTION.FIREBASE_FETCH_API[ENDPOINTS.LOANFINDER]);
    try {
      const request = functions().httpsCallable(ENDPOINTS.LOANFINDER);
      request()
        .then(res => {
          dispatch(setAppsData(res.data.apps));
        })
        .catch(error => {
          logError(
            ERROR.ACTION.FIREBASE_FETCH_API[ENDPOINTS.LOANFINDER],
            error,
          );
        });
    } catch (error) {
      logError(ERROR.ACTION.FIREBASE_FETCH_API[ENDPOINTS.LOANFINDER], error);
    }
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
 * LOCATION
 */
export const setLocation = payload => ({
  type: SET_LOCATION,
  payload,
});

/**
 * Splash
 */
export const hideSplash = () => ({
  type: HIDE_SPLASH,
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
    logInfo(INFO.ACTION.SAVE_APP);
    const {
      appState: {currentAppData, savedApps},
    } = getState();

    const id = currentAppData.id;

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
    localStorage.setItem(TABLES.SAVED_APPS, payload.newSavedApps);
  };
};
