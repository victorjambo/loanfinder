import {AdMobInterstitial} from 'react-native-admob';

import store from '../../redux/store';
import {logError, logInfo, ERROR, INFO} from '../logger';
import {showSpinner, hideSpinner} from '../../redux/actions';

export class Ads {
  showInterstitial = () => {
    AdMobInterstitial.showAd().catch(showAdError => {
      if (showAdError.code === 'E_AD_NOT_READY') {
        store.dispatch(showSpinner());
        AdMobInterstitial.requestAd()
          .then(() => {
            this.showAd();
            store.dispatch(hideSpinner());
            logInfo(INFO.AD.AD_WAS_NOT_READY);
          })
          .catch(requestAdError => {
            if (requestAdError.code === 'E_AD_ALREADY_LOADED') {
              this.showAd();
            } else {
              logError(
                ERROR.AD.AD_WAS_NOT_READY + '_' + requestAdError.code,
                requestAdError,
              );
            }
            store.dispatch(hideSpinner());
          });
      } else {
        logInfo('GENERICL_ERROR_' + showAdError.code);
      }
    });
  };

  showAd = () => {
    AdMobInterstitial.showAd()
      .then(() => {
        store.dispatch(hideSpinner());
      })
      .catch(showAdError2 => {
        logError(ERROR.AD.AD_WAS_NOT_READY, showAdError2);
        store.dispatch(hideSpinner());
      });
  };

  requestInterstitial = async () =>
    await AdMobInterstitial.requestAd().catch(err =>
      logError(ERROR.AD.FAIL_TO_REQUEST_INTERSTITIAL, err),
    );
}

const ads = new Ads();

export default ads;
