import { StyleSheet, Dimensions } from 'react-native';

// const { width, height } = Dimensions.get('window');

const AproposStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  HeighImage: {
    width: '100%',
    height: "35%",
    top:"-5%",
    resizeMode: 'cover',
    opacity:0.6

  },
  backButton: {
    position: 'absolute',
    padding: "3%",
    top:"20%",
    marginHorizontal: "5%",
  },
  backButtonText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  icon: {
    width: 15,
    height: 15,
  },
  infoCard: {
    width:"90%",
    height:"35%",
    backgroundColor: '#FFF',
    borderRadius: 15,
    elevation: 10,
    top:"-7%",
    shadowColor: '#f5f3fc',
        shadowOffset: {
            width: 0,
            height: 5,
        },
    shadowOpacity: 0.1,
    shadowRadius: 12,

  },
  eventTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#7B5EC7',
    top:"-15%",
  },
  eventD:{
    fontSize:10,
    marginInlineStart:"5%"

  },
  eventDescription: {
    fontSize: 14,
    color: '#777',
    marginInlineStart:"5%"
  },
  row: {
    flexDirection: 'row',
    marginTop: "3%",
    gap:"3%",
    marginHorizontal:"3%"
  },
  eventAddress: {
    fontSize: 12,
    color: '#777',
    top:"40%",
    marginLeft: "2%",
  },
  dateTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    marginTop: "3%",
    gap:"15%"
  },
  dateTimeLabel: {
    borderRadius:12,
    padding:"2%",
    fontSize: 12,
    backgroundColor:"#7B5EC7",
    color: '#ffff',
    fontWeight: 'bold',
  },
  dateTimeText: {
    fontSize: 12,
    color: '#555',
    marginLeft: 10,
  },
  iconInfo: {
    marginLeft: 5,
  },
 
  contentContainer: {
    flex:1,
    backgroundColor: '#f3f8fd',
    width:"90%",
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 10,
    shadowColor: '#f5f3fc',
        shadowOffset: {
            width: 0,
            height: 5,
        },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    top:"-2%"
  },
  descriptionText: {
    fontSize: 12,
    color: '#666',
    padding:16
  },

  besoinsText: {
    paddingTop:"5%",
    marginHorizontal:"5%",
    fontSize: 12,
    color: '#666',
    marginBottom: 10,
  },
 
tabBarContainer: {
    flexDirection: 'row',
    width:"90%",
    top:"-3%",
    backgroundColor: '#f3f8fd',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 10,
    shadowColor: '#f5f3fc',
        shadowOffset: {
            width: 0,
            height: 5,
        },
    shadowOpacity: 0.1,
    shadowRadius: 12
  },
tabButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
},
activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#7B5EC7',
    
},
tabText: {
    fontWeight: 'bold',
    color: '#666',
},
activeTabText: {
    color: '#7B5EC7',
},
});

export default AproposStyle;