import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import EventStyle from '../../styles/EventStyle';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { Axios } from '../api/axios';

const ServiceCard = ({ title, description, icon, data }) => {
  const navigation = useNavigation();
  const [groups, setGroups] = useState([]);
  const [groupName, setGroupName] = useState("");
  const axios = Axios();

  const Getgroup = async () => {
    try {
        const response = await axios.get('/groups');
        console.log(response.data);
        setGroups(response.data);
    } catch (error) {
        console.error(error);
    }
}
useEffect(() => {
    Getgroup();
}, [data]);
useEffect(() => {
   setGroupName(groups.filter((group_data) => group_data.id == data.Id_group)?.[0]?.Name_group);
}, [groups]);

  return (
    <View style={EventStyle.cardContainer}>
      <View style={EventStyle.CardIconContainer}>
        <Image 
          source={icon}
          resizeMode="cover"
          style={EventStyle.Image} 
        />
      </View>
      <View style={EventStyle.CardIconText}>
        <View style={EventStyle.TextContainer}>
          <Text style={EventStyle.cardTitle}>{title}</Text>
          <Text style={EventStyle.cardTitle}>{data.target_type == "group"  ? (groupName): "Tous les membres"}</Text>
          <Text style={EventStyle.cardDescription}>{description}</Text>
        </View>
        <TouchableOpacity 
          style={EventStyle.button}
          onPress={() => navigation.navigate("Apropos", { eventData : data  })}
        >
          <Text style={EventStyle.buttonText}>voir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ServiceCard;