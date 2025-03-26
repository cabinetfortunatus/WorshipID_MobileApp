
import { StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';

export const buttonStyles = StyleSheet.create({
  
  button: {
    backgroundColor: COLORS.primary,
    
    borderRadius: 10,
    alignItems: 'center',
    justifyContent:"center",
    marginVertical: 10,
    width: "75%",
    height: 45,
    alignItems:"center",
    alignSelf:"center"
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '600',
  },
});
