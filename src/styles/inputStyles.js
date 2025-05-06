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
    flex: 1,
    color: '#000',
    fontSize: 12,
    paddingVertical: 10,
    overflow: 'hidden',
  },
  inputWrapper: {
    flexDirection: 'row',
    width : "75%",
    borderWidth: 1,
    borderColor: '#bf89f7',
    borderRadius: 10,
    paddingHorizontal: "5%",
    fontSize: 12,
    marginHorizontal: "12%",
    // backgroundColor: "#d1eae7",
    numberOfLines:1,
    overflow: 'hidden',
    textAlign: 'left', 
    textAlignVertical: 'center',
    justifyContent:"space-between"
  },

  eyeIconContainer: {
    alignSelf:"center"
  },
  eyeIcon: {
    width: 18,
    height: 18,
    tintColor: '#000',
    opacity: 0.6,
  }
});