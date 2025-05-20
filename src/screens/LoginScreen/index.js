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

import styles from "../../styles";
import extraStyles from "../RegisterScreen/styles";
import registerStyle from "./styles";
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
          navigation.navigate("Perfil");
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
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 10 }}>
          <Image
            source={require("../../assets/Logo.png")}
            style={styles.image}
          />
          <View style={[styles.container, { backgroundColor: colors.white }]}>
            <Text style={styles.title}>Login</Text>

            <TextInput
              style={styles.input}
              placeholder="Email:"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
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
                style={registerStyle.showHideButton}
                onPress={() => setShowPass(!showPass)}
              >
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
              <Text style={registerStyle.registerText}>Registre-se aqui!</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
