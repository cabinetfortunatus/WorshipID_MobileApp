import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { buttonStyles } from '../../../styles/buttonStyles';

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={buttonStyles.button} onPress={onPress}>
      <Text style={buttonStyles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
