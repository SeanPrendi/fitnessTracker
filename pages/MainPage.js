import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BottomBar from "../components/BottomBar";
import ExerciseBar from "../components/ExerciseBar";

export default function MainPage(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Workout Pal</Text>
      <Text style={styles.todaysWorkout}>Today's Workout: Back Day</Text>
      <ExerciseBar
        exercise="Deadlift"
        weight={235}
        unit="lbs"
        sets={8}
      />
      <BottomBar setPage={props.setPage} currPage={"main"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#181818",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  header: {
    color: "#f0d4d4",
    paddingTop: "20%",
    paddingHorizontal: "5%",
    fontSize: 50,
    textAlign: "center"
  },
  todaysWorkout: {
    color: "#f0d4d4",
    paddingHorizontal: "5%",
    fontSize: 30,
    paddingBottom: "15%",
    textAlign: "center"
  },
  rectangle: {
    backgroundColor: "#838383",
    width: "80%",
    height: "10%"
  }
});
