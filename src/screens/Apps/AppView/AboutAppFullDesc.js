import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Divider} from 'react-native-elements';
import {connect} from 'react-redux';

import styles from '../styles';
import DeveloperContact from './DeveloperContact';

const AboutAppFullDesc = ({currentAppData}) => {
  const {description, summary, recentChanges} = currentAppData;
  return (
    <>
      <ScrollView>
        <View style={[styles.horizonatalSpace]}>
          <Text style={styles.aboutAppFullDescSummary}>{summary}</Text>
          <Text>{description}</Text>
        </View>
        <Divider style={styles.divider} />

        <View style={[styles.horizonatalSpace]}>
          <Text style={styles.aboutAppFullDescTitle}>What's new</Text>
          <Text>{recentChanges}</Text>
        </View>
        <Divider style={styles.divider} />

        <View style={[styles.horizonatalSpace, {marginBottom: 30}]}>
          <Text style={styles.aboutAppFullDescTitle}>Developer Contact</Text>
          <DeveloperContact />
        </View>
      </ScrollView>
    </>
  );
};

const mapStateToProps = state => ({
  currentAppData: state.appState.currentAppData,
});

export default connect(mapStateToProps)(AboutAppFullDesc);
