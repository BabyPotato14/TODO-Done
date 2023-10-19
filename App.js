import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LandingScreen from "./content/landingScreen";
import CreateAccountScreen from "./content/accountCreationScreen";
import SettingsScreen from "./content/settingsScreen";
import HomeScreen from "./content/homeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, gestureEnabled: false, animation: 'none' }}
        initialRouteName="Landing"
      >
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
