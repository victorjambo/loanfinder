import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
import colors from '../../utils/colors';

const SkipContainer = () => {
  return (
    <TouchableOpacity style={styles.skip} onPress={() => console.log('SKIP')}>
      <Text style={styles.skipText}>Skip </Text>
      <FontAwesome name="chevron-right" size={14} color={colors.primaryText} />
    </TouchableOpacity>
  );
};

export default SkipContainer;
