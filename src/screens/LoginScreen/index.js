import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
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

import styles from "./styles"; // Atualizei para styles para manter padrão com o card
import colors from "../../colors";

export default function LoginScreen({ navigation }) {
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleLogin = async () => {
    if (!email.trim() || !pass) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    try {
      const data = await AsyncStorage.getItem("dadosUsuario");
      if (data) {
        const user = JSON.parse(data);
        if (user.email === email && user.pass === pass) {
          navigation.replace("MainTabs");
        } else {
          Alert.alert("Erro", "Email ou senha incorretos.");
        }
      } else {
        Alert.alert("Erro", "Nenhum usuário registrado.");
      }
    } catch (error) {
      Alert.alert("Erro", "Erro ao tentar fazer login.");
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
              <Text style={styles.title}>Login</Text>

              <TextInput
                style={styles.input}
                placeholder="Email:"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
              />

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.passwordInput}
                  placeholder="Senha:"
                  value={pass}
                  onChangeText={setPass}
                  secureTextEntry={!showPass}
                />
                <TouchableOpacity onPress={() => setShowPass(!showPass)}>
                  <Feather
                    name={showPass ? "eye" : "eye-off"}
                    size={24}
                    color={colors.darkGreen}
                  />
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Entrar</Text>
              </TouchableOpacity>

              <Text style={styles.text}>Não tem uma conta?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text style={styles.registerText}>Cadastre-se aqui!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
