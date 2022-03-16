import react from "react";
import { useState } from "react";
import { View, Text, StyleSheet, TextInput, FlatList } from "react-native";
import Button from "../Components/Button";
import SkillCard from "../Components/SkillCard";

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

      <Button onPress={handleAddNewSkill} />

      <Text style={[styles.title, { marginVertical: 40 }]}>My Skills</Text>

      <FlatList
        data={mySkills}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <SkillCard skill={item} />}
      />
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
});
