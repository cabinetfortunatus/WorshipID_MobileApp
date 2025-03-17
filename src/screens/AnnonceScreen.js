import React from 'react';
import { View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AnnonceStyle from '../styles/AnnonceStyles';
import AnnonceForm from '../components/Annonce/AnnonceForm';


const AnnonceScreen = () => {
  return (
    <LinearGradient 
      colors={['#94BCEB', '#A49EF4', '#FFF']}  
      locations={[0, 0.4, 0.6]}
      style={AnnonceStyle.container} 
    >
        <Image
              source={require('../assets/images/croix.jpg')}
              style={AnnonceStyle.HeighImage}
            />
        <View style={AnnonceStyle.overlay}>
              {/* <LinearGradient 
                  colors={['#A49EF4',  '#f3f8fd']}  
                  locations={[0, 0.5]}
                   >
                
            </LinearGradient> */}
            <AnnonceForm/>
      </View>
    </LinearGradient>
  );
};

export default AnnonceScreen;