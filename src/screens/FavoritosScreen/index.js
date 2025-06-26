import React, { useState, useCallback, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import styles from "./styles";

const AnimatedView = Animatable.createAnimatableComponent(View);

export default function FavoritosScreen({ navigation, route }) {
  const [favoritos, setFavoritos] = useState([]);
  const [animarLista, setAnimarLista] = useState(false);
  const emailUsuario = route.params?.email;

  const carregarFavoritos = async () => {
    try {
      const dadosFavoritos = await AsyncStorage.getItem(
        `favoritos_${emailUsuario}`
      );
      const dadosPontos = await AsyncStorage.getItem("pontosTuristicos");

      const favoritosSalvos = dadosFavoritos ? JSON.parse(dadosFavoritos) : [];
      const pontos = dadosPontos ? JSON.parse(dadosPontos) : [];

      const favoritosAtualizados = favoritosSalvos
        .map((fav) => pontos.find((ponto) => ponto.id === fav.id))
        .filter(Boolean);

      setFavoritos(favoritosAtualizados);

      if (
        JSON.stringify(favoritosAtualizados) !== JSON.stringify(favoritosSalvos)
      ) {
        await AsyncStorage.setItem(
          `favoritos_${emailUsuario}`,
          JSON.stringify(favoritosAtualizados)
        );
      }

      setAnimarLista(true);
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
      setAnimarLista(true);
    } catch (error) {
      console.log("Erro ao remover favorito:", error);
    }
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

  function renderItem({ item }) {
    const imageSource = item.imageUri
      ? { uri: item.imageUri }
      : getImageFromKey(item.imageKey);

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
          <FontAwesome name="heart" size={24} color="red" />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <AnimatedView
        animation={animarLista ? "fadeInUp" : undefined}
        duration={600}
        onAnimationEnd={() => setAnimarLista(false)}
        useNativeDriver
        style={{ flex: 1 }}
      >
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
      </AnimatedView>
    </View>
  );
}
