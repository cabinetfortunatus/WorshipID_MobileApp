
import { View, Text, Image } from 'react-native';
import RankinStyle from '../../styles/RankingStyle';

const ConstRanking = ({ icon, title, subtitle}) => (

  <View style={RankinStyle.menuItem}>
        <View style={RankinStyle.menuIconContainer}>
            <Image source={icon} style={RankinStyle.menuIcon} />
        </View>
        <View style={RankinStyle.menuTextContainer}>
            <Text style={RankinStyle.menuTitle}>{title}</Text>
            <Text style={RankinStyle.menuSubtitle}>{subtitle}</Text>
        </View>
    </View>

);

export default ConstRanking;