import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BottomBar from "../components/BottomBar";

export default function CalendarPage(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Current Schedule</Text>
      <BottomBar setPage={props.setPage} currPage="calendar" />
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
  }
});
