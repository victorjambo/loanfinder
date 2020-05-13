import {
  AD_STATE,
  INCREMENT_AD_COUNTER,
  INTERSTITIAL_IS_REQUESTED,
  INTERSTITIAL_IS_READY,
  INTERSTITIAL_IS_NOT_READY,
} from '../consts';
import initialState from '../initialState';

const adReducer = (state = initialState.ads, action) => {
  switch (action.type) {
    case AD_STATE:
      return {
        ...state,
        banner: action.payload.banner,
        interstetial: action.payload.interstetial,
        reward: action.payload.reward,
        fequency: action.payload.fequency,
      };
    case INCREMENT_AD_COUNTER:
      return {
        ...state,
        adCount: state.adCount + 1,
      };
    case INTERSTITIAL_IS_REQUESTED:
      return {
        ...state,
        isInterstitialRequested: true,
      };
    case INTERSTITIAL_IS_READY:
      return {
        ...state,
        isInterstitialReady: true,
      };
    case INTERSTITIAL_IS_NOT_READY:
      return {
        ...state,
        isInterstitialReady: false,
      };
    default:
      return state;
  }
};

export default adReducer;
