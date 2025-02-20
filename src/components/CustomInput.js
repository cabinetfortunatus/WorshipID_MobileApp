
import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { inputStyles } from '../styles/inputStyles';
const CustomInput = ({ label, placeholder, value, onChangeText, keyboardType = 'default',secureTextEntry }) => {
  return (
    <View style={inputStyles.inputContainer}>
      <Text style={inputStyles.label}>{label}</Text>
      <TextInput
        style={inputStyles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        placeholderTextColor="#999"
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};


export default CustomInput;