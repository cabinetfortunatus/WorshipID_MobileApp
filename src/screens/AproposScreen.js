import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import AproposStyle from '../styles/AproposStyle';
import AproposForm from '../components/A_propos_Event/AproposForm';
import { useRoute } from '@react-navigation/native';
import {Axios} from '../components/api/axios';

const AproposScreen = ({ navigation }) => {
  const [participants, setParticipants] = useState([]);
  const route = useRoute();
  const { eventData } = route.params;
  const axios = Axios();

  const getParticipant = async () => {
    if(eventData.target_type === "group"){
      try{
          let response = await axios.get(`/groups/${eventData.Id_group}/members`);
          console.log(response.data); 
          setParticipants(response.data);
          Alert.alert( `Il y a ${response.data.length} participants dans cet évènement.`);
      }
      catch (error) {
        console.error("Error fetching participants:", error);
        Alert.alert("Erreur", "Une erreur s'est produite lors de la récupération des participants.");
      }
  }
  else{
      try{
        let response = await axios.get("/members/");
        console.log(response.data); 
        setParticipants(response.data);
        Alert.alert(`Il y a ${response.data.length} participants dans cet évènement.`);
    }
    catch (error) {
      console.error("Error fetching participants:", error);
      Alert.alert("Erreur", "Une erreur s'est produite lors de la récupération des participants.");
    }
  }

  }
  const handleBackPress = () => {
    if (navigation && navigation.goBack) {
      navigation.goBack();
    } else {
      console.log("Navigation not available");
    }
  };

  useEffect(() => {
    getParticipant();
   }, []);
  const [activeTab, setActiveTab] = useState('apropos');

  return (
    <View style={AproposStyle.container}>
      <Image 
        source={require('../assets/images/croix.jpg')} 
        style={AproposStyle.HeighImage}
      />

      <TouchableOpacity
        style={AproposStyle.backButton}
        onPress={handleBackPress} 
      >
        <Text style={AproposStyle.backButtonText}>←</Text>
      </TouchableOpacity>
      
      <View style={{flex: 1, alignItems: "center"}}>
        <AproposForm eventData={eventData} />
        
        <View style={AproposStyle.tabBarContainer}>
          
          <TouchableOpacity 
            style={[AproposStyle.tabButton, activeTab === 'besoins' && AproposStyle.activeTab]} 
            onPress={() => setActiveTab('besoins')}
          >
            <Text style={[AproposStyle.tabText, activeTab === 'besoins' && AproposStyle.activeTabText]}>participants</Text>
          </TouchableOpacity>
        </View>
        
        <ScrollView style={AproposStyle.contentContainer}>
            <>
              {participants && participants.length > 0 ? (
                participants.map((item, index) => (
                  <Text key={index} style={AproposStyle.besoinsText}>
                    {item.id} : {item.Name} {item.First_name}
                  </Text>
                ))
              ) : (
                <Text style={AproposStyle.besoinsText}>Aucun participant mentionné.</Text>
              )}
            </>

        </ScrollView>
      </View>
    </View>
  );
};

export default AproposScreen;