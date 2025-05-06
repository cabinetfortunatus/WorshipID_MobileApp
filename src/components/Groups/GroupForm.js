import React from 'react';
import { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert
} from 'react-native';
import GroupStyle from '../../styles/GroupStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ConstGroup from './ConstGroup';
import GroupCard from './GroupCard';
import { useNavigation } from '@react-navigation/native';
import GradientText from "react-native-gradient-texts";
import {Axios} from "../api/axios";

const GroupForm = () => {
    const axios = Axios();
    const [initialData, setinitialData] = useState([]);
    const [groups, setGroups] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [id_member, setId_member] = useState(null);
    const navigation = useNavigation();

    const GetIdMember = async () => {
        id = await AsyncStorage?.getItem('id');
        setId_member(Number(id));
    }
    
    const Getgroup = async () => {
        try {
            const response = await axios.get('/groups/');
            console.log(response.data);
            setinitialData(response.data);
            setGroups(response.data);
        } catch (error) {
            console.error('Erreur lors de la récupération des groupes:', error);
        }
    }
    const addTogroup = async (id_group, id_member) => {
        try {
            const response = await axios.post(`members/${id_member}/groups/${id_group}`);
            console.log(response.data);
            Alert.alert('Succès', 'Vous avez été ajouté au groupe avec succès.');
        } catch (error) {
            console.error('Erreur lors de l\'ajout au groupe:', error);
            Alert.alert('Erreur', 'Une erreur est survenue lors de l\'ajout au groupe.');
        }
    }
    const removeFromgroup = async (id_group, id_member) => {
        try {
            const response = await axios.delete(`members/${id_member}/groups/${id_group}`);
            console.log(response.data);
            Alert.alert('Vous avez été supprimé du groupe');
        } catch (error) {
            console.error('Erreur lors du suppression:', error);
            Alert.alert('Erreur', 'Une erreur est survenue lors du suppression du groupe.');
        }
    }
    useEffect(() => {
        Getgroup();
        GetIdMember();
    }, []);

    useEffect(() => {
        if(searchText == ""){
            setGroups(initialData);
        }
        else{
            setGroups(() => initialData.filter((data) => {return ( data.Name_group && data.Name_group.toLowerCase().includes(searchText.toLocaleLowerCase()) )}))
        }
       
    }, [searchText]);
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
              onChange={(e) => setSearchText(e.nativeEvent.text)}
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
                    {groups.length > 0 ? (
                        groups.map((group) => (
                            <GroupCard
                                key={group.id}
                                id_group={group.id}
                                addTogroup={() => addTogroup(group.id, id_member)}
                                removeFromgroup={() => removeFromgroup(group.id, id_member)}
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