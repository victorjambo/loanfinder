import {SHOW_SPINNER, HIDE_SPINNER} from '../consts';
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
    default:
      return state;
  }
};

export default appStateReducer;
