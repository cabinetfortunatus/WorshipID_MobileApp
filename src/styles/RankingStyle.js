import { StyleSheet, Dimensions, Platform, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');

// Fonction pour calculer les dimensions en fonction de la taille de l'écran
const normalizeSize = (size) => {
  const scale = width / 375; // Basé sur un écran de référence de 375pt (iPhone 8)
  const newSize = size * scale;
  
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
};

// Fonction pour calculer les pourcentages de manière plus sécurisée
const getPercentage = (percent) => {
  return typeof percent === 'string' && percent.includes('%') 
    ? percent 
    : `${percent}%`;
};

// Fonction pour calculer la marge responsive
const getResponsiveMargin = (baseValue) => {
  const baseMargin = width * (baseValue / 100);
  return Math.min(baseMargin, 30); // Plafond à 30 pour les grands écrans
};

const RankinStyle = StyleSheet.create({
  BackGroundView: {
    flex: 1,
    alignItems: "center",
    // justifyContent: 'space-between',
  },
  
  overlay: {
    flex: 1,
    height: height * 0.75,
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: height * 0.02,
    borderRadius: normalizeSize(14),
  },
  
  ImageHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: height * 0.15, 
    resizeMode: 'cover',
    borderRadius: normalizeSize(12),
    opacity: 0.5,
    marginBottom: height * 0.03,
  },
  
  backButton: {
    alignSelf: "flex-start",
    padding: width * 0.01,
  },
  
  backButtonText: {
    fontSize: normalizeSize(25),
    fontWeight: 'bold',
  },
  
  searchContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  
  searchBar: {
    backgroundColor: 'white',
    borderRadius: normalizeSize(12),
    flexDirection: 'row',
    alignItems: 'center',
    width: '85%',
    paddingHorizontal: width * 0.05,
    paddingVertical: normalizeSize(8),
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignSelf: 'center',
   
  },
  
  searchInput: {
    flex: 1,
    alignItems: "center",
    marginLeft: normalizeSize(10),
    fontSize: normalizeSize(12),
  },
  
  GradientContainer: {
    width: '100%',
    height: height * 0.07,
    marginBottom: height * 0.03,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  menuItem: {
    width: '85%',
    backgroundColor: '#eaf0fb',
    margin: width * 0.02,
    marginTop: height * 0.01,
    marginBottom: height * 0.01,
    alignSelf: 'center',
    padding: normalizeSize(8),
    borderRadius: normalizeSize(12),
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
    top: height * 0.04,
  },
  
  menuIconContainer: {
    backgroundColor: 'white',
    borderRadius: normalizeSize(50),
    padding: normalizeSize(8),
    marginRight: normalizeSize(12),
    shadowColor: '#f5f3fc',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 0.5,
    elevation: 10,
  },
  
  menuIcon: {
    width: normalizeSize(30),
    height: normalizeSize(30),
  },
  
  menuTextContainer: {
    flex: 1,
  },
  
  menuTitle: {
    fontSize: normalizeSize(14),
    color: '#687cce',
    fontWeight: '600',
    marginBottom: normalizeSize(4),
    flexShrink: 1,
  },
  
  menuSubtitle: {
    fontSize: normalizeSize(10),
    color: '#6B7280',
    lineHeight: normalizeSize(20),
    flexWrap: 'wrap'
  },
  
  rankingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height * 0.03,
    justifyContent: 'space-evenly',
    alignSelf: "center",
  },
  
  rankinTitle: {
    fontSize: normalizeSize(20),
    fontWeight: 'bold',
    color: '#FF5733',
    textAlign: 'center',
  },
  
  Flatcontainer: {
    flex: 1,
    marginBottom: height * 0.02,
    padding: width * 0.02,
    alignItems: "center",
  },
  
  rankingDetails: {
    flexDirection: 'row',
    padding: width * 0.03,
    borderWidth: 1,
    borderRadius: normalizeSize(12),
    borderColor: "#FF5733",
    backgroundColor: "#f0f0f0",
    marginBottom: height * 0.02,
    width: '90%',
    alignSelf: 'center',
  },
  
  rankingCard: {
    backgroundColor: '#FFF',
    borderRadius: normalizeSize(10),
    padding: normalizeSize(10),
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: height * 0.12,
    width: width * 0.43,
    margin: normalizeSize(5),
    borderWidth: 1,
    borderColor: "#FF5733",
    backgroundColor: "#f0f0f0",
  },
  
  rankTitle: {
    fontSize: normalizeSize(12),
    color: 'gray',
    paddingBottom: normalizeSize(5),
    textAlign: 'center',
  },
  
  rankValue: {
    fontSize: normalizeSize(14),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
  rankSubText: {
    alignSelf:"flex-start",
    fontSize: normalizeSize(12),
    color: 'green',
    textAlign: 'center',
  },
  
  activityCard: {
    backgroundColor: '#FFF',
    borderRadius: normalizeSize(10),
    padding: normalizeSize(15),
    marginBottom: normalizeSize(10),
    width: '90%',
    alignSelf: 'center',
  },
  
  activityTitle: {
    fontSize: normalizeSize(16),
    fontWeight: 'bold',
  },
  
  activityDetail: {
    fontSize: normalizeSize(12),
    color: 'gray',
  },
  
  TextValue: {
    fontSize: normalizeSize(12)
  },
  
  activityRank: {
    fontSize: normalizeSize(16),
    color: '#FF5733',
  },
  
  activityParticipants: {
    fontSize: normalizeSize(12),
    color: 'gray',
  },
  
  tagsContainer: {
    flexDirection: 'row',
    marginTop: normalizeSize(10),
    flexWrap: 'wrap',
  },
  
  tag: {
    backgroundColor: '#FF5733',
    color: '#FFF',
    borderRadius: normalizeSize(5),
    padding: normalizeSize(5),
    marginRight: normalizeSize(5),
    marginBottom: normalizeSize(5),
  },
  
  Scroll: {
    paddingTop: height * 0.02,
    paddingBottom: height * 0.04,
    width: '100%',
  },
  
  tags: {
    fontSize: normalizeSize(10),
    color: '#6B7280',
    marginTop: normalizeSize(5),
  }
});

// Ajout d'un écouteur pour recalculer les dimensions en cas de changement d'orientation
Dimensions.addEventListener('change', () => {
  const { width: newWidth, height: newHeight } = Dimensions.get('window');
  // Vous pouvez réinitialiser vos styles ici si nécessaire
});

export default RankinStyle;