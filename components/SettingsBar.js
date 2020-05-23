import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';

export default function SettingsBar(props) {
  const [data, setData] = useState(props.value);

  return (
    <View style={styles.SettingsBarContainer}>
      <View style={styles.SettingsContent}>
        <Text style={styles.SettingText}>{props.setting}:</Text>
        <View style={styles.ValueUnitContainer}>
          <TextInput
            style={styles.ValueUnitText}
            value={data}
            keyboardType="numeric"
            onChangeText={setData}
            maxLength={4}
            onEndEditing={() => (data === '' ? setData('0') : data)}
          />
          <Text style={styles.ValueUnitText}> {props.unit}</Text>
        </View>
      </View>
    </View>
  );
}

SettingsBar.propTypes = {
  setting: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  SettingsBarContainer: {
    display: 'flex',
    flexDirection: 'row',
    borderColor: '#838383',
    borderWidth: 3,
    width: '80%',
    height: '100%'
  },
  SettingsContent: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  SettingText: { color: '#f0d4d4', paddingLeft: '5%', fontSize: 25 },
  ValueUnitContainer: {
    paddingRight: '5%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  ValueUnitText: { color: '#f0d4d4', fontSize: 25 }
});
