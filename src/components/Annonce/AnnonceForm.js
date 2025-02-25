import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EventStyle from '../../styles/EventStyle';
import ConstAnnonce from './ConstAnnonce';
import AnnonceStyle from '../../styles/AnnonceStyles';
import GradientText from "react-native-gradient-texts";
import AnnonceCard from './AnnonceCard';

const AnnonceForm = () => {
    const navigation = useNavigation(); 

    const services = [
        {
          id: '1',
          Date: '17 Septembre',
          Theme: 'Culte dominical',
          Name_event: 'La messe',
          description: 'Service régulier avec communion',
          duration: '13h-14h'
        },
        {
          id: '2',
          Date: '24 Septembre',
          Theme: 'Étude biblique',
          Name_event: 'Session étude',
          description: 'Étude approfondie des Évangiles',
          duration: '18h-19h30'
        },
        {
          id: '3',
          Date: '1 Octobre',
          Theme: 'Concert gospel',
          Name_event: 'Louanges',
          description: 'Célébration musicale communautaire',
          duration: '20h-22h'
        },
        {
          id: '4',
          Date: '1 Octobre',
          Theme: 'Concert gospel',
          Name_event: 'Louanges',
          description: 'Célébration musicale communautaire',
          duration: '20h-22h'
        },
        {
          id: '5',
          Date: '1 Octobre',
          Theme: 'Concert gospel',
          Name_event: 'Louanges',
          description: 'Célébration musicale communautaire',
          duration: '20h-22h'
        },
    ];

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
                        placeholder="rechercher..."
                        placeholderTextColor="#9CA3AF"
                    />
                    <TouchableOpacity>
                        <Image source={require('../../assets/icons/short.png')} />
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <ConstAnnonce
                    icon={require('../../assets/icons/preach.png')}
                    title="Annonces"
                    subtitle="Les informations importantes et mises à jour pour les membres de l'église sont toujours ici avec les dernières nouveautés, partenaires et des opportunités d'engagement envers l'église."
                />
            </TouchableOpacity>

            <View style={AnnonceStyle.ContainnerProchEvent}>
                <GradientText
                    text={"Prochains Evènements ..."}
                    fontSize={22}
                    isGradientFill
                    gradientColors={["#4983F6", "#FBACB7", "#C175F5"]}
                    gradientLocations={[0, 0.4, 0.8]}
                    style={AnnonceStyle.TitleHome1}
                />
                
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    style={{ flex: 1 }}
                    showsVerticalScrollIndicator={false}
                    scrollEnabled={true}
                >
                    {services.length > 0 ? (
                        services.map((service) => (
                            <AnnonceCard
                                key={service.id}
                                Date={service.Date}
                                Theme={service.Theme}
                                Name_event={service.Name_event}
                                description={service.description}
                                duration={service.duration}
                            />
                        ))
                    ) : (
                        <Text>Aucun événement disponible</Text>
                    )}
                </ScrollView>
            </View>
        </View>
    );
};

export default AnnonceForm;
