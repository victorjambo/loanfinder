import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from '../styles';
import colors from '../../../utils/colors';

const StatusIcons = ({rating, installs, size}) => {
  return (
    <View style={[styles.row, styles.badgeContainer]}>
      <View style={[styles.row, styles.badge]}>
        <Icon color={colors.grey} size={24} name="staro" />
        <View>
          <Text style={styles.badgeLabel}>{rating}</Text>
          <Text style={styles.badgeLabel}>Ratings</Text>
        </View>
      </View>
      <View style={[styles.row, styles.badge]}>
        <Icon color={colors.grey} size={24} name="download" />
        <View>
          <Text style={styles.badgeLabel}>{installs}</Text>
          <Text style={styles.badgeLabel}>Downloads</Text>
        </View>
      </View>
      <View style={[styles.row, styles.badge]}>
        <Icon color={colors.grey} size={24} name="clouddownloado" />
        <View>
          <Text style={styles.badgeLabel}>{size}</Text>
          <Text style={styles.badgeLabel}>Size</Text>
        </View>
      </View>
    </View>
  );
};

export default StatusIcons;
