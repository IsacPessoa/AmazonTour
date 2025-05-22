import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Alert, View, Text, TouchableOpacity } from "react-native";
import profileStyle from "./styles";

export default function PerfilScreen({ navigation }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await AsyncStorage.getItem("dadosUsuario");
        if (data) {
          setUserData(JSON.parse(data));
        }
      } catch {
        Alert.alert("Erro", "Não foi possível carregar dados.");
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem("dadosUsuario");
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };

  if (!userData) {
    return (
      <View style={profileStyle.container}>
        <Text>Nenhum dado encontrado.</Text>
      </View>
    );
  }

  return (
    <View style={profileStyle.container}>
      <Text style={profileStyle.title}>Perfil do Usuário</Text>
      <Text style={profileStyle.label}>
        👤 Nome: <Text style={profileStyle.value}>{userData.name}</Text>
      </Text>
      <Text style={profileStyle.label}>
        📧 Email: <Text style={profileStyle.value}>{userData.email}</Text>
      </Text>
      {userData.cel ? (
        <Text style={profileStyle.label}>
          📱 Telefone: <Text style={profileStyle.value}>{userData.cel}</Text>
        </Text>
      ) : null}

      <TouchableOpacity style={profileStyle.button} onPress={handleLogout}>
        <Text style={profileStyle.text}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
