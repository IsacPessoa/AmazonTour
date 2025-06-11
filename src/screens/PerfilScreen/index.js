import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Alert, View, Text, TouchableOpacity, ScrollView } from "react-native";
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

  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };

  const handleDeleteAccount = async () => {
    Alert.alert("Apagar Conta", "Tem certeza que deseja apagar sua conta?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Sim, apagar",
        style: "destructive",
        onPress: async () => {
          await AsyncStorage.removeItem("dadosUsuario");
          navigation.reset({
            index: 0,
            routes: [{ name: "Login" }],
          });
        },
      },
    ]);
  };

  const goToFavorites = () => {
    navigation.navigate("Favoritos"); // nome da sua tela de favoritos
  };

  // Função para pegar as iniciais do nome
  const getInitials = (name) => {
    if (!name) return "";
    const names = name.trim().split(" ");
    if (names.length === 1) return names[0].charAt(0).toUpperCase();
    return (names[0].charAt(0) + names[1].charAt(0)).toUpperCase();
  };

  // Função para formatar telefone (99) 99999-9999
  const formatPhone = (phone) => {
    if (!phone) return "";
    // Remove tudo que não é número
    const digits = phone.replace(/\D/g, "");
    if (digits.length === 11) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
    }
    return phone; // Retorna original se não tiver 11 dígitos
  };

  if (!userData) {
    return (
      <View style={profileStyle.container}>
        <Text style={profileStyle.message}>Nenhum dado encontrado.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={profileStyle.scrollContainer}>
      <View style={profileStyle.container}>
        <View style={profileStyle.avatarContainer}>
          <View style={profileStyle.avatar}>
            <Text style={profileStyle.avatarText}>
              {getInitials(userData.name)}
            </Text>
          </View>
        </View>

        <Text style={profileStyle.title}>Perfil do Usuário</Text>

        <View style={profileStyle.card}>
          <View style={profileStyle.infoRow}>
            <Text style={profileStyle.label}>Nome</Text>
            <Text style={profileStyle.value}>{userData.name}</Text>
          </View>

          <View style={profileStyle.infoRow}>
            <Text style={profileStyle.label}>Email</Text>
            <Text style={profileStyle.value}>{userData.email}</Text>
          </View>

          {userData.cel && (
            <View style={profileStyle.infoRow}>
              <Text style={profileStyle.label}>Telefone</Text>
              <Text style={profileStyle.value}>
                {formatPhone(userData.cel)}
              </Text>
            </View>
          )}
        </View>

        <TouchableOpacity
          style={profileStyle.secondaryButton}
          onPress={goToFavorites}
        >
          <Text style={profileStyle.secondaryButtonText}>Favoritos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={profileStyle.secondaryButton}
          onPress={handleLogout}
        >
          <Text style={profileStyle.secondaryButtonText}>Sair</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={profileStyle.deleteButton}
          onPress={handleDeleteAccount}
        >
          <Text style={profileStyle.deleteButtonText}>Apagar Conta</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
