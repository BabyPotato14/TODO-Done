import * as React from "react";
import {
  Pressable,
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  Modal,
  Dimensions,
} from "react-native";
import styles from "./styles/headerStyles";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import ColorThemes from "./styles/colors";

const windowWidth = Dimensions.get("window").width;

export default function SettingsScreen({ navigation }) {
  const [username, changeUsername] = React.useState("ChaseR");
  const [newUsername, changeNewUsername] = React.useState("");
  const [changingUsername, displayChangingUsername] = React.useState(false);

  const [currentPassword, changeCurrentPassword] = React.useState("");
  const [newPassword, changeNewPassword] = React.useState("");
  const [confirmNewPassword, changeConfirmNewPassword] = React.useState("");
  const [changingPassword, displayChangingPassword] = React.useState("");

  const [signingOut, updateSigningOut] = React.useState(false);
  return (
    <>
      <SafeAreaView style={styles.defualtStyling}></SafeAreaView>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Profile</Text>
        </View>

        <View style={styles.settingsBody}>
          <Text style={styles.settingsText}>Signed in as {username}</Text>
          <Pressable style={styles.settingsButtonGrey}>
            <Button
              title="Change Username"
              color="#666"
              style={{ fontSize: 16, textAlign: "center" }}
              onPress={() => {
                displayChangingUsername(true);
              }}
            />
          </Pressable>
          <Pressable style={styles.settingsButtonGrey}>
            <Button
              title="Change Password"
              color="#666"
              style={{ fontSize: 16, textAlign: "center" }}
              onPress={() => {
                displayChangingPassword(true);
              }}
            />
          </Pressable>

          <Pressable style={styles.settingsButtonRed}>
            <Button
              title="Sign Out"
              color="red"
              style={{ fontSize: 16, textAlign: "center" }}
              onPress={() => {
                updateSigningOut(true);
              }}
            />
          </Pressable>
        </View>

        <View style={styles.footer}>
          <MaterialIcons
            name="list-alt"
            size={windowWidth / 6}
            color={ColorThemes.unselected}
            onPress={() => {
              navigation.navigate("Home");
            }}
          />
          <MaterialIcons
            name="account-box"
            size={windowWidth / 6}
            color={ColorThemes.main[3]}
          />
        </View>
      </View>

      <Modal animationType="none" transparent={true} visible={changingUsername}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.taskInputContainer}>
              <TextInput
                onChangeText={changeNewUsername}
                color="#666"
                style={styles.taskInput}
                value={newUsername}
                placeholder="New Username"
                placeholderTextColor="#999"
                hitSlop={{ top: 25, bottom: 25, left: 15, right: 15 }}
              />
            </View>

            <View style={styles.modalButtonContainer}>
              <Pressable style={styles.modalButtonAdd}>
                <Button
                  title="Update Username"
                  onPress={() => {
                    changeUsername(newUsername);
                    changeNewUsername("");
                    displayChangingUsername(false);
                  }}
                  color="green"
                />
              </Pressable>
              <View style={styles.modalButtonGap}></View>
              <Pressable style={styles.modalButtonCancel}>
                <Button
                  title="Cancel"
                  color="red"
                  onPress={() => {
                    displayChangingUsername(false);
                  }}
                />
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <Modal animationType="none" transparent={true} visible={signingOut}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.taskInputContainer}>
              <Text
                style={{ fontSize: 16, color: "#666", textAlign: "center" }}
              >
                Sign Out?
              </Text>
            </View>

            <View style={styles.modalButtonContainer}>
              <Pressable style={styles.modalButtonCancel}>
                <Button
                  title="Sign Out"
                  color="red"
                  onPress={() => {
                    updateSigningOut(false);
                    navigation.navigate("Landing");
                  }}
                />
              </Pressable>
              <View style={styles.modalButtonGap}></View>
              <Pressable style={styles.modalButtonAdd}>
                <Button
                  title="Cancel"
                  onPress={() => {
                    updateSigningOut(false);
                  }}
                  color="green"
                />
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <Modal animationType="none" transparent={true} visible={changingPassword}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.taskInputContainer}>
              <TextInput
                onChangeText={changeCurrentPassword}
                color="#666"
                style={styles.taskInput}
                value={currentPassword}
                placeholder="Current Password"
                placeholderTextColor="#999"
                hitSlop={{ top: 25, bottom: 25, left: 15, right: 15 }}
                secureTextEntry={true}
              />
            </View>
            <View style={styles.taskInputContainer}>
              <TextInput
                onChangeText={changeNewPassword}
                color="#666"
                style={styles.taskInput}
                value={newPassword}
                placeholder="New Password"
                placeholderTextColor="#999"
                hitSlop={{ top: 25, bottom: 25, left: 15, right: 15 }}
                secureTextEntry={true}
              />
            </View>
            <View style={styles.taskInputContainer}>
              <TextInput
                onChangeText={changeConfirmNewPassword}
                color="#666"
                style={styles.taskInput}
                value={confirmNewPassword}
                placeholder="Confirm Password"
                placeholderTextColor="#999"
                hitSlop={{ top: 25, bottom: 25, left: 15, right: 15 }}
                secureTextEntry={true}
              />
            </View>

            <View style={styles.modalButtonContainer}>
              <Pressable style={styles.modalButtonAdd}>
                <Button
                  title="Update Password"
                  onPress={() => {
                    changeCurrentPassword("");
                    changeNewPassword("");
                    changeConfirmNewPassword("");
                    displayChangingPassword(false);
                  }}
                  color="green"
                />
              </Pressable>
              <View style={styles.modalButtonGap}></View>
              <Pressable style={styles.modalButtonCancel}>
                <Button
                  title="Cancel"
                  color="red"
                  onPress={() => {
                    changeCurrentPassword("");
                    changeNewPassword("");
                    changeConfirmNewPassword("");
                    displayChangingPassword(false);
                  }}
                />
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}
