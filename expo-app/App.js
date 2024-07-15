import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ButtonaAngularModule from "./modules/ButtonaAngularModule";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <ButtonaAngularModule />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
