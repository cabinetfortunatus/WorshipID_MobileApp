import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../constants/colors';

const { width, height } = Dimensions.get('window');

const OVERLAY_WIDTH = width * 0.85; 
const OVERLAY_HEIGHT = height * 0.90; 
const loginStyles = StyleSheet.create({

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
    
overlay: {
    
    position: 'absolute',
    width: OVERLAY_WIDTH,
    height: OVERLAY_HEIGHT,
    left: (width - OVERLAY_WIDTH)/2 ,
    top: (height - OVERLAY_HEIGHT)/2 ,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    justifyContent: 'center',
    marginVertical :"5%",
    borderRadius: 12, 
    overflow: 'hidden', 
},

backButton: {
    padding: 10,
    marginHorizontal: "10%",
    top:"-7%"
  },
backButtonText: {
  fontSize: 25,
  fontWeight :'bold'
},
  
Images:{
    top: "-5%",
    right: "-28%",
    width: 150,  
    height: 150, 
},
  container: {
    flex: 1,
    paddingHorizontal: -5,
    paddingTop: 25,
  },

  blocLogin :{
    top:5
  },
  
  bloc_input :{
    marginHorizontal:5,
    top :-10
  },

  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },

  forgotPasswordText:{
    fontSize: 12,
    marginHorizontal: 45,
    color: '#1E90FF',
    textDecorationLine: 'underline'
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    marginHorizontal:15
  },
  signupContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  signupText: {
    color: '#666',
    fontSize:12,
    top:-20,
  },
  link: {
    color: '#4983F6',
    fontSize:12,
  },
});

export default loginStyles;