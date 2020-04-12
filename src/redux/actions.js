import NetInfo from '@react-native-community/netinfo';
import auth from '../utils/Auth';
import data from '../../_data_collector/data';

import {
  HIDE_BANNER,
  NETWORK,
  LOGIN_SUCCESS,
  SHOW_SPINNER,
  HIDE_SPINNER,
  SET_USER_INFO,
  ERRORS,
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
} from './consts';
import {logError} from '../utils/analytics';
import localStorage, {TABLES} from '../utils/localStorage';

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
    localStorage.setItem(TABLES.APPS, data);
    dispatch(setAppsData(data));
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
