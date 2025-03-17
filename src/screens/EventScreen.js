import React from 'react';
import { View,Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import EventForm from '../components/Events/EventForm';
import EventStyle from '../styles/EventStyle';


const EventScreen = () => {
  return (
    <LinearGradient 
      colors={['#94BCEB', '#A49EF4', '#FFF']}  
      locations={[0, 0.4, 0.6]}
      style={EventStyle.container} 
    >
        <Image
              source={require('../assets/images/croix.jpg')}
              style={EventStyle.HeighImage}
            />
        <View style={EventStyle.overlay}>
          <EventForm /> 
        </View>
    </LinearGradient>
  );
};

export default EventScreen;