import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Workout Pal</Text>
      <Text style={styles.todaysWorkout}>Today's Workout: Back Day</Text>
      <View style={styles.rectangle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#181818',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    color: '#f0d4d4',
    paddingTop: '20%',
    paddingHorizontal: '5%',
    fontSize: 50,
    textAlign: "center",
  },
  todaysWorkout: {
    color: '#f0d4d4',
    paddingTop: '5%',
    paddingHorizontal: '5%',
    fontSize: 30,
    textAlign: "center",
  },
  rectangle: {
    // color: '#838383'
    color: 'green',
    width: '80%',
    height: '10%',
  }
});
