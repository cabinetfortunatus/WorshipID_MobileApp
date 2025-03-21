import React from 'react';
import { View, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import GroupStyle from '../styles/GroupStyle';
import GroupForm from '../components/Groups/GroupForm';
const GroupScreen = () => {
  return (
    <LinearGradient 
      colors={['#94BCEB', '#A49EF4', '#FFF']}  
      locations={[0, 0.4, 0.6]}
      style={GroupStyle.container} 
    >
        <Image
              source={require('../assets/images/croix.jpg')}
              style={GroupStyle.HeighImage}
            />
        <View style={GroupStyle.overlay}>
       
        <View style={GroupStyle.container} > 
          <GroupForm/>
        </View>
      </View>
    </LinearGradient>
  );
};

export default GroupScreen;