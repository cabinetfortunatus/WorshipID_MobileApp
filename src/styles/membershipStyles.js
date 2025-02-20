import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../constants/colors';

const { width, height } = Dimensions.get('window');

const OVERLAY_WIDTH = width * 0.85; 
const OVERLAY_HEIGHT = height * 0.90; 

export const membershipStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  BackGroundView :{
    width : width,
    height :height,
  },
  topRightImage: {
    position: 'absolute',
    top: "-8%",
    right: "-15%",
    width: "60%",  
    height: "30%", 
    },
  
  // backButton: {
  //   padding: "5%",
  //   marginHorizontal: 38,
  //   top:30
  // },
  
  // backButtonText: {
  //   fontSize: 25,
  //   fontWeight :'bold'
  // },
  
  titleContainer: {
    top: "-5%", 
    alignItems: 'center',  
  },
  BlocContainer: {
    top: "5%" 
  },
  subtitle: {
    marginBottom: "3%",
    color: '#666',
    lineHeight: 15,
    marginHorizontal: "10%",
    fontSize : 10,
  },
  
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: "12%",
    borderRadius: 10,
    gap:"-5%",
    top:"-7%"
  },
  
  phoneLabel: {
    fontSize: 12,
    color: '#333',
    marginBottom: 5,
  },
  
  countryCodePicker: {
    alignContent:"center",
    height: "23%",
    width: "100%",
    borderWidth: 1,
    borderColor: '#bf89f7',
    borderRadius: 10,
    fontSize: 12,
    backgroundColor: COLORS.white,
    top:"-3%",
  },
  
  label: {
    fontSize: 12,
    marginBottom: 5,
    color: '#333',
    marginHorizontal:"ù%",
    top:"-4%"
  },

  genderContainer: {
    flexDirection: 'row',
    marginHorizontal: "12%",
    top:"-12%"
  },
  
  genderLabel: {
    fontSize: 12,
    marginRight: "5%",
  },
  
  genderButton: {
    paddingHorizontal: "2%",
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: "3%",
    flexDirection: 'row',
  },
  
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 14,
    borderColor: '#bf89f7',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  selectedRb: {
    width: 16,
    height: 16,
    borderRadius: 15,
    backgroundColor: '#2E82FF',
  },
  
  loginContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  
  loginText: {
    color: '#666',
    fontSize:10
  },

  overlay: {
    
    position: 'absolute',
    width: OVERLAY_WIDTH,
    height: OVERLAY_HEIGHT,
    left: (width - OVERLAY_WIDTH)/2 ,
    top: (height - OVERLAY_HEIGHT)/2 ,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical :"5%",
    borderRadius: 12, 
    overflow: 'hidden', 
  },
  photoSection: {
    top:"-10%",
  },
  photoButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: "2%",
    marginHorizontal: "10%",
    gap: "4%",
  },
  
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: "-8%",
    marginHorizontal: "10%",
  },

  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#bf89f7',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: "5%",
  },
  
  checkboxSelected: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#bf89f7',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: "5%",
  },
  
  checkmark: {
    color: '#1E90FF',
  },
  termsText :{
    fontSize :12
  },
  link: {
    color: '#1E90FF',
    textDecorationLine: 'underline',
    fontSize:12
  },
});