import * as React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import ColorThemes from './colors';

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  defualtStyling: {
    backgroundColor: ColorThemes.main[0],
  },
  content: {
    backgroundColor: ColorThemes.main[0],
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ColorThemes.main[0],
    borderBottomColor: ColorThemes.main[3],
    borderBottomWidth: 2,
  },
  headerText: {
    color: ColorThemes.main[3],
    fontSize: 50,
  },
  body: {
    flex: 15,
    textAlign: 'left',
    justifyContent: 'flex-start',
    padding: 10,
  },
  settingsBody: {
    flex: 15,
    textAlign: 'left',
    justifyContent: 'flex-start',
    padding: 10,
  },
  footer: {
    flexDirection: 'row',
    flex: 2,
    backgroundColor: ColorThemes.main[1],
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  list: {
    flex: 10,
  },
  menu: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  modalContainer: {
    flex: 1,
    width: windowWidth/1.5,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
  modalButtonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButtonAdd: {
    flex: 5,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "green",
    backgroundColor: '#ada',
    justifyContent: 'center',
  },
  modalButtonGap: {
    flex: 1,
  },
  modalButtonCancel: {
    flex: 5,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "red",
    backgroundColor: '#daa',
    justifyContent: 'center',
  },
  taskInputContainer: {
    padding: 10,
    marginTop: 10,
    backgroundColor: "#ccc",
    borderColor: "#666",
    borderWidth: 2,
    borderRadius: 10,
  },
  taskInput: {
    fontSize: 16,
  },
  taskItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    margin: 2,
  },
  taskBox: {
    flex: 1,
  },
  taskText: {
    color: "white",
    flex: 10,
    fontSize: 22,
    alignSelf: 'center',
  },
  completedText: {
    textAlign: 'center',
    color: '#bbb',
    fontSize: 20,
    fontStyle: 'italic',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  settingsButtonRed: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "red",
    backgroundColor: '#daa',
  },
  settingsButtonGrey: {
    marginBottom: 10,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "#ccc",
    borderColor: "#666",
  },
  settingsText: {
    color: 'white',
    fontSize: 20,
    padding: 5,
  },
});

export default styles;
