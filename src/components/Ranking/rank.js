import React, { useState, useMemo } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import RankinStyle from '../../styles/RankingStyle';
import { useNavigation } from '@react-navigation/native';
import GradientText from "react-native-gradient-texts";
import ConstRanking from './ConstRanking';
import { RankingData } from './RankingData';
import * as Progress from 'react-native-progress';

const RankingForm = () => {
    const navigation = useNavigation();
    const [activeTab, setActiveTab] = useState(null);

    // Fonction de récupération des valeurs imbriquées
    const getNestedValue = (obj, path) => {
        return path.split('.').reduce((acc, part) => acc && acc[part], obj) || 0;
    };

    // Configuration des types de classements
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

    // Tri des données
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
                        style={{ width: 50, height: 50 }}
                    />
                    <View style={{ marginLeft: 10 }}>
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
                    awardColor = "#FFD700"; // Or
                    break;
                case 2: 
                    awardColor = "#C0C0C0"; // Argent
                    break;
                case 3: 
                    awardColor = "#CD7F32"; // Bronze
                    break;
                default: 
                    awardColor = "#4983F6";
            }
            
            return (
                <View style={RankinStyle.rankingDetails}>
                    <Image 
                        source={require('../../assets/icons/award.png')} 
                        style={{ 
                            width: 30, 
                            height: 30, 
                            tintColor: awardColor 
                        }} 
                    />
                    <View style={{ flex: 1, marginLeft: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={RankinStyle.rankTitle}>{item.nom}</Text>
                            <Text style={RankinStyle.rankValue}>
                                {rank}{rank === 1 ? "er" : "e"}
                            </Text>
                        </View>
                        <Progress.Bar
                            progress={item.progression / 100}
                            width={180}
                            color="#FF5733"
                        />
                        <Text style={RankinStyle.rankSubText}>
                            {item.progression}% • {item.participants} participants
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
                        style={{ width: 30, height: 30, tintColor: "#4983F6" }}
                    />
                    <Text style={RankinStyle.rankTitle}>{config.title}</Text>
                    
                    {type === 'participation' && (
                        <Progress.Bar
                            progress={RankingData.classements.participation.pourcentage / 100}
                            width={100}
                            color="#FF5733"
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
        <View style={{ flex: 1 }}>
            <View style={RankinStyle.searchContainer}>
                <View style={RankinStyle.searchBar}>
                    <TouchableOpacity>
                        <Image source={require('../../assets/icons/search.png')} />
                    </TouchableOpacity>

                    <TextInput
                        style={RankinStyle.searchInput}
                        placeholder="rechercher..."
                        placeholderTextColor="#9CA3AF"
                    />

                    <TouchableOpacity>
                        <Image source={require('../../assets/icons/short.png')} />
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
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
                    fontSize={25}
                    isGradientFill
                    gradientColors={["#4983F6", "#FBACB7", "#C175F5"]}
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
                />
            )}
        </View>
    );
};

export default RankingForm;