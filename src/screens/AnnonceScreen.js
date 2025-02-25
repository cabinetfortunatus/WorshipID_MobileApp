import React from 'react';
import { View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import EventStyle from '../styles/EventStyle';
import AnnonceForm from '../components/Annonce/AnnonceForm';


const AnnonceScreen = () => {
  return (
    <LinearGradient 
      colors={['#94BCEB', '#A49EF4', '#FFF']}  
      locations={[0, 0.4, 0.6]}
      style={EventStyle.BackGroundView} 
    >
        <Image
              source={require('../assets/images/croix.jpg')}
              style={EventStyle.HeighImage}
            />
        <View style={EventStyle.overlay}>
          <View style={EventStyle.container}>    
              <LinearGradient 
                  colors={['#A49EF4',  '#f3f8fd']}  
                  locations={[0, 0.5]}
                  style={EventStyle.BackGroundView} >
                <AnnonceForm/>
            </LinearGradient>
          </View>
      </View>
    </LinearGradient>
  );
};

export default AnnonceScreen;