import {ADMOB_PROD_IDS, ADMOB_TEST_IDS} from './consts';

let admob = Object.assign({}, ADMOB_PROD_IDS);

if (__DEV__) {
  admob = Object.assign({}, ADMOB_TEST_IDS);
}

export default {
  ads: {
    showRewarded: true,
    rewardedFequency: 8,
    showInterstitial: true,
    showBanner: false,
    appId: admob.ADMOB_AD_ID,
    banner: admob.ADMOB_BANNER_ID,
    interstetial: admob.ADMOB_INTERSTITIAL_ID,
    reward: admob.ADMOB_REWARDED,
    fequency: 1,
    adCount: 0,
    isRewardedReady: false,
    isInterstitialReady: false,
  },
  connection: {
    isConnected: false,
  },
  auth: {
    isLoggedIn: false,
    skipAuth: false,
    user: {
      displayName: null,
      email: '',
      emailVerified: false,
      isAnonymous: false,
      phoneNumber: null,
      photoURL: null,
      providerId: 'firebase',
      uid: '',
    },
    errors: {},
  },
  settings: {
    email: 'mutaidev@gmail.com',
    privacyPolicy: 'https://sites.google.com/view/mutaidev-policy/home',
    devStoreUel: 'http://play.google.com/store/apps/dev?id=4753238511708918696',
    appStoreUrl:
      'http://play.google.com/store/apps/details?id=com.mutaidev.loanfinder',
  },
  appState: {
    showSpinner: false,
    splashState: false,
    currentAppData: {},
    searchResults: [],
    apps: [],
    savedApps: [],
    isCurrentAppSaved: false,
    location: '',
    isTermsAccepted: false,
    countries: [
      [
        {
          id: '1',
          name: 'Kenya',
          code: 'KE',
          visible: true,
        },
        {
          id: '2',
          name: 'Nigeria',
          code: 'NG',
          visible: true,
        },
        {
          id: '3',
          name: 'USA',
          code: 'US',
          visible: true,
        },
      ],
      [
        {
          id: '4',
          name: 'India',
          code: 'IN',
          visible: true,
        },
        {
          id: '5',
          name: 'Mexico',
          code: 'MX',
          visible: true,
        },
        {
          id: '6',
          name: 'Philippines',
          code: 'PH',
          visible: true,
        },
      ],
      [
        {
          id: '7',
          name: 'Pakistan',
          code: 'PK',
          visible: true,
        },
      ],
    ],
  },
  featureSwitch: {
    googleAuth: false,
    ads: false,
    rewarded: true,
  },
};
