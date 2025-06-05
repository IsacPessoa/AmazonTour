import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import styles from "./styles";

export default function DetailsScreen({ route }) {
  const { ponto } = route.params;

  if (!ponto) {
    return <Text>Dados do ponto não encontrados.</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={ponto.image} style={styles.image} />
      <Text style={styles.title}>{ponto.titulo}</Text>
      <Text style={styles.descricao}>{ponto.descricao}</Text>
    </ScrollView>
  );
}
