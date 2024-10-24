import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Link href={"/"} style={styles?.button}>
        Go back to home page
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#ffffff",
  },
  button: {
    fontSize: 20,
    color: "#fff",
    backgroundColor: "grey",
    padding: 3,
    margin: 3,
  },
});
