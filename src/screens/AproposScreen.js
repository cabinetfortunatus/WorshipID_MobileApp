import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import AproposStyle from '../styles/AproposStyle';
import AproposForm from '../components/A_propos_Event/AproposForm';

const AproposScreen = ({ navigation, route }) => {
  const eventData = {
    title: "Événement de Formation",
    description: "Formation Informatique ",
    apropos: "Rejoignez-nous pour une session de formation sur les meilleures pratiques en développement logiciel.",
    address: "123 Rue des Développeurs, Paris, France",
    date: "2025-03-15",
    time: "14:00",
    image: require('../assets/images/messe1.jpg'),
    besoins: [
      "Ordinateurs portables avec une configuration minimale de 8 Go de RAM",
      "Connexion Internet stable",
      "Tableau blanc et marqueurs"
    ]
  };

  const handleBackPress = () => {
    if (navigation && navigation.goBack) {
      navigation.goBack();
    } else {
      console.log("Navigation not available");
    }
  };

  const [activeTab, setActiveTab] = useState('apropos');

  return (
    <View style={AproposStyle.container}>
      <Image 
        source={eventData.image} 
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
            style={[AproposStyle.tabButton, activeTab === 'apropos' && AproposStyle.activeTab]} 
            onPress={() => setActiveTab('apropos')}
          >
            <Text style={[AproposStyle.tabText, activeTab === 'apropos' && AproposStyle.activeTabText]}>À propos</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[AproposStyle.tabButton, activeTab === 'besoins' && AproposStyle.activeTab]} 
            onPress={() => setActiveTab('besoins')}
          >
            <Text style={[AproposStyle.tabText, activeTab === 'besoins' && AproposStyle.activeTabText]}>Besoins</Text>
          </TouchableOpacity>
        </View>
        
        <ScrollView style={AproposStyle.contentContainer}>
          {activeTab === 'apropos' ? (
            <Text style={AproposStyle.descriptionText}>{eventData.apropos}</Text>
          ) : (
            <>
              {eventData.besoins && eventData.besoins.length > 0 ? (
                eventData.besoins.map((item, index) => (
                  <Text key={index} style={AproposStyle.besoinsText}>
                    • {item}
                  </Text>
                ))
              ) : (
                <Text style={AproposStyle.besoinsText}>Aucun besoin spécifique mentionné.</Text>
              )}
            </>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default AproposScreen;