import * as React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

import ColorThemes from './colors';

const styles = StyleSheet.create({
  bgColor: {
    backgroundColor: ColorThemes.main[0],
  },
  textColor: {
    color: ColorThemes.main[3],
  },
  footerText: {
    fontSize: 18,
  },
  content: {
    flex: 10,
    justifyContent: 'flex-start',

  },
  footerLink: {
    color: ColorThemes.link,
  },
  signIn: {
    borderColor: ColorThemes.main[1],
    borderWidth: 5,
    margin: 2,
    width: windowWidth*8/10,
    padding: 4,
    fontSize: 20,
    borderRadius: 10,
  },
  signInLink: {
    color: ColorThemes.main[3],
    textAlign: 'center',
  },
  heading: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    color: ColorThemes.main[3],
    textAlign: 'center',
    fontSize: 70,
  },
  body: {
    flex: 17,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  footer: {
    flex: 2,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  backButton: {
    fontSize: 30,
    color: ColorThemes.main[3],
    textAlign: 'left',
    width: windowWidth*9/10,
  },
  backButtonContainer: {
    flex: 2,
  },
});

export default styles;
