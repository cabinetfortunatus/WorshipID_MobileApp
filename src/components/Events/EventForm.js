import React from 'react';
import { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import EventStyle from '../../styles/EventStyle';
import ConstEvent from './ConstEvent';
import ServiceCard from './ServiceCard';
import { useNavigation } from '@react-navigation/native';
import {Axios} from "../api/axios";

const EventForm = () => {

    const axios = Axios();
    const [initialData, setinitialData] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [events, setEvents] = useState([]);
  
    const GetEvent = async () => {
        try {
            const response = await axios.get('/event/');
            console.log(response.data);
            setinitialData(response.data);
            setEvents(response.data);
        } catch (error) {
            console.error('Erreur lors de la récupération des évenements:', error);
        }
    }
    useEffect(() => {
        GetEvent();
    }, []);

    useEffect(() => {
        if(searchText == ""){
            setEvents(initialData);
        }
        else{
            setEvents(() => initialData.filter((data) => {return ( data.Name_event && data.Name_event.toLowerCase().includes(searchText.toLocaleLowerCase()) )}))
        }
        
    }, [searchText]);

  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        style={EventStyle.backButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={EventStyle.backButtonText}>←</Text>
      </TouchableOpacity>

      <View style={EventStyle.searchContainer}>
        <View style={EventStyle.searchBar}>
          <TouchableOpacity>
            <Image source={require('../../assets/icons/search.png')} />
          </TouchableOpacity>

          <TextInput
            style={EventStyle.searchInput}
            placeholder="Rechercher..."
            placeholderTextColor="#9CA3AF"
            onChange={(e) => setSearchText(e.nativeEvent.text)}
          />

          <TouchableOpacity>
            <Image source={require('../../assets/icons/short.png')} />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <ConstEvent
          icon={require('../../assets/icons/calendar.png')}
          title= "Événements à suivre..."
          subtitle= "Créer un moment spirituel partagé avec toute la communauté."
        />
      </TouchableOpacity>

      <View style={EventStyle.card}>
        <FlatList
          data={events}
          renderItem={({ item }) => ( 
            <ServiceCard
              key={item.id}
              data = {item}
              id_group={item.Id_group}
              title={item.Name_event}
              description={item.Theme}
              icon={require('../../assets/images/colomb.png')}
            />
          )}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={EventStyle.Scroll}
          columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: "1%" }}
          keyboardShouldPersistTaps="handled"
        />
      </View>
    </View>
  );
};

export default EventForm;
