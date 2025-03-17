
import { StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';

export const buttonStyles = StyleSheet.create({
  
  button: {
    backgroundColor: COLORS.primary,
    marginHorizontal :40,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
    width: "75%",
    height: 45,
    alignItems:"center"
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '600',
  },
});
