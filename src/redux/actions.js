import functions from '@react-native-firebase/functions';

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
  SAVE_APP,
  SET_IS_CURRENT_APP_SAVED,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  SET_USER_DISPLAY_NAME,
  SET_COUNTRIES,
  FS,
  INCREMENT_AD_COUNTER,
  INTERSTITIAL_IS_REQUESTED,
  INTERSTITIAL_IS_READY,
  INTERSTITIAL_IS_NOT_READY,
} from './consts';
import {INFO, ERROR, WARN, logError, logInfo} from '../utils/logger';
import localStorage, {TABLES} from '../utils/localStorage';

const ENDPOINTS = {
  APPSTATE: 'appstate',
  LOANFINDER: 'loanfinder',
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
 * Auth
 */
export const authSuccess = () => ({
  type: AUTH_SUCCESS,
});

export const authFailure = payload => ({
  type: AUTH_FAILURE,
  payload,
});

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
            logInfo(INFO.LOCALSTORAGE.GET_ITEM.AUTH);
          } else {
            logError(WARN.LOCALSTORAGE.GET_ITEM.AUTH, {
              error: 'NO_AUTH_DATA_IN_LOCALSTORAGE',
            });
          }
        })
        .catch(error => logError(ERROR.LOCALSTORAGE.GET_ITEM.AUTH, error));
    }
  };
};

/**
 * login
 */
export const loginRequest = (email, password) => {
  return (dispatch, getState) => {
    const {featureSwitch} = getState();

    dispatch(showSpinner());

    auth
      .firebaseLogin(email, password)
      .then(res => {
        if (res.user) {
          dispatch(authSuccess());
          dispatch(setUserInfo(res.user));
          if (featureSwitch.FS_LOCALSTORAGE) {
            localStorage.multiSetItem(
              [TABLES.USER, res.user],
              [TABLES.ISLOGGEDIN, true],
            );
          }
          logInfo(INFO.ACTION.FIREBASE_LOGIN);
        }
        dispatch(hideSpinner());
      })
      .catch(error => {
        dispatch(hideSpinner());
        dispatch(authFailure({message: error.message}));
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
        dispatch(hideSpinner());
        dispatch(authFailure({message: error.message}));
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
        .catch(err => logError(ERROR.ACTION.FIREBASE_LOGOUT, err));
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
    dispatch(authSuccess());
    dispatch(setLocation('KE'));
    // dispatch(setLanguage(true));
    dispatch(setTerms(true));
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

export const setCountries = payload => ({
  type: SET_COUNTRIES,
  payload,
});

export const fetchAppData = () => {
  return (dispatch, getState) => {
    const {featureSwitch} = getState();

    try {
      const request = functions().httpsCallable(ENDPOINTS.LOANFINDER);
      request()
        .then(res => {
          sendDataToStoreState(res.data, dispatch);
          if (featureSwitch.FS_LOCALSTORAGE) {
            localStorage.setItem(TABLES.API_DATA, res.data);
          }
          logInfo(INFO.ACTION.FIREBASE_FETCH_API[ENDPOINTS.LOANFINDER]);
        })
        .catch(error => {
          dispatch(fetchFromLocalstorage());
          logError(
            ERROR.ACTION.FIREBASE_FETCH_API[ENDPOINTS.LOANFINDER],
            error,
          );
        });
    } catch (error) {
      dispatch(fetchFromLocalstorage());
      logError(ERROR.ACTION.FIREBASE_FETCH_API[ENDPOINTS.LOANFINDER], error);
    }
  };
};

const fetchFromLocalstorage = () => {
  return dispatch => {
    localStorage
      .getItem(TABLES.API_DATA)
      .then(data => {
        if (data) {
          sendDataToStoreState(data, dispatch);
        }
      })
      .catch(err => err);
  };
};

const sendDataToStoreState = (data, dispatch) => {
  if (data.rehydrate.countries) {
    dispatch(setCountries(data.countries));
    logInfo(INFO.ACTION.REHYDRATE.COUNTRIES);
  }
  if (data.rehydrate.terms) {
    dispatch(setTerms(false));
    logInfo(INFO.ACTION.REHYDRATE.TERMS);
  }
  if (data.rehydrate.location) {
    dispatch(setLocation(''));
    logInfo(INFO.ACTION.REHYDRATE.LOCATION);
  }
  if (data.rehydrate.featureSwitch) {
    dispatch(setFeatureSwitch(data.featureSwitch));
    logInfo(INFO.ACTION.FS);
  }
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
    logInfo(INFO.ACTION.SAVE_APP);
    const {
      featureSwitch,
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
    if (featureSwitch.FS_LOCALSTORAGE) {
      localStorage.setItem(TABLES.SAVED_APPS, payload);
    }
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
          } else {
            logError(WARN.LOCALSTORAGE.GET_ITEM.SAVE_APP, {
              error: 'NO_SAVED_APPS_IN_LOCALSTORAGE',
            });
          }
        })
        .catch(error => logError(ERROR.LOCALSTORAGE.GET_ITEM.SAVE_APP, error));
    }
  };
};

/**
 * Feature Switch
 */
export const setFeatureSwitch = payload => ({
  type: FS,
  payload,
});

/**
 * ADMOB
 */
export const incrementAdCounter = () => ({type: INCREMENT_AD_COUNTER});
export const adLoadedInterstitial = () => ({type: INTERSTITIAL_IS_READY});
export const adRequestedInterstitial = () => ({
  type: INTERSTITIAL_IS_REQUESTED,
});
export const resetAdLoadedInterstitial = () => ({
  type: INTERSTITIAL_IS_NOT_READY,
});
