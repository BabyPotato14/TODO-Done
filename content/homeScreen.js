import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  FlatList,
  Dimensions,
  Pressable,
  Modal,
  Button,
} from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import ColorThemes from "./styles/colors";
import styles from "./styles/headerStyles";

const windowWidth = Dimensions.get("window").width;

export default function HomeScreen({ navigation }) {
  const [deleteModal, displayDeleteModal] = useState(false);
  const [removingItemId, setRemovingItemId] = useState("0");
  const [listText, changeListText] = useState("");
  const [displayModal, setModalDisplay] = useState(false);
  const [todo, addTodo] = useState([
    { id: "0", text: "Finish math homework", checked: false },
    { id: "1", text: "Do the dishes", checked: false },
  ]);
  const removeItem = (id) => {
    let updatedTodo = todo.filter(function (item) {
      return item.id !== id;
    });
    addTodo(updatedTodo);
  };
  const [idx, incr] = useState(2);
  const addElement = () => {
    if (listText !== "") {
      let newArray = [...todo, { id: idx, text: listText }];
      incr(idx + 1);
      addTodo(newArray);
      changeListText("");
    }
    setModalDisplay(false);
  };
  const checkItem = (id) => {
    let placeholderArray = [];
    for (i = 0; i < todo.length; i++) {
      let placeholderData = todo[i];
      if (todo[i].id == id) {
        placeholderData.checked = !placeholderData.checked;
      }
      placeholderArray.push(placeholderData);
    }
    addTodo(placeholderArray);
  };

  return (
    <>
      <SafeAreaView style={styles.defualtStyling}></SafeAreaView>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.headerText}>TODO</Text>
        </View>

        <View style={styles.body}>
          <View style={styles.list}>
            <FlatList
              keyExtractor={(item) => item.id}
              data={todo}
              renderItem={(item) => (
                <View>
                  {!item.item.checked ? (
                    <View style={styles.taskItem}>
                      <MaterialCommunityIcons
                        name="checkbox-blank-outline"
                        size={26}
                        color="white"
                        style={styles.taskBox}
                        onPress={() => {
                          checkItem(item.item.id);
                        }}
                      />
                      <Text
                        style={styles.taskText}
                        delayLongPress={10}
                        onLongPress={() => {
                          setRemovingItemId(item.item);
                          displayDeleteModal(true);
                        }}
                      >
                        {item.item.text}
                      </Text>
                    </View>
                  ) : null}

                  {item.item.checked ? (
                    <View style={styles.taskItem}>
                      <MaterialCommunityIcons
                        name="checkbox-outline"
                        size={26}
                        color="white"
                        style={styles.taskBox}
                        onPress={() => {
                          checkItem(item.item.id);
                        }}
                      />
                      <Text
                        style={[
                          styles.taskText,
                          {
                            textDecorationLine: "line-through",
                            textDecorationStyle: "solid",
                          },
                        ]}
                        delayLongPress={10}
                        onLongPress={() => {
                          setRemovingItemId(item.item);
                          displayDeleteModal(true);
                        }}
                      >
                        {item.item.text}
                      </Text>
                    </View>
                  ) : null}
                </View>
              )}
            />
          </View>

          <Pressable
            style={styles.menu}
            onPress={() => {
              changeListText("");
              setModalDisplay(true);
            }}
          >
            <MaterialIcons
              name="add-circle"
              size={windowWidth / 5}
              color={ColorThemes.main[3]}
            />
          </Pressable>
        </View>

        <View style={styles.footer}>
          <MaterialIcons
            name="list-alt"
            size={windowWidth / 6}
            color={ColorThemes.main[3]}
          />
          <MaterialIcons
            onPress={() => {
              navigation.navigate("Settings");
            }}
            name="account-box"
            size={windowWidth / 6}
            color={ColorThemes.unselected}
          />
        </View>
      </View>

      <Modal animationType="none" transparent={true} visible={deleteModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.taskInputContainer}>
              <Text style={{ fontSize: 16, color: "#666" }}>
                {removingItemId.text}
              </Text>
            </View>

            <View style={styles.modalButtonContainer}>
              <Pressable style={styles.modalButtonCancel}>
                <Button
                  title="Delete Item"
                  color="red"
                  onPress={() => {
                    removeItem(removingItemId.id);
                    displayDeleteModal(false);
                  }}
                />
              </Pressable>
              <View style={styles.modalButtonGap}></View>
              <Pressable style={styles.modalButtonAdd}>
                <Button
                  title="Cancel"
                  onPress={() => {
                    displayDeleteModal(false);
                  }}
                  color="green"
                />
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <Modal animationType="none" transparent={true} visible={displayModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.taskInputContainer}>
              <TextInput
                onChangeText={changeListText}
                color="#666"
                style={styles.taskInput}
                value={listText}
                placeholder="Task"
                placeholderTextColor="#999"
                hitSlop={{ top: 25, bottom: 25, left: 15, right: 15 }}
              />
            </View>

            <View style={styles.modalButtonContainer}>
              <Pressable style={styles.modalButtonAdd}>
                <Button title="Add" onPress={addElement} color="green" />
              </Pressable>
              <View style={styles.modalButtonGap}></View>
              <Pressable style={styles.modalButtonCancel}>
                <Button
                  title="Cancel"
                  color="red"
                  onPress={() => {
                    setModalDisplay(false);
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
