import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";

import styles from "./styles";

import * as ImagePicker from "expo-image-picker";

export default function PlaceRegisterScreen() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert("Permissão para acessar a galeria é necessária!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleRegister = () => {
    if (!name || !description || !image) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    console.log("Lugar cadastrado:", { name, description, image });

    Alert.alert("Sucesso", "Lugar cadastrado com sucesso!");

    setName("");
    setDescription("");
    setImage(null);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastro de Lugar</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do lugar"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Descrição"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <Text style={styles.imageText}>Selecionar Imagem</Text>
        )}
      </TouchableOpacity>

      <Button title="Cadastrar" onPress={handleRegister} color="#1e90ff" />
    </ScrollView>
  );
}
