// src/styles/inputStyles.js
import { StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';

export const inputStyles = StyleSheet.create({
  inputContainer: {
    marginBottom: "3%",
  },
  
  label: {
    fontSize: 12,
    marginBottom: "2%",
    color: '#333',
    marginHorizontal: "12%",
  },

  input: {
    width : "75%",
    borderWidth: 1,
    borderColor: '#bf89f7',
    borderRadius: 10,
    paddingHorizontal: "5%",
    fontSize: 12,
    marginHorizontal: "12%",
    backgroundColor: COLORS.white,
    numberOfLines:1,
    overflow: 'hidden',
    textAlign: 'left', 
    textAlignVertical: 'center'
  },
});