import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import PropTypes from 'prop-types';
import BottomBar from '../components/BottomBar';
import ExerciseBar from '../components/ExerciseBar';
import data from '../mockdata/exercise.json';

export default function MainPage(props) {
  const { unit } = data;
  const exercises = data[props.day];
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Workout Pal</Text>
      <Text style={styles.todaysWorkout}>Today's Workout: {props.day} Day</Text>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        keyboardVerticalOffset={40}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollingExternContainer}
          contentContainerStyle={styles.scrollingContentContainer}
          bounces={false}>
          {exercises.map((ex, idx) => {
            return (
              <View style={styles.EBarContainer} key={idx}>
                <ExerciseBar
                  exercise={ex.exercise}
                  weight={ex.weight}
                  unit={unit}
                  sets={ex.sets}
                  reps={ex.reps}
                />
              </View>
            );
          })}
        </ScrollView>
      </KeyboardAvoidingView>
      <View>
        <BottomBar setPage={props.setPage} currPage="main" />
      </View>
    </View>
  );
}

MainPage.propTypes = {
  day: PropTypes.string.isRequired,
  setPage: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#181818',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: Dimensions.get('window').height
  },
  header: {
    color: '#f0d4d4',
    paddingTop: '20%',
    paddingHorizontal: '5%',
    fontSize: 50,
    textAlign: 'center'
  },
  todaysWorkout: {
    color: '#f0d4d4',
    paddingHorizontal: '5%',
    fontSize: 30,
    paddingBottom: '8%',
    textAlign: 'center'
  },
  scrollingExternContainer: {
    width: Dimensions.get('window').width
  },
  scrollingContentContainer: {
    alignItems: 'center'
  },
  EBarContainer: {
    flex: 1,
    height: Dimensions.get('window').height * 0.11,
    paddingBottom: Dimensions.get('window').width * 0.05
  }
});
