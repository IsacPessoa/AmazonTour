import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
  Vibration,
} from "react-native";

import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./styles";

export default function PlaceRegisterScreen({ route, navigation }) {
  const pontoParaEditar = route.params?.pontoParaEditar || null;

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [categoria, setCategoria] = useState("passeios");

  useEffect(() => {
    if (pontoParaEditar) {
      setName(pontoParaEditar.titulo);
      setDescription(pontoParaEditar.descricao);
      setImage(pontoParaEditar.imageUri);
      setCategoria(pontoParaEditar.categoria);
    }
  }, [pontoParaEditar]);

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

  const handleRegister = async () => {
    if (!name || !description || !image) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    try {
      const dadosExistentes = await AsyncStorage.getItem("pontosTuristicos");
      let pontos = dadosExistentes ? JSON.parse(dadosExistentes) : [];

      if (pontoParaEditar) {
        // Atualiza o ponto existente
        pontos = pontos.map((p) =>
          p.id === pontoParaEditar.id
            ? {
                ...p,
                titulo: name,
                descricao: description,
                imageUri: image,
                categoria,
              }
            : p
        );
      } else {
        // Adiciona novo ponto
        pontos.push({
          id: Date.now().toString(),
          titulo: name,
          descricao: description,
          imageUri: image,
          categoria,
        });
      }

      await AsyncStorage.setItem("pontosTuristicos", JSON.stringify(pontos));
      Vibration.vibrate(500);
      Alert.alert(
        "Sucesso",
        pontoParaEditar
          ? "Lugar atualizado com sucesso!"
          : "Lugar cadastrado com sucesso!"
      );

      navigation.reset({
        index: 0,
        routes: [
          {
            name: "MainTabs",
            state: {
              index: 0,
              routes: [{ name: "Home" }],
            },
          },
        ],
      });
    } catch (error) {
      Alert.alert("Erro", "Não foi possível salvar o lugar.");
      console.log(error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>
        {pontoParaEditar ? "Editar Lugar" : "Cadastro de Lugar"}
      </Text>

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

      <View style={styles.categoriaPickerContainer}>
        <Text style={styles.label}>Categoria:</Text>
        <Picker
          selectedValue={categoria}
          onValueChange={(itemValue) => setCategoria(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Passeios" value="passeios" />
          <Picker.Item label="Restaurantes" value="restaurantes" />
          <Picker.Item label="Outros" value="outros" />
        </Picker>
      </View>

      <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <Text style={styles.imageText}>Selecionar Imagem</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>
          {pontoParaEditar ? "Atualizar" : "Cadastrar"}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
