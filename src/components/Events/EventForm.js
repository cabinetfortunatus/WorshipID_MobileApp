import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
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
    ];
    const navigation = useNavigation();
 
    return (
    <View>
        <TouchableOpacity
            style={EventStyle.backButton}
            onPress={() => navigation.navigate("Home")}
        >
            <Text style={EventStyle.backButtonText}>←</Text>
        </TouchableOpacity>

        <View style={EventStyle.searchContainer}>
          <View style={EventStyle.searchBar}>
            <TouchableOpacity>
                <Image source={require('../../assets/icons/search.png')}/>
            </TouchableOpacity>
            
            <TextInput
              style={EventStyle.searchInput}
              placeholder="rechercher..."
              placeholderTextColor="#9CA3AF"
            />
            <TouchableOpacity>
                 <Image source={require('../../assets/icons/short.png')}/>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress = {() => navigation.navigate("Home")}>
            <ConstEvent
                icon={require('../../assets/icons/calendar.png')}
                title="Événements à suivre..."
                subtitle="Créer le moment spirituel partagé avec tous les membres de la communauté et aux visiteurs souhaitant participer à une expérience de louange et d'adoration."
                />
              
        </TouchableOpacity>
  
        <View style={EventStyle.card}>
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
      </View>
    </View>
  
    );
  };
  
  
  export default EventForm;