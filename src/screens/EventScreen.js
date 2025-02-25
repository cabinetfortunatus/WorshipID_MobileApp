import React from 'react';
import { View, ScrollView, Image,FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import EventForm from '../components/Events/EventForm';
import EventStyle from '../styles/EventStyle';


const EventScreen = () => {
  return (
    <LinearGradient 
      colors={['#94BCEB', '#A49EF4', '#FFF']}  
      locations={[0, 0.4, 0.6]}
      style={EventStyle.BackGroundView} 
    >
      {/* <View> */}
        <Image
              source={require('../assets/images/croix.jpg')}
              style={EventStyle.HeighImage}
            />
        <View style={EventStyle.overlay}>
       
        <ScrollView 
          style={EventStyle.container}
          contentContainerStyle={{ flexGrow: 1 }} >
            <LinearGradient 
            colors={['#A49EF4',  '#f3f8fd']}  
            locations={[0, 0.5]}
            style={EventStyle.BackGroundView} >
            <EventForm /> 
          </LinearGradient>
        </ScrollView>
      </View>
      {/* </View> */}
    </LinearGradient>
  );
};

export default EventScreen;