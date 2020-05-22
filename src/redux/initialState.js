import {ADMOB_PROD_IDS, ADMOB_TEST_IDS} from './consts';
import data from '../utils/data';

let admob = Object.assign({}, ADMOB_PROD_IDS);

if (__DEV__) {
  admob = Object.assign({}, ADMOB_TEST_IDS);
}

export default {
  ads: {
    appId: admob.ADMOB_AD_ID,
    banner: admob.ADMOB_BANNER_ID,
    interstetial: admob.ADMOB_INTERSTITIAL_ID,
    reward: admob.ADMOB_REWARDED,
    fequency: 2,
    adCount: 0,
    isInterstitialRequested: false,
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
  appState: {
    showSpinner: false,
    currentAppData: {},
    searchResults: [],
    apps: data,
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
    FS_BANNER: true,
    FS_REWARDED: true,
    FS_INTERSTETIAL: true,
    FS_LOCALSTORAGE: true,
  },
};
