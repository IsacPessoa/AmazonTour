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

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Feather } from "@expo/vector-icons";

import styles from "./styles";
import { MaskedTextInput } from "react-native-mask-text";
import colors from "../../colors";

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cel, setCel] = useState("");
  const [pass, setPass] = useState("");
  const [confPass, setConfPass] = useState("");

  const [showPass, setShowPass] = useState(false);
  const [showConfPass, setShowConfPass] = useState(false);

  const handleSubmit = async () => {
    if (!name.trim() || !email.trim() || !pass) {
      Alert.alert("Erro", "Por favor, preencha os campos obrigatórios!");
      return;
    }

    if (pass !== confPass) {
      Alert.alert("Erro", "As senhas não coincidem!");
      return;
    }

    const userData = { name, email, cel, pass };

    try {
      await AsyncStorage.setItem("dadosUsuario", JSON.stringify(userData));
      Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
      navigation.navigate("Login");

      setName("");
      setEmail("");
      setCel("");
      setPass("");
      setConfPass("");
    } catch (error) {
      Alert.alert("Erro", "Erro ao salvar os dados.");
      console.error(error);
    }
  };

  const clearStorage = async () => {
    try {
      await AsyncStorage.clear();
      Alert.alert("Sucesso", "Todos os dados foram apagados!");
    } catch (error) {
      Alert.alert("Erro", "Não foi possível apagar os dados.");
      console.error(error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboardView}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.container}>
            <Image
              source={require("../../assets/Logo.png")}
              style={styles.image}
            />

            <View style={styles.card}>
              <Text style={styles.title}>Cadastro</Text>

              <TextInput
                style={styles.input}
                placeholder="Nome:"
                value={name}
                onChangeText={setName}
              />

              <TextInput
                style={styles.input}
                placeholder="Email:"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />

              <MaskedTextInput
                style={styles.input}
                placeholder="Celular:"
                mask="(99) 99999-9999"
                keyboardType="phone-pad"
                value={cel}
                onChangeText={(text, rawText) => setCel(rawText)}
              />

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Senha:"
                  value={pass}
                  onChangeText={setPass}
                  secureTextEntry={!showPass}
                />
                <TouchableOpacity
                  style={styles.showHideButton}
                  onPress={() => setShowPass(!showPass)}
                >
                  <Feather
                    name={showPass ? "eye" : "eye-off"}
                    size={24}
                    color={colors.darkGreen}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Confirmar senha:"
                  value={confPass}
                  onChangeText={setConfPass}
                  secureTextEntry={!showConfPass}
                />
                <TouchableOpacity
                  style={styles.showHideButton}
                  onPress={() => setShowConfPass(!showConfPass)}
                >
                  <Feather
                    name={showConfPass ? "eye" : "eye-off"}
                    size={24}
                    color={colors.darkGreen}
                  />
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Registrar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, styles.clearButton]}
                onPress={clearStorage}
              >
                <Text style={[styles.buttonText, styles.clearButtonText]}>
                  Apagar todos os dados
                </Text>
              </TouchableOpacity>

              <Text style={styles.text}>Já tem uma conta?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.registerText}>Voltar ao login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
