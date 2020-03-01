import {HIDE_BANNER} from '../consts';
import initialState from '../initialState';

const adReducer = (state = initialState.ads, action) => {
  switch (action.type) {
    case HIDE_BANNER:
      return {
        ...state,
        showBanner: action.payload,
      };
    default:
      return state;
  }
};

export default adReducer;
