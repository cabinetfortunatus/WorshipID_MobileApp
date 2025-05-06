import React, { useState, useMemo, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, TextInput, Alert } from 'react-native';
import RankinStyle from '../../styles/RankingStyle';
import { useNavigation } from '@react-navigation/native';
import GradientText from "react-native-gradient-texts";
import ConstRanking from './ConstRanking';
import { RankingData } from './RankingData';
import * as Progress from 'react-native-progress';
import { Dimensions } from 'react-native';
import {Axios} from '../api/axios';
import RNFS from 'react-native-fs';

const { width } = Dimensions.get('window');

const RankingForm = () => {
    const navigation = useNavigation();
    const [sortedData, setSortedData] = useState([]);
    const [EventStats, setEventStats] = useState([]);
    const [activeTab, setActiveTab] = useState('general');
    const axios = Axios();
    const getNestedValue = (obj, path) => {
        return path.split('.').reduce((acc, part) => acc && acc[part], obj) || 0;
    };
    const loadImage = async (blob, id) => {
        if (!blob) return null; 
        const path = `${RNFS.CachesDirectoryPath}/${id}_${Date.now()}.jpg`;
        await RNFS.writeFile(path, blob, 'base64');
        return `file://${path}`;
      };
    const rankingConfig = useMemo(() => ({
        general: {
            icon: require('../../assets/icons/award.png'),
            title: 'Classement général',
            data: RankingData.classements_person,
            sortKey: 'general.points',
            displayFields: {
                mainValue: RankingData.classements.general.rang,
                subValue: RankingData.classements.general.points
            }
        },
        participation: {
            icon: require('../../assets/icons/groups.png'),
            title: 'Participation par événements',
            data: RankingData.activites,
            sortKey: 'progression',
            displayFields: {
                mainValue: `${RankingData.classements.participation.pourcentage}%`,
                subValue: `${RankingData.classements.evenements.nombre} événements`
            }
        }
    }), []);

    const getrankingData = async () => {
        try {
            const response = await axios.get('/members/ranking');
            const updatedData = await Promise.all(
                response.data.map(async (item) => {
                  const ImageUri = await loadImage(item.Image, item.id);
                  return { ...item, ImageUri };
                })
              );
            console.log(response.data);
            setSortedData(updatedData);
        } catch (error) {
            console.error(error);
        }
    }
    const getEventRanking = async () => {
        try {
            const response = await axios.get('/event/stats');
            console.log(response.data);
            setEventStats(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getrankingData();
        getEventRanking();
    }, []);

  

    const renderItem = ({ item, index }) => {
        if (activeTab === 'general') {
            return (
                <View style={RankinStyle.rankingDetails}>
                    <Image
                        source={{ uri: item.ImageUri }}
                        style={{ 
                            width: width * 0.12, 
                            height: width * 0.12, 
                            borderRadius: width * 0.06 
                        }}
                    />
                    <View style={{ marginLeft: width * 0.03, flex: 1 }}>
                        <Text style={RankinStyle.TextValue}>
                            {item.First_name} {item.Name}
                        </Text>
                        <Text style={RankinStyle.TextValue}>
                            Points: {item.Score}
                        </Text>
                        <Text style={RankinStyle.TextValue}>
                            Rang: {index+1}
                        </Text>
                    </View>
                </View>
            );
        }

        if (activeTab === 'participation') {
            const rank = index + 1;
            let awardColor;
            switch(rank) {
                case 1: 
                    awardColor = "#FFD700"; 
                    break;
                case 2: 
                    awardColor = "#C0C0C0"; 
                    break;
                case 3: 
                    awardColor = "#CD7F32"; 
                    break;
                default: 
                    awardColor = "#4983F6";
            }
            
            return (
                <View style={RankinStyle.rankingDetails}>
                    <Image 
                        source={require('../../assets/icons/award.png')} 
                        style={{ 
                            width: width * 0.08, 
                            height: width * 0.08, 
                            tintColor: awardColor 
                        }} 
                    />
                    <View style={{ flex: 1, marginLeft: width * 0.03 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={RankinStyle.rankTitle}>{item.nom_evenement}</Text>
                            <Text style={RankinStyle.rankValue}>
                                {rank}{rank === 1 ? "er" : "e"}
                            </Text>
                        </View>
                        <Progress.Bar
                            progress={item.taux_participation / 100}
                            width={width * 0.45}
                            color="#4983F6"
                        />
                        <Text style={RankinStyle.rankSubText}>
                            {item.taux_participation}%{"\n"}{item.nombre_total} participants
                        </Text>
                        <Text style={RankinStyle.tags}>
                            {item.nombre_present}  présents, {item.nombre_absent} absents
                        </Text>
                    </View>
                </View>
            );
        }
        
        return null;
    };

    const renderRankingCard = (type) => {
        const config = rankingConfig[type];
        
        return (
            <TouchableOpacity 
                onPress={() => setActiveTab(activeTab === type ? null : type)}
                key={type}
            >
                <View style={RankinStyle.rankingCard}>
                    <Image
                        source={config.icon}
                        style={{ 
                            width: width * 0.08, 
                            height: width * 0.08, 
                            tintColor: "#4983F6" 
                        }}
                    />
                    <Text style={RankinStyle.rankTitle}>{config.title}</Text>
                    
                    
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={RankinStyle.BackGroundView}>
            <TouchableOpacity 
                style={{ alignSelf: 'center' }}
                onPress={() => navigation.navigate("Home")}
            >
                <ConstRanking
                    icon={require('../../assets/icons/Ranking.png')}
                    title="Classements"
                    subtitle="Soyez plus actifs et plus dynamiques dans les différents événements et activités, votre taux de participation active vous récompense vos engagements et témoignent d'une plus grande implication dans la vie de l'église."
                    onPress={() => navigation.navigate('Home')}
                />
            </TouchableOpacity>
            
            <View style={RankinStyle.GradientContainer}>
                <GradientText
                    text={"Classements ..."}
                    fontSize={width * 0.06}
                    isGradientFill
                    gradientColors={["#4983F6", "#FBACB7", "#C175F5"]}
                    locations={{ x: "35%", y:"80%"}}
                />
            </View>

            <View style={RankinStyle.rankingContainer}>
                {Object.keys(rankingConfig).map(renderRankingCard)}
            </View>

            {activeTab && (
                <FlatList
                    data={activeTab == "general" ? sortedData: EventStats}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => `${activeTab}-${index}`}
                    contentContainerStyle={RankinStyle.Scroll}
                    style={{ width: '95%' }}
                />
            )}
        </View>
    );
};

export default RankingForm;