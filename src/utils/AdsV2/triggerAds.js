import {AdMobInterstitial} from 'react-native-admob';

import store from '../../redux/store';
import {logError, logInfo, ERROR, INFO} from '../logger';
import {showSpinner, hideSpinner} from '../../redux/actions';

export class Ads {
  showInterstitial = () => {
    AdMobInterstitial.showAd()
      .then(() => logInfo(INFO.AD.SHOW.INTERSTITIAL))
      .catch(error => {
        if (error.toString().includes('Ad is not ready')) {
          store.dispatch(showSpinner());
          AdMobInterstitial.requestAd()
            .then(() => {
              logInfo(INFO.AD.AD_WAS_NOT_READY);
              store.dispatch(hideSpinner());
              AdMobInterstitial.showAd();
            })
            .catch(err => {
              logError(ERROR.AD.AD_WAS_NOT_READY + '_' + err.code, err);
              store.dispatch(hideSpinner());
            });
        } else {
          logInfo('EXTERNAL_ERROR_' + error.code);
        }
      });
  };

  requestInterstitial = async () =>
    await AdMobInterstitial.requestAd().catch(err =>
      logError(ERROR.AD.FAIL_TO_REQUEST_INTERSTITIAL, err),
    );
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
