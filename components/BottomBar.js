import React from "react";
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Dimensions,
  Image
} from "react-native";
import chart from "../assets/Chart.png";
import person from "../assets/Person.png";
import calendar from "../assets/Calendar.png";

const Button = props => {
  return (
    <View style={styles.ButtonContainer}>
      <TouchableHighlight
        underlayColor="#666666"
        style={styles.BottomButton}
        onPress={() => props.setPage()}
      >
        <Image source={props.img} style={styles.ButtonImg} />
      </TouchableHighlight>
    </View>
  );
};

export default function BottomBar(props) {
  return (
    <View style={styles.BottomBarContainer}>
      <Button img={calendar} setPage={() => props.setPage("calendar")} />
      <Button img={person } setPage={() => props.setPage("settings")} />
      <Button img={chart} setPage={() => props.setPage("stats")} />
    </View>
  );
}

const styles = StyleSheet.create({
  BottomBarContainer: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    bottom: 0
  },
  BottomButton: {
    backgroundColor: "#444444",
    width: Dimensions.get("window").width / 3,
    height: Dimensions.get("window").width / 4
  },
  ButtonImg: {
    resizeMode: "cover",
    flex: 1,
    alignSelf: "center",
    width: "70%",
    height: undefined
  }
});
