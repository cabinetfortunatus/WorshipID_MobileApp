import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import GroupStyle from '../../styles/GroupStyle';

const GroupCard = ({ addTogroup,removeFromgroup, Name_group, Fonction }) => (
  <View style={GroupStyle.cardContainer}>
   
    <View style={GroupStyle.infoContainer}>
      <View style={{flexDirection:"row", gap:"15%"}}>
        <Text style={GroupStyle.cardName_group}>{Name_group}</Text>
        <Text>Mon groupe</Text>
      </View>
      <Text style={GroupStyle.functionText}>{Fonction}</Text>
    </View>
    <View style={GroupStyle.buttonContainer}>
      <TouchableOpacity style={GroupStyle.buttontop} onPress={addTogroup}>
        <Text style={GroupStyle.buttonText}>Affilier</Text>
      </TouchableOpacity>
      <TouchableOpacity style={GroupStyle.buttonbuttom} onPress={removeFromgroup}>
        <Text style={GroupStyle.buttonText}>Annuler</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default GroupCard;