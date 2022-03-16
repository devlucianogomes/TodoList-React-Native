import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const SkillCard = ({ skill }) => {
  return (
    <TouchableOpacity style={styles.buttonSkill}>
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
};

export default SkillCard;

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: "#1f1e25",
    padding: 15,
    borderRadius: 7,
    alignItems: "center",
    marginBottom: 20,
  },

  textSkill: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
