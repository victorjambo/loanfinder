import React from 'react';
import {View, Button, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from '../Apps/styles';
import colors from '../../utils/colors';

const PLAY_URL = 'https://play.google.com/store/apps/details?id=';

const GetAppButton = ({appId}) => {
  const bgColor = {backgroundColor: colors.primary};

  const handleGetApp = () => {
    const link = PLAY_URL + appId;
    Linking.openURL(link);
  };

  return (
    <View style={styles.bottomContainer}>
      <Button
        title="Get App"
        buttonStyle={[styles.btn, bgColor]}
        titleStyle={styles.btnLabel}
        containerStyle={styles.btnContainer}
        onPress={handleGetApp}
        icon={<Icon name="clouddownloado" size={25} color="white" />}
      />
    </View>
  );
};

export default GetAppButton;
