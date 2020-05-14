import React from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import BottomBar from "../components/BottomBar";
import ExerciseBar from "../components/ExerciseBar";
import data from "../mockdata/exercise";

export default function MainPage(props) {
  const unit = data.unit;
  let exercises = data[props.day];
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Workout Pal</Text>
      <Text style={styles.todaysWorkout}>Today's Workout: {props.day} Day</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollingExternContainer}
        contentContainerStyle={styles.scrollingContenterContainer}
        bounces={false}
      >
        {exercises.map((ex, idx) => {
          return (
            <View style={styles.EBarContainer} key={idx}>
              <ExerciseBar
                exercise={ex.exercise}
                weight={ex.weight}
                unit={unit}
                sets={ex.sets}
              />
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.BottomBarContainer}>
        <BottomBar setPage={props.setPage} currPage={"main"} />
      </View>
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
    justifyContent: "flex-start",
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
    paddingBottom: "8%",
    textAlign: "center"
  },
  scrollingExternContainer: {
    width: Dimensions.get("window").width
  },
  scrollingContenterContainer: {
    alignItems: "center"
  },
  EBarContainer: {
    flex: 1,
    height: Dimensions.get("window").height * 0.11,
    paddingBottom: Dimensions.get("window").width * 0.05
  },
  BottomBarContainer: {
    alignSelf: "flex-end"
  }
});
