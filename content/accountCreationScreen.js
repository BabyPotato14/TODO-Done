import * as React from "react";
import { SafeAreaView, Pressable, View, Text, TextInput } from "react-native";

import styles from "./styles/landingStyles";

export default function CreateAccountScreen({ navigation }) {
  const [username, onChangeUsername] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [passwordConfirm, onChangePasswordConfirm] = React.useState("");

  return (
    <>
      <SafeAreaView style={styles.bgColor}></SafeAreaView>
      
      <View style={[styles.body, styles.bgColor]}>
        {/* Flex of 2 */}
        <View style={styles.backButtonContainer}>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>Back</Text>
        </Pressable>
        </View>
        {/* Flex of 8 */}
        <View style={styles.heading}>
          <Text style={styles.header}>Create Account</Text>
        </View>
        {/* Flex of 10 */}
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
            placeholderTextColor="#b3c9e3"
            style={[styles.textColor, styles.signIn]}
            secureTextEntry={true}
          />
          <TextInput
            onChangeText={onChangePasswordConfirm}
            value={passwordConfirm}
            placeholder="Confirm Password"
            placeholderTextColor="#b3c9e3"
            style={[styles.textColor, styles.signIn]}
            secureTextEntry={true}
          />
          <Pressable onPress={() => navigation.navigate("Home")}>
            <Text style={[styles.signIn, styles.signInLink]}>Sign Up</Text>
          </Pressable>
        </View>
      </View>

      <View style={[styles.footer, styles.bgColor]}></View>
    </>
  );
}
