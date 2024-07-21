import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppAngularModule from "./modules/AppAngularModule";
import StandaloneModule from "./modules/StandaloneModule";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import "./index.css";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const setStorage = async () => {
      await AsyncStorage.setItem("redirect", "/");
      await AsyncStorage.setItem("username", "132980");
    };

    setStorage();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      {/* <StandaloneModule /> */}
      <AppAngularModule />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "custom-font",
  },
});
