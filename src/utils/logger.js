import Analytics from 'appcenter-analytics';
import {logEvent} from './analytics';

export const INFO = {
  ACTION: {
    FIREBASE_LOGIN: 'INFO_ACTION_FIREBASE_LOGIN',
    FIREBASE_REGISTER: 'INFO_ACTION_FIREBASE_REGISTER',
    FIREBASE_LOGOUT: 'INFO_ACTION_FIREBASE_LOGOUT',
    SAVE_APP: 'INFO_ACTION_SAVE_APP',
  },
  AD: {
    SHOW: {
      INTERSTITIAL: 'ADMOB_SHOWING_INTERSTITIAL',
    },
    AD_WAS_NOT_READY: 'ADMOB_AD_WAS_NOT_READY_BUT_REQUESTED',
  },
  LOCALSTORAGE: {
    GET_ITEM: {
      SAVE_APP: 'INFO_LOCALSTORAGE_GET_ITEM_SAVE_APP',
    },
  },
  SKIP_AUTH: 'INFO_SKIP_AUTH',
};
export const ERROR = {
  ACTION: {
    FIREBASE_LOGIN: 'ERROR_ACTION_FIREBASE_LOGIN',
    FIREBASE_REGISTER: 'ERROR_ACTION_FIREBASE_REGISTER',
    FIREBASE_LOGOUT: 'ERROR_ACTION_FIREBASE_LOGOUT',
    FIREBASE_LOGOUT_CATCH: 'ERROR_ACTION_FIREBASE_LOGOUT_CATCH',
  },
  AD: {
    FAILED_TO_LOAD: {
      INTERSTITIAL: 'ERROR_ADMOB_FAILED_TO_LOAD_INTERSTITIAL',
      BANNER: 'ERROR_ADMOB_FAILED_TO_LOAD_BANNER',
    },
    AD_WAS_NOT_READY: 'ADMOB_AD_WAS_NOT_READY_BUT_FAILED_TO_REQUESTED',
    FAIL_TO_REQUEST_INTERSTITIAL: 'ERROR_ADMOB_FAILED_TO_REQUEST_INTERSTITIAL',
  },
  LOCALSTORAGE: {
    GET_ITEM: {
      SAVE_APP: 'ERROR_LOCALSTORAGE_GET_ITEM_SAVE_APP',
      AUTH: 'ERROR_LOCALSTORAGE_GET_ITEM_AUTH',
    },
  },
};
export const WARN = {
  NODATA: {
    HOME: 'WARN_HOME_NO_APPS_IN_CURRENT_LOCATION',
  },
};

export const logInfo = event => {
  if (__DEV__) {
    console.log(event);
  } else {
    try {
      appcenterAnalytics(event);
      logEvent(event, {
        info: event,
      });
    } catch (error) {
      console.error('cannot send logInfo', error);
    }
  }
};

export const logError = (event, error) => {
  if (__DEV__) {
    console.info(event, error);
  } else {
    try {
      appcenterAnalytics(event, error);
      logEvent(event, {
        error: error.toString(),
        errorObj: JSON.stringify(error),
      });
    } catch (e) {
      console.error('cannot send logError', e);
    }
  }
};

const appcenterAnalytics = async (event, props = {}) => {
  return await Analytics.trackEvent(event, props);
};
