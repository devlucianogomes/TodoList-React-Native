import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#a370f7",
    padding: 15,
    borderRadius: 7,
    alignItems: "center",
    marginTop: 20,
  },

  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },

  buttonSkill: {
    backgroundColor: "#1f1e25",
    padding: 15,
    borderRadius: 7,
    alignItems: "center",
    marginBottom: 20,
  },
});
