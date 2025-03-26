import React from 'react';
import { Image, View, TouchableOpacity,Text, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AnnonceInfoStyles from '../styles/AnnonceInfoStyles';
import { useNavigation } from '@react-navigation/native';
import ConstRanking from '../components/Ranking/ConstRanking';
import { Dimensions } from 'react-native';
const AnnonceInfoScreen = () => {
  const navigation = useNavigation();
  const { width } = Dimensions.get('window');
  return (
    <LinearGradient 
      colors={['#94BCEB', '#A49EF4', '#FFF']}  
      locations={[0.2, 0.4, 0.6]}
      style={AnnonceInfoStyles.BackGroundView} 
    >
        <TouchableOpacity
                style={AnnonceInfoStyles.backButton}
                onPress={() => navigation.navigate("Annonce")}
            >
                <Text style={AnnonceInfoStyles.backButtonText}>←</Text>
        </TouchableOpacity>
        <View style={AnnonceInfoStyles.overlay}>
            <View style={AnnonceInfoStyles.searchContainer}>
                    <View style={AnnonceInfoStyles.searchBar}>
                        <TouchableOpacity>
                            <Image 
                                source={require('../assets/icons/search.png')} 
                                style={{ width: width * 0.05, height: width * 0.05 }}
                            />
                        </TouchableOpacity>

                        <TextInput
                            style={AnnonceInfoStyles.searchInput}
                            placeholder="rechercher..."
                            placeholderTextColor="#9CA3AF"
                        />

                        <TouchableOpacity>
                            <Image 
                                source={require('../assets/icons/short.png')} 
                                style={{ width: width * 0.05, height: width * 0.05 }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity 
                    style={{ alignSelf: 'center', marginBottom:"15%" }}
                    onPress={() => navigation.navigate("Annonce")}
                >
                    <ConstRanking
                        icon={require('../assets/icons/preach.png')}
                        title="Annonces"
                        subtitle="Les informations importantes et mises à jour pour les membres de l'église sont toujours ici avec les dernières nouveautés, partenaires et des opportunités d'engagement envers l'église."
                    />
                </TouchableOpacity>
                <View style ={AnnonceInfoStyles.rankingCard}>
                    <Text>Salut</Text>
                </View>
        </View>
    </LinearGradient>
  );
};

export default AnnonceInfoScreen;