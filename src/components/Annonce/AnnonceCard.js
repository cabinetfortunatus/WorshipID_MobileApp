import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import AnnonceStyle from '../../styles/AnnonceStyles';
import { useNavigation } from '@react-navigation/native';

const AnnonceCard = ({ Date, Theme, Name_event, description, duration }) => {
  const navigation = useNavigation();

  return (
    <View style={AnnonceStyle.cardContainer}>
      <Text style={AnnonceStyle.cardDate}>{Date}</Text>
      <Text style={AnnonceStyle.cardTheme}>{Theme}</Text>
      
      <View style={AnnonceStyle.CardIconText}>
        <View style={AnnonceStyle.NameEventContainer}>
          <View style={AnnonceStyle.TextContent}>
            <Text style={AnnonceStyle.CardNameEvent} numberOfLines={1}>{Name_event}</Text>
            <Text style={AnnonceStyle.cardDescription} numberOfLines={2}>{description}</Text>
            
            <View style={AnnonceStyle.DurIcoContainer}>
              <Text style={AnnonceStyle.cardDuration}>{duration}</Text>
              <Image 
                source={require('../../assets/icons/clock.png')} 
                style={AnnonceStyle.icon} 
              />
              <Image 
                source={require('../../assets/icons/notif.png')} 
                style={AnnonceStyle.icon} 
              />
            </View>
          </View>
        </View>
        
        <TouchableOpacity 
          style={AnnonceStyle.button} 
          onPress={() => console.log("hi")}>
          <Text style={AnnonceStyle.buttonText}>Adhérer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AnnonceCard;
