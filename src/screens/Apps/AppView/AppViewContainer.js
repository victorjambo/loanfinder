import React from 'react';
import {View} from 'react-native';
import {Image} from 'react-native-elements';
import {connect} from 'react-redux';

import styles from '../styles';
import GetAppButton from './GetAppButton';
import HeaderContainer from './HeaderContainer';
import StatusIcons from './StatusIcons';
import AppBodyContainer from './AppBodyContainer';
import AdBanner, {AD_SIZE} from '../../../utils/Ads/AdBanner';

const AppViewContainer = ({navigation, currentAppData}) => {
  const {
    id,
    size,
    title,
    installs,
    scoreText,
    developer,
    media: {
      image: {headerImage, icon},
    },
  } = currentAppData;

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image source={{uri: headerImage}} style={styles.img} />
        <View style={styles.detailsContainer}>
          <HeaderContainer
            appIcon={icon}
            appTitle={title}
            developerName={developer.name}
          />
          <StatusIcons rating={scoreText} installs={installs} size={size} />
          <AppBodyContainer item={currentAppData} navigation={navigation} />
        </View>
      </View>
      <GetAppButton appId={id} />
      <AdBanner screen="AppViewContainer" adSize={AD_SIZE.BANNER} />
    </View>
  );
};

const mapStateToProps = state => ({
  currentAppData: state.appState.currentAppData,
});

export default connect(mapStateToProps)(AppViewContainer);
