import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView
} from "react-native";
import PropTypes from "prop-types";
import BottomBar from "../components/BottomBar";
import SettingsBar from "../components/SettingsBar";
import settings from "../mockdata/userSettings.json";

export default function UserSettingsPage(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>User Settings</Text>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={40}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollingExternContainer}
          contentContainerStyle={styles.scrollingContentContainer}
        >
          {Object.keys(settings).map((val, idx) => {
            console.log(val);
            return (
              <View key={idx} style={{ display: "flex", alignItems: "center" }}>
                <Text
                  style={{
                    color: "#f0d4d4",
                    fontSize: 30,
                    paddingTop: 10,
                    paddingBottom: 5,
                    textDecorationLine: "underline"
                  }}
                >
                  {val}
                </Text>
                {Object.keys(settings[val]).map((setting, jdx) => {
                  return (
                    <View style={styles.SBarContainer}>
                      <SettingsBar
                        key={jdx}
                        setting={setting}
                        value={settings[val][setting].value}
                        unit={settings[val][setting].unit}
                      />
                    </View>
                  );
                })}
              </View>
            );
          })}
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={styles.BottomBarContainer}>
        <BottomBar setPage={props.setPage} currPage="userSettings" />
      </View>
    </View>
  );
}

UserSettingsPage.propTypes = {
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
  },
  scrollingExternContainer: {
    width: Dimensions.get("window").width
  },
  scrollingContentContainer: {
    alignItems: "center"
  },
  SBarContainer: {
    // flex: 1,
    display: "flex",
    alignItems: "center",
    height: Dimensions.get("window").height * 0.09,
    width: Dimensions.get("window").width,
    paddingBottom: Dimensions.get("window").width * 0.05
  }
});
