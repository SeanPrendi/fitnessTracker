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
  const here = props.currPage === props.id;
  return (
    <View style={styles.ButtonContainer}>
      <TouchableHighlight
        underlayColor="#666666"
        style={[
          styles.BottomButton,
          {
            backgroundColor: here ? "#666666" : "#444444"
          }
        ]}
        onPress={() => here ? props.setPage("main") : props.setPage(props.id)}
      >
        <Image source={props.img} style={styles.ButtonImg} />
      </TouchableHighlight>
    </View>
  );
};

export default function BottomBar(props) {
  return (
    <View style={styles.BottomBarContainer}>
      <Button
        img={calendar}
        id="calendar"
        setPage={props.setPage}
        currPage={props.currPage}
      />
      <Button
        img={person}
        id="settings"
        setPage={props.setPage}
        currPage={props.currPage}
      />
      <Button
        img={chart}
        id="stats"
        setPage={props.setPage}
        currPage={props.currPage}
      />
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
