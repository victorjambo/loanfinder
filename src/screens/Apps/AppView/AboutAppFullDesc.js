import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Divider} from 'react-native-elements';
import styles from '../styles';

const AboutAppFullDesc = ({route}) => {
  const {description, summary, recentChanges} = route.params.item;
  return (
    <ScrollView style={[styles.horizonatalSpace]}>
      <View>
        <Text>{summary}</Text>
        <Text>{description}</Text>
      </View>
      <Divider />

      <View>
        <Text>What's new</Text>
        <Text>{recentChanges}</Text>
      </View>
      <Divider />

      <View>
        <Text>App info</Text>
        <Text>{recentChanges}</Text>
      </View>
    </ScrollView>
  );
};

export default AboutAppFullDesc;
