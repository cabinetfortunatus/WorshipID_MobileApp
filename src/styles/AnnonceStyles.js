import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const OVERLAY_WIDTH = width * 0.85; 
const OVERLAY_HEIGHT = height * 0.75; 

const AnnonceStyle = StyleSheet.create({
  container: {
    flex: 1,
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
    justifyContent: 'center',
    marginHorizontal: "2%",
    marginVertical: "5%",
    borderRadius: 14,
    justifyContent: 'center',
    top: "18%",

  },

  menuItemAnnonce: {
    height: "45%",
    backgroundColor: '#eaf0fb',
    margin: "5%",
    marginTop: 8,
    marginBottom: 8,
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
    top: "8%"
  },

  menuIconContainerAnnonce: { 
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 6,
    marginRight: 12,
    shadowColor: '#f5f3fc',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 0.5,
    elevation: 5,
  },

  menuIconAnnonce: {
    width: 30,
    height: 30,
  },

  menuTextContainerAnnonce: {
    flex: 1,
  },

  menuTitleAnnonce: {
    fontSize: 14,
    color: '#687cce',
    fontWeight: '600',
    marginBottom: 4,
    flexShrink: 1,
  },

  menuSubtitleAnnonce: {
    fontSize: 10,
    color: '#6B7280',
    lineHeight: 20,
    flexWrap: 'wrap'
  },

  searchContainer: {
    flexDirection: 'row',
    marginHorizontal: "5%",
  },

  searchBar: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: "5%",
    paddingVertical: 8,  
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  searchInput: {
    flex: 1,
    alignItems: "center",
    marginLeft: 10,
    fontSize: 12,
  },

  ContainnerProchEvent: {
    height: "55%",
    margin: "5%",
    marginTop: "2%",
    padding: 12,
    borderRadius: 16,
    backgroundColor: "#edf3fb",
    top: "-20%"
  },

  TitleHome1: {
    top: "-10%",
  },

  cardContainer: {
    flex: 1,
    padding: "1%",
    marginVertical: "5%",
    width: "100%",
    height: "18%",
  },

  cardDate: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4983F6',
    marginBottom: 4,
  },

  cardTheme: {
    fontSize: 12,
    fontWeight: 'bold',  // Corrigé: dupliqué fontWeight
    color: '#333',
    marginBottom: 6,
  },

  CardIconText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 1, 
    borderTopColor: '#bf89f7', 
    borderBottomColor: "#bf89f7",
    borderBottomWidth: 1,
    paddingBottom: "3%",
    paddingTop: "3%",
    width: "100%",
    top: "7%"
  },

  NameEventContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  TextContent: {
    flex: 1,
    marginRight: 8,
  },

  CardNameEvent: {
    fontSize: 12,
    fontWeight: 'bold',
    color: "#5A67D8",
    marginBottom: 2,
  },

  cardDescription: {
    fontSize: 10,
    color: "#6B7280",
  },

  DurIcoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "8%",
  },

  icon: {
    width: 16,
    height: 16,
    marginHorizontal: "3%",
  },

  cardDuration: {
    fontSize: 12,
    color: "#333",
  },

  button: {
    backgroundColor: "#4983F6",
    paddingVertical: "2%",
    paddingHorizontal: "5%",
    borderRadius: 12,
    marginRight: "2%"
  },

  buttonText: {
    color: "#FFF",
    fontSize: 10,
    fontWeight: "600",
  },
});

export default AnnonceStyle;