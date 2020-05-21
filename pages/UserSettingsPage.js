import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import BottomBar from '../components/BottomBar';
import SettingsBar from '../components/SettingsBar';

export default function UserSettingsPage(props) {
  // const userData = props.data;
  return (
    <View style={styles.container}>
      <Text style={styles.header}>User Settings</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollingExternContainer}
        contentContainerStyle={styles.scrollingContentContainer}>
        {/* {userData.map((datum, idx) => {
          return (
            <View key={idx}>

            </View>
          )
        })} */}
        <SettingsBar />
      </ScrollView>
      <View style={styles.BottomBarContainer}>
        <BottomBar setPage={props.setPage} currPage="userSettings" />
      </View>
    </View>
  );
}

UserSettingsPage.propTypes = {
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
  },
  scrollingExternContainer: {
    width: Dimensions.get('window').width
  },
  scrollingContentContainer: {
    alignItems: 'center'
  }
});
