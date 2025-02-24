import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import EventStyle from '../../styles/EventStyle';

const ServiceCard = ({ title, description, icon }) => (
  <View style={EventStyle.cardContainer}>
    <View style={EventStyle.CardIconContainer}>
      <Image source={icon}
             resizeMode="cover"
             style ={EventStyle.Image} />
    </View>
    <View style={EventStyle.CardIconText}>
        <View style={EventStyle.TextContainer}>
          <Text style={EventStyle.cardTitle}>{title}</Text>
          <Text style={EventStyle.cardDescription}>{description}</Text>
        </View>
        <TouchableOpacity style={EventStyle.button}>
          <Text style={EventStyle.buttonText}>voir</Text>
        </TouchableOpacity>
    </View>
  </View>
);

export default ServiceCard;
