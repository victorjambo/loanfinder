import React from 'react';
import {View, Text, ScrollView, Linking} from 'react-native';
import {Image, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';

import colors from '../../utils/colors';

import styles from './styles';

const PLAY_URL = 'https://play.google.com/store/apps/details?id=';

const AppView = ({route}) => {
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
  const bgColor = {backgroundColor: colors.primary};

  const handleGetApp = () => {
    const link = PLAY_URL + id;
    Linking.openURL(link);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image source={{uri: headerImage}} style={styles.img} />
        <View style={styles.detailsContainer}>
          <View style={[styles.row, styles.iconNameContainer]}>
            <Image
              source={{uri: icon}}
              style={styles.ico}
              containerStyle={[styles.icoContainer, styles.shadow]}
              borderRadius={10}
            />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{title}</Text>
              <Text style={styles.subTitle}>{developer.name}</Text>
            </View>
          </View>
          <View style={[styles.row, styles.badgeContainer]}>
            <View style={[styles.row, styles.badge]}>
              <Icon color={colors.grey} size={24} name="staro" />
              <Text style={styles.badgeLabel}>{scoreText}</Text>
            </View>
            <View style={[styles.row, styles.badge]}>
              <Icon color={colors.grey} size={24} name="clouddownloado" />
              <Text style={styles.badgeLabel}>{installs}</Text>
            </View>
            <View style={[styles.row, styles.badge]}>
              <Icon color={colors.grey} size={24} name="like2" />
              <Text style={styles.badgeLabel}>91</Text>
            </View>
            <View style={[styles.row, styles.badge]}>
              <Icon color={colors.grey} size={24} name="heart" />
              <Text style={styles.badgeLabel}>465</Text>
            </View>
          </View>
          <View style={styles.verticalSpace}>
            <Text style={styles.title}>What's new</Text>
            <ScrollView>
              <Text style={styles.desc}>{recentChanges}</Text>
            </ScrollView>
          </View>
        </View>
      </View>
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
    </View>
  );
};

export default AppView;
