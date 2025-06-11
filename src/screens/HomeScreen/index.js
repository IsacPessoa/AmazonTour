import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { useEffect, useState, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import styles from "./styles";
import { pontosTuristicosIniciais } from "../../data/pontosTuristicosDB";

export default function HomeScreen({ navigation }) {
  const [pontosTuristicos, setPontosTuristicos] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("passeios");

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

  useEffect(() => {
    carregarDados(); // apenas na primeira vez que a tela é montada
  }, []);

  useFocusEffect(
    useCallback(() => {
      carregarDados(); // toda vez que a tela voltar a estar em foco
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
