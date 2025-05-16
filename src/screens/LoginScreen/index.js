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
import extraStyles from "../RegisterScreen/styles";
import registerStyle from "./styles";
import colors from "../../colors";

export default function LoginScreen({ navigation }) {
  const [pass, setPass] = useState("");

  const [showPass, setShowPass] = useState(false);

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

            <TouchableOpacity style={styles.button}>
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
