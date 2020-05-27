import data from '../utils/data';

export default {
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
    genericError: '',
  },
  appState: {
    showSpinner: false,
    currentAppData: {},
    searchResults: [],
    apps: data,
    savedApps: [],
    isCurrentAppSaved: false,
    location: '',
    isLanguageSet: false,
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
};
