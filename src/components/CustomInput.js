import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Image } from 'react-native';
import { inputStyles } from '../styles/inputStyles';

const CustomInput = ({ 
  label, 
  placeholder, 
  value, 
  onChangeText, 
  keyboardType = 'default',
  secureTextEntry,
  isPassword = false 
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  
  const eyeOpenIcon = require('../assets/icons/eye.png');
  const eyeClosedIcon = require('../assets/icons/eye-off.png');

  return (
    <View style={inputStyles.inputContainer}>
      <Text style={inputStyles.label}>{label}</Text>
      <View style={inputStyles.inputWrapper}>
        <TextInput
          style={inputStyles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          placeholderTextColor="#888"
          secureTextEntry={isPassword ? !isPasswordVisible : secureTextEntry}
        />
        {isPassword && (
          <TouchableOpacity 
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            style={inputStyles.eyeIconContainer}
          >
            <Image 
              source={isPasswordVisible ? eyeOpenIcon : eyeClosedIcon}
              style={inputStyles.eyeIcon}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CustomInput;