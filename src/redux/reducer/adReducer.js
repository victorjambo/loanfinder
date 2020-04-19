import {
  HIDE_BANNER,
  AD_STATE,
  INCREMENT_AD_COUNTER,
  REWARDED_IS_READY,
  REWARDED_IS_NOT_READY,
  INTERSTITIAL_IS_READY,
  INTERSTITIAL_IS_NOT_READY,
} from '../consts';
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
        rewardedFequency: 8,
        showBanner: true,
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
    case REWARDED_IS_READY:
      return {
        ...state,
        isRewardedReady: true,
      };
    case REWARDED_IS_NOT_READY:
      return {
        ...state,
        isRewardedReady: false,
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
