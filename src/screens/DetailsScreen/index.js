import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from "react-native";
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
                      index: 0,
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
    <SafeAreaView style={styles.container}>
      {/* Botão Voltar simples */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>← Voltar</Text>
      </TouchableOpacity>

      <Image source={imageSource} style={styles.image} />
      <Text style={styles.title}>{ponto.titulo}</Text>
      <Text style={styles.descricao}>{ponto.descricao}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate("PlaceRegister", { pontoParaEditar: ponto })
          }
        >
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
          <Text style={styles.deleteButtonText}>Apagar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
