import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const OVERLAY_WIDTH = width * 0.85; 
const OVERLAY_HEIGHT = height * 0.90; 

export const membershipStyles = StyleSheet.create({
  container: {
    flex: 1,
    width:width,
    height: height
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
    top: "0%",
    width:"100%",
    height:"95%",
  },
  subtitle: {
    marginBottom: "3%",
    color: '#666',
    lineHeight: 15,
    marginHorizontal: "10%",
    fontSize : 10,
    padding:16
  },

  blocInput:{
    top:"-6%"
  },

  phoneInputContainer:{
    flexDirection:"row",
    borderRadius:10,
    borderWidth: 1,
    width : "75%",
    borderColor: '#bf89f7',
    marginHorizontal:"12%",
  
  },
  label:{
    fontSize:10
  },

  countryButton:{
    flexDirection:"row",
    alignItems:"center",
    columnGap:"5%",
    marginHorizontal:"3%"
  },
  


  genderContainer: {
    flexDirection: 'row',
    marginHorizontal: "12%",
    top:"3%"
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
    top:"4%",
  },
  photoButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: "2%",
    marginHorizontal: "12%",
    gap: "4%",
    marginVertical:"2%"
  },
  
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: "12%",
    top:"8%"
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
    fontSize :12,
    

  },
  link: {
    color: '#1E90FF',
    textDecorationLine: 'underline',
    fontSize:12,
    
  },
});