import React, { useState, useEffect, useCallback } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import styles from "./styles";

export default function FavoritosScreen({ navigation, route }) {
  const [favoritos, setFavoritos] = useState([]);
  const emailUsuario = route.params?.email;

  const carregarFavoritos = async () => {
    try {
      const dados = await AsyncStorage.getItem(`favoritos_${emailUsuario}`);
      if (dados) {
        setFavoritos(JSON.parse(dados));
      } else {
        setFavoritos([]);
      }
    } catch (error) {
      console.log("Erro ao carregar favoritos:", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      carregarFavoritos();
    }, [emailUsuario])
  );

  const removerFavorito = async (id) => {
    try {
      const novosFavoritos = favoritos.filter((fav) => fav.id !== id);
      setFavoritos(novosFavoritos);
      await AsyncStorage.setItem(
        `favoritos_${emailUsuario}`,
        JSON.stringify(novosFavoritos)
      );
    } catch (error) {
      console.log("Erro ao remover favorito:", error);
    }
  };

  function renderItem({ item }) {
    const imageSource = item.imageUri
      ? { uri: item.imageUri }
      : item.imageKey
      ? (() => {
          switch (item.imageKey) {
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
        })()
      : null;

    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate("Details", {
            ponto: {
              ...item,
              image: imageSource,
            },
          })
        }
      >
        <Text style={styles.title}>{item.titulo}</Text>
        <Image source={imageSource} style={styles.image} />
        <TouchableOpacity
          style={{ position: "absolute", top: 10, right: 10 }}
          onPress={() => removerFavorito(item.id)}
        >
          <Feather name="heart" size={24} color="red" />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={favoritos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Você não possui favoritos.</Text>
          </View>
        )}
        contentContainerStyle={{ flexGrow: 1 }}
        scrollEnabled={favoritos.length > 0}
      />
    </View>
  );
}
