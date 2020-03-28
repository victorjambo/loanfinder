import React from 'react';
import {View} from 'react-native';
import {Image} from 'react-native-elements';

import styles from '../Apps/styles';
import GetAppButton from './GetAppButton';
import HeaderContainer from './HeaderContainer';
import StatusIcons from './StatusIcons';
import AppBodyContainer from './AppBodyContainer';

const AppViewContainer = ({route}) => {
  const {
    id,
    title,
    installs,
    scoreText,
    developer,
    recentChanges,
    media: {
      image: {headerImage, icon},
    },
  } = route.params.item;

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
          <StatusIcons rating={scoreText} installs={installs} />
          <AppBodyContainer whatsNew={recentChanges} />
        </View>
      </View>
      <GetAppButton appId={id} />
    </View>
  );
};

export default AppViewContainer;
