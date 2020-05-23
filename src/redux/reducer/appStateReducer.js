import {
  SHOW_SPINNER,
  HIDE_SPINNER,
  SET_CURRENT_APP_DATA,
  SET_SEARCH_RESULTS,
  SET_LOCATION,
  SET_LANGUAGE,
  SAVE_APP,
  SET_IS_CURRENT_APP_SAVED,
  SET_TERMS,
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
    case SET_LANGUAGE:
      return {
        ...state,
        isLanguageSet: action.payload,
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
    case SET_TERMS:
      return {
        ...state,
        isTermsAccepted: action.payload,
      };
    default:
      return state;
  }
};

export default appStateReducer;
