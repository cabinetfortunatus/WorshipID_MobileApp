import React, { useState, useMemo } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, TextInput } from 'react-native';
import RankinStyle from '../../styles/RankingStyle';
import { useNavigation } from '@react-navigation/native';
import GradientText from "react-native-gradient-texts";
import ConstRanking from './ConstRanking';
import { RankingData } from './RankingData';
import * as Progress from 'react-native-progress';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const RankingForm = () => {
    const navigation = useNavigation();
    const [activeTab, setActiveTab] = useState(null);

    const getNestedValue = (obj, path) => {
        return path.split('.').reduce((acc, part) => acc && acc[part], obj) || 0;
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

    const sortedData = useMemo(() => {
        if (!activeTab || !rankingConfig[activeTab]) return [];
        return [...rankingConfig[activeTab].data].sort((a, b) => {
            const key = rankingConfig[activeTab].sortKey;
            return getNestedValue(b, key) - getNestedValue(a, key);
        });
    }, [activeTab, rankingConfig]);

    const renderItem = ({ item, index }) => {
        if (activeTab === 'general') {
            return (
                <View style={RankinStyle.rankingDetails}>
                    <Image
                        source={item.general.image}
                        style={{ 
                            width: width * 0.12, 
                            height: width * 0.12, 
                            borderRadius: width * 0.06 
                        }}
                    />
                    <View style={{ marginLeft: width * 0.03, flex: 1 }}>
                        <Text style={RankinStyle.TextValue}>
                            {item.general.firstname} {item.general.name}
                        </Text>
                        <Text style={RankinStyle.TextValue}>
                            Points: {item.general.points}
                        </Text>
                        <Text style={RankinStyle.TextValue}>
                            Rang: {item.general.rang}
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
                            <Text style={RankinStyle.rankTitle}>{item.nom}</Text>
                            <Text style={RankinStyle.rankValue}>
                                {rank}{rank === 1 ? "er" : "e"}
                            </Text>
                        </View>
                        <Progress.Bar
                            progress={item.progression / 100}
                            width={width * 0.45}
                            color="#4983F6"
                        />
                        <Text style={RankinStyle.rankSubText}>
                            {item.progression}%{"\n"}{item.participants} participants
                        </Text>
                        <Text style={RankinStyle.tags}>
                            {item.tags.join(' • ')}
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
                    
                    {type === 'participation' && (
                        <Progress.Bar
                            progress={RankingData.classements.participation.pourcentage / 100}
                            width={width * 0.25}
                            color="#4983F6"
                        />
                    )}
                    
                    <Text style={RankinStyle.rankValue}>
                        {config.displayFields.mainValue}
                    </Text>
                    
                    <Text style={RankinStyle.rankSubText}>
                        {config.displayFields.subValue}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={RankinStyle.BackGroundView}>
            <View style={RankinStyle.searchContainer}>
                <View style={RankinStyle.searchBar}>
                    <TouchableOpacity>
                        <Image 
                            source={require('../../assets/icons/search.png')} 
                            style={{ width: width * 0.05, height: width * 0.05 }}
                        />
                    </TouchableOpacity>

                    <TextInput
                        style={RankinStyle.searchInput}
                        placeholder="rechercher..."
                        placeholderTextColor="#9CA3AF"
                    />

                    <TouchableOpacity>
                        <Image 
                            source={require('../../assets/icons/short.png')} 
                            style={{ width: width * 0.05, height: width * 0.05 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>

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
                    data={sortedData}
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