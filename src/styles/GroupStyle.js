import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const OVERLAY_WIDTH = width * 0.85; 
const OVERLAY_HEIGHT = height * 0.75; 
const GroupStyle = StyleSheet.create({

container: {
    flex: 1,
    },

BackGroundView :{
    flex:1,
    height: OVERLAY_HEIGHT,
    width:OVERLAY_WIDTH,
    borderRadius:14,
    alignItems:"center"
    },

HeighImage: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: "100%",  
    height: "20%", 
    borderRadius: 12,
    opacity: 0.6,
    },
    

overlay: {
    width: OVERLAY_WIDTH,
    height: OVERLAY_HEIGHT,
    alignSelf: 'center',
    marginHorizontal :"2%",
    marginVertical :"5%",
    borderRadius: 14, 
    top:"18%",
    overflow: 'hidden',
},


backButton: {
    padding: "3%",
  },
backButtonText: {
  fontSize: 25,
  fontWeight :'bold'

},
searchContainer: {
  flexDirection: 'row',

  
},
searchBar: {
  flex:1,
  backgroundColor: 'white',
  borderRadius:12,
  flexDirection: 'row',
  alignItems: 'center', 
  width: '85%',
  paddingHorizontal: "5%",
  paddingVertical: "center",
  elevation: 10,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  marginHorizontal:"7%",
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
    height:"45%",
    backgroundColor: '#eaf0fb',
    margin: "5%",
    marginTop: "2%",
    marginBottom: "2%",
    marginHorizontal:"7%",
    padding: 8,
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


ContainnerProchEvent:{
    height:"46%",
    margin: "5%",
    marginTop: "2%",
    padding: 12,
    borderRadius: 16,
    backgroundColor:"#edf3fb",
    top:"-20%"
},

TitleHome1: {
    top: "-15%",
    right:"30%"
},
cardContainer: {
    flex:1,
    flexDirection: "row",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#dfbafa",
    borderTopColor: "#dfbafa",
    padding: 10,
    alignItems: "center",
    marginBottom:"2%"
   
  },
  infoContainer: {
    flex: 1, 
  },

  cardName_group: {
    fontSize: 14,
    fontWeight: 'bold',
    color: "#333",
    marginBottom: 4,
  },
  functionText: {
    fontSize: 12,
    color: "#666",
  },
  buttonContainer: {
    flex:1,
    flexDirection: "column",
    left:"30%"
  },
  buttontop: {
    backgroundColor: "#a8aef9",
    width: "35%",
    height: "45%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: "6%",
  },
  buttonbuttom: {
    backgroundColor: "#ff1010",
    width: "35%",
    height: "45%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 10,
    color: "#fff",
    fontWeight: "bold",
  },

});

export default GroupStyle;