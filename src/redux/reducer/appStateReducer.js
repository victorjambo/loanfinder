import {SHOW_SPINNER, HIDE_SPINNER, SHOW_TOAST, HIDE_TOAST} from '../consts';
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
    default:
      return state;
  }
};

export default appStateReducer;
