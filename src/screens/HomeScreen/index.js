import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./styles";
import { pontosTuristicosIniciais } from "../../data/pontosTuristicosDB";

export default function HomeScreen({ navigation }) {
  const [pontosTuristicos, setPontosTuristicos] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("passeios");

  useEffect(() => {
    async function carregarDados() {
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
    }
    carregarDados();
  }, []);

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
        return require("../../assets/TeatroAmazonas.jpg"); // coloque uma imagem fallback genérica
    }
  }

  const pontosFiltrados = pontosTuristicos.filter(
    (ponto) => ponto.categoria === categoriaSelecionada
  );

  function renderItem({ item }) {
    const imageSource = getImageFromKey(item.imageKey);

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
        <Image source={imageSource} style={styles.image} />
        <Text style={styles.title}>{item.titulo}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.categoriasContainer}>
        {["passeios", "restaurantes"].map((categoria) => (
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
      />
    </View>
  );
}
