import React from 'react';
import { Image, View, TouchableOpacity,Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RankinStyle from '../styles/RankingStyle';
import RankingForm from '../components/Ranking/FormRanking';
import { useNavigation } from '@react-navigation/native';
const RankingScreen = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient 
      colors={['#94BCEB', '#A49EF4', '#FFF']}  
      locations={[0.2, 0.4, 0.6]}
      style={RankinStyle.BackGroundView} 
    >
        {/* <Image
            source={require('../assets/images/croix.jpg')}
            style={RankinStyle.ImageHeader}
        /> */}
        <TouchableOpacity
                style={RankinStyle.backButton}
                onPress={() => navigation.navigate("Home")}
            >
                <Text style={RankinStyle.backButtonText}>←</Text>
        </TouchableOpacity>
        <View style={RankinStyle.overlay}>
          <RankingForm/>
        </View>
    </LinearGradient>
  );
};

export default RankingScreen;