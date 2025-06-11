import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import PerfilScreen from "../screens/PerfilScreen";
import PlaceRegisterScreen from "../screens/PlaceRegisterScreen";
import { Feather } from "@expo/vector-icons";
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
          } else if (route.name === "PlaceRegister") {
            iconName = "plus";
          }
          return <Feather name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.softBlack,
        tabBarInactiveTintColor: colors.offWhite,
        tabBarStyle: {
          backgroundColor: colors.forestGreen,
        },
        headerStyle: {
          backgroundColor: colors.forestGreen,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: true }}
      />
      <Tab.Screen name="PlaceRegister" component={PlaceRegisterScreen} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />
    </Tab.Navigator>
  );
}
