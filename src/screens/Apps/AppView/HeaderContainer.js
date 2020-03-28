import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles';
import {Image} from 'react-native-elements';

const HeaderContainer = ({appIcon, appTitle, developerName}) => {
  return (
    <View style={[styles.row, styles.iconNameContainer]}>
      <Image
        source={{uri: appIcon}}
        style={styles.ico}
        containerStyle={[styles.icoContainer, styles.shadow]}
        borderRadius={10}
      />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{appTitle}</Text>
        <Text style={styles.subTitle}>{developerName}</Text>
      </View>
    </View>
  );
};

export default HeaderContainer;
