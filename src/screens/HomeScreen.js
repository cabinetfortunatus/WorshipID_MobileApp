import React from 'react';
import { View, ScrollView, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import HomeForm from '../components/Home/HomeForm';
import  loginStyles  from '../styles/LoginStyles';
import HomeStyles from '../styles/HomeStyle';
const HomeScreen = () => {
  return (
    <LinearGradient 
      colors={['#94BCEB', '#A49EF4', '#FFF']}  
      locations={[0.2, 0.4, 0.6]}
      style={loginStyles.BackGroundView} 
    >
    <Image
        source={require('../assets/images/pigeon.png')}
        style={loginStyles.topRightImage}
      />
      <View style={HomeStyles.overlay}>
        <ScrollView >
          <HomeForm />
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

export default HomeScreen;