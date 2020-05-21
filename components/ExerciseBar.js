import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Animated,
  TextInput,
  ScrollView,
  Dimensions
} from 'react-native';
import PropTypes from 'prop-types';

function RepBox(props) {
  const [reps, setReps] = useState(props.reps.toString());
  const [good, setGood] = useState(true);
  const [changed, setChanged] = useState(false);
  const update = (num) => {
    if (num === '') {
      setReps(num);
    } else if (num.search(/\./) === -1) {
      setReps(num);
      setChanged(true);
    }
  };
  const checkGood = () => {
    if (reps === '') {
      setReps('0');
    }
    if (parseInt(reps, 10) >= props.reps) {
      setGood(true);
    } else {
      setGood(false);
    }
  };

  const colorByGood = () => {
    if (good) {
      return 'green';
    }
    return 'red';
  };
  return (
    <View
      style={[
        styles.RepBoxContainer,
        { backgroundColor: changed ? colorByGood() : 'transparent' }
      ]}>
      <TextInput
        style={styles.InputText}
        onChangeText={(text) => update(text)}
        keyboardType="numeric"
        value={reps}
        maxLength={2}
        onEndEditing={checkGood}
      />
      <Text style={styles.Text}>reps</Text>
    </View>
  );
}

function SetBar(props) {
  const repList = [];
  for (let i = 0; i < props.sets; i += 1) {
    repList.push(props.reps);
  }
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row'
      }}>
      <View style={styles.SetBoxContainer}>
        <TouchableWithoutFeedback onPress={props.close}>
          <View style={styles.CloseSetBoxButton}>
            <Text style={styles.Text}>&gt;</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {repList.map((e, idx) => {
          return <RepBox key={idx} reps={e} />;
        })}
      </ScrollView>
    </View>
  );
}

export default function ExerciseBar(props) {
  const [visible, setVisible] = useState(false);
  const x = useRef(new Animated.Value(400)).current;
  const slideOpen = () => {
    Animated.spring(x, {
      toValue: 0,
      friction: 30,
      restSpeedThreshold: 100,
      restDisplacementThreshold: 40
    }).start(setVisible(true));
  };
  const slideClosed = () => {
    Animated.spring(x, {
      toValue: 400,
      fiction: 30,
      restSpeedThreshold: 100,
      restDisplacementThreshold: 100
    }).start(() => setVisible(false));
  };
  return (
    <View style={styles.ExerciseBarContainer}>
      <Animated.View
        style={[
          styles.SlideView,
          {
            transform: [
              {
                translateX: x
              }
            ],
            display: visible ? 'inline' : 'none'
          }
        ]}>
        <SetBar close={slideClosed} sets={props.sets} reps={props.reps} />
      </Animated.View>
      {!visible && (
        <View style={styles.ExerciseContainer}>
          <Text adjustsFontSizeToFit minimumFontScale={0.5} style={styles.Text}>
            {props.exercise}
          </Text>
        </View>
      )}
      {!visible && (
        <View style={styles.WeightContainer}>
          <Text style={styles.Text}>
            {props.weight} {props.unit}
          </Text>
        </View>
      )}
      {!visible && (
        <View style={styles.SetContainer}>
          <TouchableWithoutFeedback
            onPress={() => {
              if (visible) slideClosed();
              else slideOpen();
            }}
            style={{ width: '100%', height: '100%' }}>
            <Text style={styles.Text}>
              {props.sets}
              {'\n'}sets
            </Text>
          </TouchableWithoutFeedback>
        </View>
      )}
    </View>
  );
}

RepBox.propTypes = {
  reps: PropTypes.number.isRequired
};
SetBar.propTypes = {
  sets: PropTypes.number.isRequired,
  reps: PropTypes.number.isRequired,
  close: PropTypes.func.isRequired
};
ExerciseBar.propTypes = {
  sets: PropTypes.number.isRequired,
  reps: PropTypes.number.isRequired,
  exercise: PropTypes.string.isRequired,
  weight: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  ExerciseBarContainer: {
    display: 'flex',
    flexDirection: 'row',
    borderColor: '#838383',
    borderWidth: 3,
    width: '80%',
    height: '100%'
  },
  ExerciseContainer: {
    display: 'flex',
    flex: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderColor: '#838383',
    borderRightWidth: 2,
    width: '100%'
  },
  WeightContainer: {
    display: 'flex',
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderColor: '#838383',
    borderRightWidth: 2,
    width: '100%'
  },
  SetContainer: {
    display: 'flex',
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%'
  },
  Text: {
    textAlign: 'center',
    color: '#f0d4d4',
    fontSize: 20
  },
  InputText: {
    textAlign: 'center',
    color: '#f0d4d4',
    fontSize: 20,
    width: '100%',
    height: '40%'
  },
  SlideView: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  SetBoxContainer: {
    backgroundColor: '#181818',
    width: '20%',
    height: '100%'
  },
  CloseSetBoxButton: {
    display: 'flex',
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderColor: '#838383',
    borderRightWidth: 2,
    width: '100%'
  },
  RepBoxContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderColor: '#838383',
    borderRightWidth: 2,
    maxWidth: Dimensions.get('window').width * 0.15,
    minWidth: Dimensions.get('window').width * 0.15
  }
});
