import React from "react";
import { View, Text, Image, Button, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./styles";

export default function DetailsScreen({ route, navigation }) {
  const { ponto } = route.params;

  const imageSource = ponto.imageUri
    ? { uri: ponto.imageUri }
    : getImageFromKey(ponto.imageKey);

  if (!ponto) {
    return <Text>Dados do ponto não encontrados.</Text>;
  }

  const handleDelete = async () => {
    Alert.alert(
      "Confirmação",
      "Deseja realmente apagar este lugar?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Apagar",
          style: "destructive",
          onPress: async () => {
            try {
              const dadosExistentes = await AsyncStorage.getItem(
                "pontosTuristicos"
              );
              let pontos = dadosExistentes ? JSON.parse(dadosExistentes) : [];

              pontos = pontos.filter((p) => p.id !== ponto.id);

              await AsyncStorage.setItem(
                "pontosTuristicos",
                JSON.stringify(pontos)
              );

              Alert.alert("Sucesso", "Lugar apagado com sucesso!");

              navigation.reset({
                index: 0,
                routes: [
                  {
                    name: "MainTabs",
                    state: {
                      index: 0, // 0 é a aba Home no seu Tab Navigator
                      routes: [{ name: "Home" }],
                    },
                  },
                ],
              });
            } catch (error) {
              Alert.alert("Erro", "Não foi possível apagar o lugar.");
              console.log(error);
            }
          },
        },
      ],
      { cancelable: true }
    );
  };

  function getImageFromKey(key) {
    switch (key) {
      case "teatro":
        return require("../../assets/TeatroAmazonas.jpg");
      case "encontro":
        return require("../../assets/EncontroDasAguas.jpg");
      case "banzeiro":
        return require("../../assets/Banzeiro.jpg");
      case "pontaNegra":
        return require("../../assets/PontaNegra.jpg");
      case "caxiri":
        return require("../../assets/Caxiri.jpg");
      default:
        return null;
    }
  }

  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.title}>{ponto.titulo}</Text>
      <Text style={styles.descricao}>{ponto.descricao}</Text>

      <Button
        title="Editar"
        onPress={() =>
          navigation.navigate("PlaceRegister", { pontoParaEditar: ponto })
        }
      />
      <Button title="Apagar" color="red" onPress={handleDelete} />
    </View>
  );
}
