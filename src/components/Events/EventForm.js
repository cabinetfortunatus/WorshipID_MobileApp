import React from 'react';
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

const EventForm = () => {
  const services = [
    {
      id: '1',
      title: 'La messe',
      description: 'Service régulier',
      icon: require('../../assets/images/messe.png'),
    },
    {
      id: '2',
      title: 'Cultes',
      description: 'Prière du matin',
      icon: require('../../assets/images/colomb.png'),
    },
    {
      id: '3',
      title: 'Prières',
      description: 'Service régulier',
      icon: require('../../assets/images/priere.png'),
    },
    {
      id: '4',
      title: 'Cours sur la Bible',
      description: 'Études bibliques',
      icon: require('../../assets/images/bible.png'),
    },
    {
      id: '5',
      title: 'Cours sur la Bible',
      description: 'Études bibliques',
      icon: require('../../assets/images/bible.png'),
    },
    {
      id: '6',
      title: 'La messe',
      description: 'Service régulier',
      icon: require('../../assets/images/messe.png'),
    },
  ];

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
          />

          <TouchableOpacity>
            <Image source={require('../../assets/icons/short.png')} />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <ConstEvent
          icon={require('../../assets/icons/calendar.png')}
          title="Événements à suivre..."
          subtitle="Créer un moment spirituel partagé avec toute la communauté."
        />
      </TouchableOpacity>

      <View style={EventStyle.card}>
        <FlatList
          data={services}
          renderItem={({ item }) => (
            <ServiceCard
              key={item.id}
              title={item.title}
              description={item.description}
              icon={item.icon}
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
