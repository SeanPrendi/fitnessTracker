import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";
import PropTypes from "prop-types";
import BottomBar from "../components/BottomBar";
// import SettingsBar from "../components/SettingsBar";
import Switch from "../components/Switch"
import appSettings from "../mockdata/appSettings.json";

export default function AppSettingsPage(props) {
  const [weight, setWeight] = useState(appSettings.weightUnit === "lbs");
  return (
    <View style={styles.container}>
      <Text style={styles.header}>App Settings</Text>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={40}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollingExternContainer}
          contentContainerStyle={styles.scrollingContentContainer}
          bounces={false}
        >
          <Switch />
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={styles.BottomBarContainer}>
        <BottomBar setPage={props.setPage} currPage="appSettings" />
      </View>
    </View>
  );
}

AppSettingsPage.propTypes = {
  setPage: PropTypes.func.isRequired
};

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
  BottomBarContainer: {
    alignSelf: "flex-end"
  }
});
