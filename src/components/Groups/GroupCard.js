import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import GroupStyle from '../../styles/GroupStyle';

const GroupCard = ({ Name_group, Fonction }) => (
  <View style={GroupStyle.cardContainer}>
   
    <View style={GroupStyle.infoContainer}>
      <Text style={GroupStyle.cardName_group}>{Name_group}</Text>
      <Text style={GroupStyle.functionText}>{Fonction}</Text>
    </View>
    <View style={GroupStyle.buttonContainer}>
      <TouchableOpacity style={GroupStyle.buttontop}>
        <Text style={GroupStyle.buttonText}>Affilier</Text>
      </TouchableOpacity>
      <TouchableOpacity style={GroupStyle.buttonbuttom}>
        <Text style={GroupStyle.buttonText}>Annuler</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default GroupCard;