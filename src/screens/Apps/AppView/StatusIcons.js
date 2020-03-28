import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from '../styles';
import colors from '../../../utils/colors';

const StatusIcons = ({rating, installs}) => {
  return (
    <View style={[styles.row, styles.badgeContainer]}>
      <View style={[styles.row, styles.badge]}>
        <Icon color={colors.grey} size={24} name="staro" />
        <Text style={styles.badgeLabel}>{rating}</Text>
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
  );
};

export default StatusIcons;
