import * as React from "react";
import { SafeAreaView, View, Pressable, Text, TextInput } from "react-native";

import styles from "./styles/landingStyles";

export default function LandingScreen({ navigation }) {
  const [username, onChangeUsername] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  return (
    <>
      <SafeAreaView style={styles.bgColor}></SafeAreaView>
      <View style={[styles.body, styles.bgColor]}>
        <View style={styles.heading}>
          <Text style={[styles.header, styles.textColor]}>TODO Done</Text>
        </View>
        <View style={styles.content}>
          <TextInput
            onChangeText={onChangeUsername}
            value={username}
            placeholder="Username"
            placeholderTextColor="#b3c9e3"
            style={[styles.textColor, styles.signIn]}
          />
          <TextInput
            onChangeText={onChangePassword}
            value={password}
            placeholder="Password"
            style={[styles.textColor, styles.signIn]}
            placeholderTextColor="#b3c9e3"
            secureTextEntry={true}
          />
          <Pressable onPress={
            () => {
              if (username=="ChaseR" && password !=="") {
                onChangeUsername("");
                onChangePassword("");
                navigation.navigate("Home");
              }
            }}>
            <Text style={[styles.signIn, styles.signInLink]}>Sign In </Text>
          </Pressable>
        </View>
      </View>
      <View style={[styles.footer, styles.bgColor]}>
        <Text style={[styles.textColor, styles.footerText]}>
          Don't have an account?{" "}
        </Text>
        <Pressable onPress={() => navigation.navigate("CreateAccount")}>
          <Text style={[styles.footerLink, styles.footerText]}>Create One</Text>
        </Pressable>
      </View>
    </>
  );
}
