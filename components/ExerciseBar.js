import React from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";

export default function ExerciseBar(props) {
  return (
    <View style={styles.ExerciseBarContainer}>
      <View style={styles.ExerciseContainer}>
        <Text adjustsFontSizeToFit minimumFontScale={0.5} style={styles.Text}>
          {props.exercise}
        </Text>
      </View>
      <View style={styles.WeightContainer}>
        <Text style={styles.Text}>{props.weight} {props.unit}</Text>
      </View>
      <View style={styles.SetContainer}>
        <TouchableWithoutFeedback
          onPress={() => console.log("foo")}
          style={{ width: "100%", height: "100%" }}
        >
          <Text style={styles.Text}>{props.sets}{'\n'}sets</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ExerciseBarContainer: {
    display: "flex",
    flexDirection: "row",
    borderColor: "#838383",
    borderWidth: 3,
    width: "80%",
    // minHeight: "12%",
    height: "100%"
  },
  ExerciseContainer: {
    display: "flex",
    flex: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderColor: "#838383",
    borderRightWidth: 2,
    width: "100%"
  },
  WeightContainer: {
    display: "flex",
    flex: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderColor: "#838383",
    borderRightWidth: 2,
    width: "100%"
  },
  SetContainer: {
    display: "flex",
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "100%"
  },
  Text: {
    textAlign: "center",
    color: "#f0d4d4",
    fontSize: 20
  }
});
