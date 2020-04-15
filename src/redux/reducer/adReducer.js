import {HIDE_BANNER, AD_STATE} from '../consts';
import initialState from '../initialState';

const adReducer = (state = initialState.ads, action) => {
  switch (action.type) {
    case HIDE_BANNER:
      return {
        ...state,
        showBanner: action.payload,
      };
    case AD_STATE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default adReducer;
