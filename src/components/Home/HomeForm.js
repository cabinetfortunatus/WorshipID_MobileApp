import React from 'react';
import { View, Text,  Image, SafeAreaView,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GradientText from "react-native-gradient-texts";
import MenuItem from './MenuItem';
import HomeStyle from '../../styles/HomeStyle';

const HomeScreen = () => {
const navigation = useNavigation();

  return (
        <View>
            <SafeAreaView  style ={HomeStyle.containerGrad}>
                <GradientText
                    text={"Louer"}
                    fontSize={30}
                    isGradientFill
                    gradientColors={["#4983F6","#FBACB7", "#C175F5"]}
                    gradientLocations={[0, 0.4, 0.8]}
                    locations={{ x: "20%", y: "60%" }}
                />
                <GradientText
                    text={"Le Seigneur ..."}
                    fontSize={35}
                    isGradientFill
                    gradientColors={["#4983F6","#FBACB7", "#C175F5"]}
                    gradientLocations={[0, 0.4, 0.8]}
                    locations={{ x: "45%", y: "25%" }}
                />  
            </SafeAreaView>
            
            <View style={HomeStyle.ctaContainer}>
                <View style ={HomeStyle.ctaTextContainer}>
                    <Text style={HomeStyle.ctaText}>Soyez les bienvenus, que la paix et la grâce vous accompagnent.</Text>
                    <Text style={HomeStyle.ctaSubtext}>Connectons-nous pour avancer ensemble dans la foi.</Text>
                </View>
                <View style={HomeStyle.ctaImageContainer}>
                    <Image 
                        source={require('../../assets/images/Male.png')} 
                        style={HomeStyle.ctaImage}
                    />
                </View>
            </View>
                <MenuItem
                    icon={require('../../assets/icons/calendar.png')}
                    title="Événements à suivre..."
                    subtitle="Créer le moment spirituel partagé avec tous les membres de la communauté et aux visiteurs souhaitant participer à une expérience de louange et d'adoration."
                    onPress={() => navigation.navigate('Event')}
                    />

                <MenuItem
                    icon={require('../../assets/icons/actuality.png')}
                    title="Les Actualités"
                    subtitle="Vous pouvez voir ici les événements récents, les annonces importantes et les infos à jour concernant la communauté."
                    onPress={() => navigation.navigate('News')}
                />

                <MenuItem
                    icon={require('../../assets/icons/preach.png')}
                    title="Annonces"
                    subtitle="Les informations importantes et se mises à jour pour les membres de l'église sont toujours ici avec les dernières nouveautés, partenaires et des opportunités d'engagement envers l'église."
                    onPress={() => navigation.navigate('Annonce')}
                />

                <MenuItem
                    icon={require('../../assets/icons/Ranking.png')}
                    title="Classements"
                    subtitle="Soyez plus actifs et plus dynamiques dans les différents événements et activités, votre taux de participation active vous récompense vos engagements et témoignent d'une plus grande implication dans la vie de l'église."
                    onPress={() => navigation.navigate('Rankings')}
                />
                <MenuItem
                    icon={require('../../assets/icons/group.png')}
                    title="Groupes"
                    subtitle="Ces groupes permettent de renfoncer la communauté, d'encourager l'engagement spirituel, et de répondre aux besoins veriés des membres et l'église. Ils favorisent également la croissance personnele et collective dans la foi chrétiènne."
                    onPress={() => navigation.navigate('Group')}
                />
        </View>
  );
};

export default HomeScreen;