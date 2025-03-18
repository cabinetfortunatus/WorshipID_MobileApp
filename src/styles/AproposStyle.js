import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const scale = width / 375; // Using 375 as base width (iPhone X)
const verticalScale = height / 812; 

// Responsive scaling function for fonts and spacing
const normalize = (size) => Math.round(size * scale);

const AproposStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  HeighImage: {
    width: '100%',
    height: height * 0.35,
    marginTop: -height * 0.05,
    resizeMode: 'cover',
    opacity: 0.6
  },
  backButton: {
    position: 'absolute',
    padding: normalize(12),
    top: height * 0.2,
    marginHorizontal: width * 0.05,
  },
  backButtonText: {
    fontSize: normalize(25),
    fontWeight: 'bold',
  },
  icon: {
    width: normalize(15),
    height: normalize(15),
  },
  infoCard: {
    backgroundColor: '#FFF',
    height: height * 0.22,
    borderRadius: normalize(15),
    elevation: 10,
    shadowColor: '#f5f3fc',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    marginBottom:"3%",
    padding:"2%"
  },
  HeaderContainer: {
    flex: 1,
    width: width * 0.9,
    alignSelf: 'center',
  },
  gradContainer: {
    height: height * 0.06
  },
  eventD: {
    fontSize: normalize(12),
    marginStart: width * 0.05
  },
  eventDescription: {
    fontSize: normalize(14),
    color: '#777',
    marginStart: width * 0.02
  },
  row: {
    flexDirection: 'row',
    marginTop: height * 0.02,
    gap: width * 0.03,
    marginHorizontal: width * 0.03,

  },
  eventAddress: {
    fontSize: normalize(12),
    color: '#777',
    marginLeft: width * 0.02,
  },
  dateTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: normalize(10),
    padding: normalize(10),
    gap: width * 0.15,

  },
  dateTimeLabel: {
    borderRadius: normalize(10),
    padding: width * 0.01,
    fontSize: normalize(12),
    backgroundColor: "#7B5EC7",
    color: '#ffff',
    fontWeight: 'bold',
  },
  dateTimeText: {
    fontSize: normalize(10),
    color: '#555',
    marginLeft: width * 0.03,
  },
  iconInfo: {
    marginLeft: width * 0.01,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#f3f8fd',
    width: width*0.9,
    alignSelf: 'center',
    borderRadius: normalize(12),
    overflow: 'hidden',
    elevation: 10,
    shadowColor: '#f5f3fc',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,
  },
  descriptionText: {
    fontSize: normalize(12),
    color: '#666',
    padding: normalize(16)
  },
  besoinsText: {
    paddingTop: height * 0.05,
    marginHorizontal: width * 0.05,
    fontSize: normalize(12),
    color: '#666',
    marginBottom: height * 0.01,
  },
  tabBarContainer: {
    flexDirection: 'row',
    width: "90%",
    alignSelf: 'center',
    backgroundColor: '#f3f8fd',
    borderRadius: normalize(12),
    overflow: 'hidden',
    elevation: 10,
    shadowColor: '#f5f3fc',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    marginBottom:"3%"
  },
  tabButton: {
    flex: 1,
    paddingVertical: height * 0.015,
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
    fontSize: normalize(14),
  },
  activeTabText: {
    color: '#7B5EC7',
  },
});

export default AproposStyle;