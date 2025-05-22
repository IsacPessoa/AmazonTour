import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import styles from "./styles";

export default function HomeScreen({ navigation }) {
  const pontosTuristicos = [
    {
      id: "1",
      titulo: "Teatro Amazonas",
      image: require("../../assets/TeatroAmazonas.jpg"),
      descricao: "Um teatro histórico e símbolo da cidade de Manaus.",
    },
    {
      id: "2",
      titulo: "Encontro das Águas",
      image: require("../../assets/EncontroDasAguas.jpg"),
      descricao: "Confluência dos rios Negro e Solimões.",
    },
  ];

  function renderItem({ item }) {
    return (
      <View>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("Details", { ponto: item })}
        >
          <Image source={item.image} style={styles.image} />
          <Text style={styles.title}>{item.titulo}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={pontosTuristicos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}
