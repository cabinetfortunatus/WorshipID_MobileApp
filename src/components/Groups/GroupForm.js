import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import GroupStyle from '../../styles/GroupStyle';
import ConstGroup from './ConstGroup';
import GroupCard from './GroupCard';
import { useNavigation } from '@react-navigation/native';
import GradientText from "react-native-gradient-texts";

const GroupForm = () => {
    
    const navigation = useNavigation();
    const Groups = [
        {
          id: '1',
          Name_group: 'Art',
          Fonction: 'Culte dominical',
        },
        {
          id: '2',
          Name_group: 'Gospel',
          Fonction: 'Étude biblique',
        },
        {
          id: '3',
          Name_group: 'Gospel',
          Fonction: 'Étude biblique',
        },
        {
          id: '4',
          Name_group: 'Gospel',
          Fonction: 'Étude biblique',
        },
       
    ];

 
    return (
    <View>
        <TouchableOpacity
            style={GroupStyle.backButton}
            onPress={() => navigation.navigate("Home")}
        >
            <Text style={GroupStyle.backButtonText}>←</Text>
        </TouchableOpacity>

        <View style={GroupStyle.searchContainer}>
          <View style={GroupStyle.searchBar}>
            <TouchableOpacity>
                <Image source={require('../../assets/icons/search.png')}/>
            </TouchableOpacity>
            
            <TextInput
              style={GroupStyle.searchInput}
              placeholder="rechercher..."
              placeholderTextColor="#9CA3AF"
            />
            <TouchableOpacity>
                 <Image source={require('../../assets/icons/short.png')}/>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress = {() => navigation.navigate("Home")}>
            <ConstGroup
                icon={require('../../assets/icons/group.png')}
                title="Groupes"
                subtitle="Ces groupes permettent de renfoncer la communauté, d'encourager l'engagement spirituel, et de répondre aux besoins veriés des membres et l'église. Ils favorisent également la croissance personnele et collective dans la foi chrétiènne."
                onPress={() => navigation.navigate('Home')}
                />
        </TouchableOpacity>
        <View style={GroupStyle.ContainnerProchEvent}>
            <GradientText
                  text={"Groupes ..."}
                  fontSize={22}
                  isGradientFill
                  gradientColors={["#4983F6", "#FBACB7", "#C175F5"]}
                  gradientLocations={[0, 0.4, 0.8]}
                  locations={{x:"20%", y:"20%"}}
              />
            <ScrollView
                    keyboardShouldPersistTaps="handled"
                    style={{ flex: 1 }}
                    showsVerticalScrollIndicator={false}
                    scrollEnabled={true}
                >
                    {Groups.length > 0 ? (
                        Groups.map((group) => (
                            <GroupCard
                                key={group.id}
                                Name_group={group.Name_group}
                                Fonction={group.Fonction}
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
  
  
  export default GroupForm;