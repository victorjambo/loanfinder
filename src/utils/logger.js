import {logEvent} from './analytics';

export const INFO = {
  ACTION: {
    FIREBASE_LOGIN: 'INFO_ACTION_FIREBASE_LOGIN',
    FIREBASE_LOGOUT: 'INFO_ACTION_FIREBASE_LOGOUT',
    FIREBASE_GOOGLE_AUTH: 'INFO_ACTION_FIREBASE_GOOGLE_AUTH',
    FIREBASE_FETCH_API: {
      loanfinder: 'INFO_ACTION_FIREBASE_FETCH_API_ENDPOINT_LOANFINDER',
      appstate: 'INFO_ACTION_FIREBASE_FETCH_API_ENDPOINT_APPSTATE',
    },
    SAVE_APP: 'INFO_ACTION_SAVE_APP',
  },
};
export const ERROR = {
  ACTION: {
    FIREBASE_LOGIN: 'ERROR_ACTION_FIREBASE_LOGIN',
    FIREBASE_LOGOUT: 'ERROR_ACTION_FIREBASE_LOGOUT',
    FIREBASE_LOGOUT_CATCH: 'ERROR_ACTION_FIREBASE_LOGOUT_CATCH',
    FIREBASE_GOOGLE_AUTH: 'ERROR_ACTION_FIREBASE_GOOGLE_AUTH',
    FIREBASE_FETCH_API_CATCH: {
      loanfinder: 'ERROR_ACTION_FIREBASE_FETCH_API_ENDPOINT_LOANFINDER_CATCH',
      appstate: 'ERROR_ACTION_FIREBASE_FETCH_API_ENDPOINT_APPSTATE_CATCH',
    },
    FIREBASE_FETCH_API: {
      loanfinder: 'ERROR_ACTION_FIREBASE_FETCH_API_ENDPOINT_LOANFINDER',
      appstate: 'ERROR_ACTION_FIREBASE_FETCH_API_ENDPOINT_APPSTATE',
    },
  },
};

export const logInfo = event => {
  if (__DEV__) {
    console.info(event);
  } else {
    logEvent(event, {
      info: event,
    });
  }
};

export const logError = (event, error) => {
  if (__DEV__) {
    console.warn(event, error);
  } else {
    logEvent(event, {
      error: error.toString(),
      errorObj: JSON.stringify(error),
    });
  }
};
