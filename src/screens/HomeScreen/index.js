import React, { useState, useEffect, useCallback } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import styles from "./styles";
import { pontosTuristicosIniciais } from "../../data/pontosTuristicosDB";

export default function HomeScreen({ navigation, route }) {
  const [pontosTuristicos, setPontosTuristicos] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("passeios");
  const [favoritos, setFavoritos] = useState([]);

  const emailUsuario = route.params?.email; // recebe email do usuário logado

  const carregarDados = async () => {
    try {
      const dados = await AsyncStorage.getItem("pontosTuristicos");
      if (dados === null) {
        await AsyncStorage.setItem(
          "pontosTuristicos",
          JSON.stringify(pontosTuristicosIniciais)
        );
        setPontosTuristicos(pontosTuristicosIniciais);
      } else {
        setPontosTuristicos(JSON.parse(dados));
      }
    } catch (erro) {
      console.log("Erro ao carregar dados:", erro);
    }
  };

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

  useEffect(() => {
    carregarDados();
  }, []);

  useFocusEffect(
    useCallback(() => {
      carregarDados();
      carregarFavoritos();
    }, [])
  );

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

  const pontosFiltrados = pontosTuristicos.filter(
    (ponto) => ponto.categoria === categoriaSelecionada
  );

  const isFavorito = (id) => {
    return favoritos.some((fav) => fav.id === id);
  };

  // Função para alternar favorito
  const toggleFavorito = async (ponto) => {
    let novosFavoritos;
    if (isFavorito(ponto.id)) {
      novosFavoritos = favoritos.filter((fav) => fav.id !== ponto.id);
    } else {
      novosFavoritos = [...favoritos, ponto];
    }
    setFavoritos(novosFavoritos);
    await AsyncStorage.setItem(
      `favoritos_${emailUsuario}`,
      JSON.stringify(novosFavoritos)
    );
  };

  function renderItem({ item }) {
    const imageSource = item.imageUri
      ? { uri: item.imageUri }
      : getImageFromKey(item.imageKey);

    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.getParent()?.navigate("Details", {
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
          onPress={() => toggleFavorito(item)}
        >
          <Feather
            name="heart"
            size={24}
            color={isFavorito(item.id) ? "red" : "gray"}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.categoriasContainer}>
        {["passeios", "restaurantes", "outros"].map((categoria) => (
          <TouchableOpacity
            key={categoria}
            style={[
              styles.tabButton,
              categoriaSelecionada === categoria && styles.tabButtonAtivo,
            ]}
            onPress={() => setCategoriaSelecionada(categoria)}
          >
            <Text
              style={[
                styles.tabTexto,
                categoriaSelecionada === categoria && styles.tabTextoAtivo,
              ]}
            >
              {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={pontosFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              Nenhum ponto encontrado nesta categoria.
            </Text>
          </View>
        )}
        contentContainerStyle={{ flexGrow: 1 }}
        scrollEnabled={pontosFiltrados.length > 0}
      />
    </View>
  );
}
