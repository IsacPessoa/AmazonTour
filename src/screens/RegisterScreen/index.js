import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";

import { Feather } from "@expo/vector-icons";

import styles from "../../styles";
import extraStyles from "./styles";

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cel, setCel] = useState("");
  const [pass, setPass] = useState("");
  const [confPass, setConfPass] = useState("");

  const [showPass, setShowPass] = useState(false);
  const [showConfPass, setShowConfPass] = useState(false);

  const handleSubmit = () => {
    if (!name.trim() || !email.trim() || !pass) {
      Alert.alert("Erro", "Por favor, preencha os campos obrigatórios!");
      return;
    }
    if (pass !== confPass) {
      Alert.alert("Erro", "As senhas não coincidem!");
      return;
    }

    Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 10 }}>
          <Image
            source={require("../../assets/Logo.png")}
            style={styles.image}
          />
          <View style={[styles.container, { backgroundColor: "#fff" }]}>
            <Text style={styles.title}>Dados Cadastrais</Text>

            <TextInput
              style={styles.input}
              placeholder="Nome:"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.input}
              placeholder="Email:"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              placeholder="Telefone:"
              value={cel}
              onChangeText={setCel}
              keyboardType="phone-pad"
            />
            <View style={extraStyles.inputContainer}>
              <TextInput
                style={extraStyles.input}
                placeholder="Senha:"
                value={pass}
                onChangeText={setPass}
                secureTextEntry={!showPass}
              />
              <TouchableOpacity
                style={extraStyles.showHideButton}
                onPress={() => setShowPass(!showPass)}
              >
                <Feather
                  name={showPass ? "eye" : "eye-off"}
                  size={24}
                  color="#003322"
                />
              </TouchableOpacity>
            </View>
            <View style={extraStyles.inputContainer}>
              <TextInput
                style={extraStyles.input}
                placeholder="Confirmar senha:"
                value={confPass}
                onChangeText={setConfPass}
                secureTextEntry={!showConfPass}
              />
              <TouchableOpacity
                style={extraStyles.showHideButton}
                onPress={() => setShowConfPass(!showConfPass)}
              >
                <Feather
                  name={showConfPass ? "eye" : "eye-off"}
                  size={24}
                  color="#003322"
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Registrar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
