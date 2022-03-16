import react from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

// View = div, Text = texto

export default function Home() {
  return (
    <View style={styles.caontainer}>
      <Text style={styles.title}>Welcome, Luciano!</Text>
      <TextInput style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  caontainer: {
    flex: 1,
    backgroundColor: "#121015",
    paddingVertical: 70,
    paddingHorizontal: 30,
  },

  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },

  input: {
    backgroundColor: "#1f1e25",
    color: "#fff",
    fontSize: 18,
    padding: 15,
    marginTop: 30,
    borderRadius: 5,
  },
});
