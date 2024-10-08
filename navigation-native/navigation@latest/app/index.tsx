import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Homescreen from "./mytabs/homescreen";
import SettingsScreen from "./mytabs/SettingsScreen";
import { Ionicons } from "@expo/vector-icons";
import MovieScreen from "./movies/MovieScreen";
import Addtodo from "./todos/Addtodo";
import LoginForm from "./todos/LoginForm";

const Tab = createBottomTabNavigator();

export default function Index() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "ios-list" : "ios-list-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="Movie"
          component={MovieScreen}
          options={{ tabBarBadge: 3 }}
        />
        <Tab.Screen name="Login" component={LoginForm} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
