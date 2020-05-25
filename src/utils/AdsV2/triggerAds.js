import {AdMobInterstitial} from 'react-native-admob';

import store from '../../redux/store';
import {logError, logInfo, ERROR, INFO} from '../logger';
import {showSpinner, hideSpinner} from '../../redux/actions';

export class Ads {
  showInterstitial = () => {
    AdMobInterstitial.showAd()
      .then(() => logInfo('showAd'))
      .catch(error => {
        logError(ERROR.AD.SHOW.INTERSTITIAL, error);
        if (error.toString().includes('Ad is not ready')) {
          logInfo('Ad is not ready');
          store.dispatch(showSpinner());
          AdMobInterstitial.requestAd()
            .then(() => {
              store.dispatch(hideSpinner());
              AdMobInterstitial.showAd();
            })
            .catch(err => {
              logError(err);
              store.dispatch(hideSpinner());
            });
        }
      });
  };

  requestInterstitial = async () =>
    await AdMobInterstitial.requestAd().catch(err => logInfo('requestIN', err));
}

const ads = new Ads();

export default ads;

// requestAndShowInterstitial = () => {
//   const state = store.getState();

//   store.dispatch(showSpinner());

//   AdMobInterstitial.requestAd()
//     .then(() => {
//       store.dispatch(hideSpinner());
//       this.showInterstitial();
//     })
//     .catch(error => {
//       this.handleError(error);
//     });
// };

// handleError = error => {
//   if (error.toString().includes('Ad is already loaded')) {
//     logInfo('Ad is already loaded');
//     this.showInterstitial();
//   } else {
//     logError('errorRequestingAd', error);
//   }
//   store.dispatch(hideSpinner());
// };
