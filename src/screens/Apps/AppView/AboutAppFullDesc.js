import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Divider} from 'react-native-elements';
import {connect} from 'react-redux';

import styles from '../styles';

const AboutAppFullDesc = ({currentAppData}) => {
  const {description, summary, recentChanges} = currentAppData;
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

const mapStateToProps = state => ({
  currentAppData: state.appState.currentAppData,
});

export default connect(mapStateToProps)(AboutAppFullDesc);
