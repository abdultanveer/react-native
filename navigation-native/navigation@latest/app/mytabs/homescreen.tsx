import React from "react";
import { Button, Text, View } from "react-native";
//https://reactnavigation.org/docs/tab-based-navigation
function Homescreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
}

export default Homescreen;
