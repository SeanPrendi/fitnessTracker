import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import BottomBar from '../components/BottomBar';

export default function StatsPage(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Workout Stats</Text>
      <ScrollView />
      <View style={styles.BottomBarContainer}>
        <BottomBar setPage={props.setPage} currPage="stats" />
      </View>
    </View>
  );
}

StatsPage.propTypes = {
  setPage: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#181818',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  header: {
    color: '#f0d4d4',
    paddingTop: '20%',
    paddingHorizontal: '5%',
    fontSize: 50,
    textAlign: 'center'
  },
  BottomBarContainer: {
    alignSelf: 'flex-end'
  }
});
