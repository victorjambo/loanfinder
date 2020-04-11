export default {
  ads: {
    showRewarded: false,
    showInterstitial: false,
    showBanner: true,
  },
  connection: {
    isConnected: true,
  },
  auth: {
    isLoggedIn: true, // TODO
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
  },
  appState: {
    showSpinner: false,
    showToast: false,
    splashState: false,
    currentAppData: {},
    searchResults: [],
    apps: [],
    savedApps: [],
    isCurrentAppSaved: false,
    location: '',
    isTermsAccepted: true,
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
};
