import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../constants/colors';


const { width, height } = Dimensions.get('window');

const OVERLAY_WIDTH = width * 0.85; 
const OVERLAY_HEIGHT = height * 0.75; 
const EventStyle = StyleSheet.create({

container: {
    flex: 1,
    // backgroundColor: COLORS.white,

    },

BackGroundView :{
    // flex:1,
    height :height,
    width:width,
    borderRadius:14
    },

HeighImage: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: "100%",  
    height: "20%", 
    borderWidth:1,
    borderRadius: 12,
    opacity: 0.6,
    },
    

overlay: {
  // flex:1,
    // backgroundColor:"white",
    width: OVERLAY_WIDTH,
    height: OVERLAY_HEIGHT,
    left: (width - OVERLAY_WIDTH)/2.5 ,
    top: (height - OVERLAY_HEIGHT)/2.5 ,
    justifyContent: 'center',
    alignContent:"center",
    marginHorizontal :"2%",
    marginVertical :"5%",
    borderRadius: 14, 
    // borderWidth:1,
    top:"18%"
},


backButton: {
    padding: "3%",
    marginHorizontal: "5%",
  },
backButtonText: {
  fontSize: 25,
  fontWeight :'bold'

},

searchContainer: {
    flexDirection: 'row',
    marginHorizontal: "5%",
    width:"100%"
    
  },
  searchBar: {
    backgroundColor: 'white',
    borderRadius:12,
    flexDirection: 'row',
    alignItems: 'center', 
    width: '75%',
    paddingHorizontal: "5%",
    paddingVertical: "center",
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  searchInput: {
    flex: 1,
    alignItems:"center",
    marginLeft: 10,
    fontSize: 12,
  },


menuItem: {
    width:"75%",
    height:"36%",
    backgroundColor: '#eaf0fb',
    margin: "5%",
    marginTop: 8,
    marginBottom: 8,
    padding: 12,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#f5f3fc',
    shadowOffset: {
        width: 0,
        height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 10,
    top:"8%"
},

menuIconContainer: { 
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 8,
    marginRight: 12,
    shadowColor: '#f5f3fc',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 0.5,
    elevation: 10,
},
menuIcon: {
    width: 30,
    height: 30,
},

menuTextContainer: {
    flex: 1,
},
menuTitle: {
    fontSize: 14,
    color: '#687cce',
    fontWeight: '600',
    marginBottom: 4,
    flexShrink: 1,
},
menuSubtitle: {
    fontSize: 10,
    color: '#6B7280',
    lineHeight: 20,
    flexWrap: 'wrap'
},



cardContainer: {
    backgroundColor: 'white',
    borderRadius: 14,
    width: '45%',
    height: "35%",
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
    top:"-10%",
    marginHorizontal: "2%",
    right:"2%",
  },
  
card: {
  // flex:1,
    flexDirection: 'row', 
    flexWrap: 'wrap',
    alignItems: 'center',
    borderRadius: 14,
    padding: 16,
    alignItems: 'center',
    width: '90%',
    height: "65%",
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    top:"-18%",
  },


cardTitle: {
    fontSize: 10,
    color: '#202020',
    fontWeight: 'bold',
},
cardDescription: {
    fontSize: 8,
    color: '#6B7280',
    fontStyle: 'italic',
    
},

TextContainer: {
    width: "70%",
    height: "100%",
    marginLeft:"5%"
   
},

button: {
    backgroundColor: '#c075f6',
    borderRadius: "14%",
    width:"28%",
    height:"40%",   
    marginRight:"5%",
    top:"15%",
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation:3,

},
buttonText: {
    textAlign: 'center',
    color: '#ffff',
    fontSize: 10,

},

CardIconContainer: {
    backgroundColor: '#d5d5d5',
    width: "100%",
    height: "75%",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    marginBottom: 8,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation:10,
    overflow: 'hidden',
},
Image:{
    width: "100%",
    resizeMode: 'contain'
},
CardIconText: {
    flexDirection:"row",
    height: "20%",
    justifyContent: 'center',
    overflow: 'hidden',
    padding:"3%"
}
});


export default EventStyle;