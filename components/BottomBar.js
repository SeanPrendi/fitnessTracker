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
import calendar from "../assets/Calendar.png"

const Button = (props) => {
	return (
		<View style={styles.ButtonContainer}>
		<TouchableHighlight
			underlayColor="#666666"
			style={styles.BottomButton}
			onPress={() => console.log("foo")}
		>
			<Image source={props.img} style={styles.ButtonImg} />
		</TouchableHighlight>
	</View>
	)
}

export default function App() {
  return (
		<View style={styles.BottomBarContainer}>
			<Button img={calendar} ></Button>
			<Button img={person} ></Button>
			<Button img={chart} ></Button>
		</View>
  );
}

const styles = StyleSheet.create({
	BottomBarContainer: {
		display: 'flex',
		flexDirection: 'row',
		position: 'absolute',
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
		alignSelf: 'center',
    width: '70%',
		height: undefined
  }
});
