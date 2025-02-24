import React from 'react';
import { View, ScrollView, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MembershipForm from '../components/Register/MembershipForm';
import { membershipStyles } from '../styles/membershipStyles';

const MembershipScreen = () => {
  return (
    <LinearGradient 
      colors={['#94BCEB', '#A49EF4', '#FFF']}  
      locations={[0.2, 0.4, 0.6]}
      style={membershipStyles.BackGroundView} 
    >
      <Image
        source={require('../assets/images/pigeon.png')}
        style={membershipStyles.topRightImage}
      />
      <View style={membershipStyles.overlay}>
          <MembershipForm />
      </View>
    </LinearGradient>
  );
};

export default MembershipScreen;