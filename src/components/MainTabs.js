import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import PerfilScreen from "../screens/PerfilScreen";
import { Feather } from "@expo/vector-icons"; // ou Ionicons, MaterialIcons etc.
import colors from "../colors";

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Perfil") {
            iconName = "user";
          }

          return <Feather name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.softBlack,
        tabBarInactiveTintColor: colors.gray,
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: true }}
      />
      <Tab.Screen name="Perfil" component={PerfilScreen} />
    </Tab.Navigator>
  );
}
