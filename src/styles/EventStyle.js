import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const isSmallScreen = width < 375;

const EventStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  BackGroundView: {
    flex: 1,
    width: width * 0.9,
    alignSelf: 'center',
    borderRadius: 14,
  },

  HeighImage: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: height * 0.2,
    borderRadius: 12,
    opacity: 0.6,
  },
    
  overlay: {
    flex: 1,
    width: width * 0.85,
    height: height * 0.75,
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: height * 0.02,
    borderRadius: 14,
  },

  backButton: {
    padding: width * 0.03,
    marginHorizontal: width * 0.05,
  },
  
  backButtonText: {
    fontSize: isSmallScreen ? 22 : 25,
    fontWeight: 'bold',
    color: '#333',
  },

  searchContainer: {
    flexDirection: 'row',
    marginHorizontal: width * 0.05,
    marginVertical: height * 0.02,
  },

  searchBar: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.005,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },

  searchInput: {
    flex: 1,
    marginLeft: width * 0.03,
    fontSize: isSmallScreen ? 10 : 12,
    color: '#333',
  },

  menuItem: {
    height: height * 0.1,
    backgroundColor: '#eaf0fb',
    margin: width * 0.04,
    padding: width * 0.03,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 10,
  },

  menuIconContainer: { 
    backgroundColor: 'white',
    borderRadius: 50,
    padding: width * 0.02,
    marginRight: width * 0.03,
    elevation: 10,
  },

  menuIcon: {
    width: width * 0.07,
    height: width * 0.07,
    resizeMode: 'contain',
  },

  menuTextContainer: {
    flex: 1,
  },

  menuTitle: {
    fontSize: isSmallScreen ? 14 : 16,
    color: '#687cce',
    fontWeight: '600',
    marginBottom: 4,
  },

  menuSubtitle: {
    fontSize: isSmallScreen ? 12 : 14,
    color: '#6B7280',
    lineHeight: 20,
  },

  cardContainer: {
    backgroundColor: '#eaf0fb',
    borderRadius: 14,
    width: width * 0.38,
    marginBottom: height * 0.02,
    borderWidth:1,
    marginHorizontal: width * 0.01,
    padding:"2%",
    borderColor:"#A49EF4",
  },

  card: {
    flex: 1,
    padding: width * 0.02,
  },

  cardTitle: {
    fontSize: isSmallScreen ? 12 : 14,
    color: '#202020',
    fontWeight: 'bold',
    marginBottom: 4,
  },

  cardDescription: {
    fontSize: isSmallScreen ? 10 : 12,
    color: '#6B7280',
    fontStyle: 'italic',
  },

  TextContainer: {
    width: '70%',
    marginLeft: width * 0.03,
  },
  CardIconText:{
    flexDirection:"row",
    padding:"1%",
    alignItems:"center",
    justifyContent:"center"
  },
  button: {
    backgroundColor: '#c075f6',
    borderRadius: 14,
    width: width * 0.09,
    height: height * 0.02,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: isSmallScreen ? 10 : 12,
    fontWeight: '500',
  },

  CardIconContainer: {
    backgroundColor: '#d5d5d5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    aspectRatio: 1,
  },

  Image: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },

  Scroll: {
    paddingTop: height * 0.04,
    paddingBottom: height * 0.02,
  },
});

export default EventStyle;