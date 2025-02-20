// src/styles/inputStyles.js
import { StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';

export const inputStyles = StyleSheet.create({
  inputContainer: {
    marginBottom: 10,
  },
  
  label: {
    fontSize: 12,
    marginBottom: 5,
    color: '#333',
    marginHorizontal: "12%",
  },

  input: {
    width :"75%",
    height: 40,
    borderWidth: 1,
    borderColor: '#bf89f7',
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 12,
    marginHorizontal: "12%",
    backgroundColor: COLORS.white,
  },
});