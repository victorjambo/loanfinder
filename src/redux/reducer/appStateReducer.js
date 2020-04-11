import {
  SHOW_SPINNER,
  HIDE_SPINNER,
  SHOW_TOAST,
  HIDE_TOAST,
  SET_CURRENT_APP_DATA,
  SET_SEARCH_RESULTS,
  SET_LOCATION,
  FETCH_APP_DATA,
  HIDE_SPLASH,
  SAVE_APP,
  SET_IS_CURRENT_APP_SAVED,
} from '../consts';
import initialState from '../initialState';

const appStateReducer = (state = initialState.appState, action) => {
  switch (action.type) {
    case SHOW_SPINNER:
      return {
        ...state,
        showSpinner: true,
      };
    case HIDE_SPINNER:
      return {
        ...state,
        showSpinner: false,
      };
    case SHOW_TOAST:
      return {
        ...state,
        showToast: true,
      };
    case HIDE_TOAST:
      return {
        ...state,
        showToast: false,
      };
    case SET_CURRENT_APP_DATA:
      return {
        ...state,
        currentAppData: action.payload,
      };
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload,
      };
    case SET_LOCATION:
      return {
        ...state,
        location: action.payload,
      };
    case FETCH_APP_DATA:
      return {
        ...state,
        apps: action.payload,
      };
    case HIDE_SPLASH:
      return {
        ...state,
        splashState: true,
      };
    case SET_IS_CURRENT_APP_SAVED:
      return {
        ...state,
        isCurrentAppSaved: action.payload,
      };
    case SAVE_APP:
      return {
        ...state,
        savedApps: action.payload.newSavedApps,
        isCurrentAppSaved: action.payload.saved,
      };
    default:
      return state;
  }
};

export default appStateReducer;
