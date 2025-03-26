import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MembershipScreen from '../screens/MembershipScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import EventScreen from '../screens/EventScreen';
import AnnonceScreen from '../screens/AnnonceScreen';
import AproposScreen from '../screens/AproposScreen';
import GroupScreen from '../screens/GroupScreen';
import RankingScreen from '../screens/RankingScreen';
import AnnonceInfoStyles from '../screens/AnnonceInfoScreen';
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"
        screenOptions={{ 
          headerShown: false
        }}>
        <Stack.Screen name="Membership" component={MembershipScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Event" component={EventScreen} />
        <Stack.Screen name="Annonce" component={AnnonceScreen} />
        <Stack.Screen name="Apropos" component={AproposScreen} />
        <Stack.Screen name="Group" component={GroupScreen} />
        <Stack.Screen name="Ranking" component={RankingScreen} />
        <Stack.Screen name="AnnonceInfo" component={AnnonceInfoStyles} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
