import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
// import PropTypes from 'prop-types';

export default function SettingsBar() {
  return (
    <View style={styles.SettingsBarContainer}>
      <Text>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  SettingsBarContainer: {
    display: 'flex',
    flexDirection: 'row',
    borderColor: '#838383',
    borderWidth: 3,
    width: '80%',
    height: '100%'
  }
});
