import React from "react";
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Dimensions,
  Text
} from "react-native";
import PropTypes from "prop-types";

export default Switch = props => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%"
      }}
    >
      <TouchableHighlight
        style={{ flex: 1 }}
        onPress={() => console.log("foo")}
      >
        <View style={{ backgroundColor: "green" }}>
          <Text style={{ color: "white" }}>Yes</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        style={{ flex: 1 }}
        onPress={() => console.log("bar")}
      >
        <View style={{ backgroundColor: "red" }}>
          <Text style={{ color: "white" }}>No</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

Switch.propTypes = {};

// const styles = StyleSheet.create({
//   BottomBarContainer: {
//     display: "flex",
//     flexDirection: "row"
//   },
//   BottomButton: {
//     backgroundColor: "#444444",
//     width: Dimensions.get("window").width / 5,
//     height: Dimensions.get("window").width / 5,
//     paddingBottom: 20
//   },
//   ButtonImg: {
//     resizeMode: "cover",
//     flex: 2,
//     alignSelf: "center",
//     width: "70%",
//     height: "50%"
//   }
// });
