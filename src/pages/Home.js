import react from "react";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

// View = div, Text = texto , ToucheableOpacity = botão

export default function Home() {
  // Criando o estado para armazenar a nova skill
  // o onChangeText = captura o que é digitado, e em seguida aciona o setNewSkill e atualiza o estado
  const [newSkill, setNewSkill] = useState("");

  // Estado para armazenar todas as skills juntas
  const [mySkills, setMySksills] = useState([]);

  // Função para add

  function handleAddNewSkill() {
    setMySksills((oldState) => [...oldState, newSkill]);
  }

  return (
    <View style={styles.caontainer}>
      <Text style={styles.title}>Welcome, Luciano ✌</Text>
      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={handleAddNewSkill}
      >
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>

      <Text style={[styles.title, { marginVertical: 40 }]}>My Skills</Text>

      {mySkills.map((skill) => (
        <TouchableOpacity key={skill} style={styles.buttonSkill}>
          <Text style={styles.textSkill}>{skill}</Text>
        </TouchableOpacity>
      ))}
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
    color: "#fFF",
    fontSize: 18,
    padding: 15,
    marginTop: 30,
    borderRadius: 5,
  },

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

  textSkill: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
