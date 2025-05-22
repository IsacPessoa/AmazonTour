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

import styles from "../../styles";
import extraStyles from "./styles";
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
      Alert.alert("Sucesso", "Cadastro salvo com sucesso!");

      navigation.navigate("Login");

      setName("");
      setEmail("");
      setCel("");
      setPass("");
      setConfPass("");
    } catch (error) {
      Alert.alert("Erro", "Falha ao salvar os dados!");
      console.error(error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {/* Ativa o scroll da tela */}
        <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 10 }}>
          <Image
            source={require("../../assets/Logo.png")}
            style={styles.image}
          />
          {/* Campo nome */}
          <View style={[styles.container, { backgroundColor: "#fff" }]}>
            <Text style={styles.title}>Dados Cadastrais</Text>
            <View style={{ width: "100%" }}>
              <Text style={extraStyles.text}>
                Nome <Text style={{ color: "red" }}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Digite seu nome"
                value={name}
                onChangeText={setName}
              />
            </View>
            {/* Campo Email */}
            <View style={{ width: "100%" }}>
              <Text style={extraStyles.text}>
                Email <Text style={{ color: "red" }}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Digite seu email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
              />
            </View>
            {/* Campo celular */}
            <View style={{ width: "100%", marginBottom: 10 }}>
              <Text style={extraStyles.text}>Celular</Text>
              <MaskedTextInput
                style={styles.input}
                placeholder="(11) 11111-1111"
                mask="(99) 99999-9999"
                keyboardType="phone-pad"
                value={cel}
                onChangeText={(text, rawText) => setCel(rawText)}
              />
            </View>
            {/* Campo senha */}
            <View style={extraStyles.inputContainer}>
              <Text style={extraStyles.label}>
                Senha <Text style={{ color: "red" }}>*</Text>
              </Text>
              <TextInput
                style={extraStyles.input}
                placeholder="digite sua senha"
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
                  color={colors.darkGreen}
                />
              </TouchableOpacity>
            </View>
            {/* Campo confirmação de senha */}
            <View style={extraStyles.inputContainer}>
              <Text style={extraStyles.label}>
                Confirmar senha <Text style={{ color: "red" }}>*</Text>
              </Text>
              <TextInput
                style={extraStyles.input}
                placeholder="confirme sua senha"
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
                  color={colors.darkGreen}
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Registrar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button,
                { backgroundColor: "#AA0000", marginTop: 10 },
              ]}
              onPress={async () => {
                try {
                  await AsyncStorage.clear();
                  Alert.alert("Sucesso", "Dados removidos com sucesso!");
                } catch (error) {
                  Alert.alert("Erro", "Falha ao remover os dados.");
                  console.error(error);
                }
              }}
            >
              <Text style={styles.buttonText}>Apagar Dados</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
