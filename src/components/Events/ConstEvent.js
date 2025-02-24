
import { View, Text, Image } from 'react-native';
import EventStyle from '../../styles/EventStyle';

const ConstEvent = ({ icon, title, subtitle}) => (

  <View style={EventStyle.menuItem}>
        <View style={EventStyle.menuIconContainer}>
            <Image source={icon} style={EventStyle.menuIcon} />
        </View>
        <View style={EventStyle.menuTextContainer}>
            <Text style={EventStyle.menuTitle}>{title}</Text>
            <Text style={EventStyle.menuSubtitle}>{subtitle}</Text>
        </View>
    </View>

);

export default ConstEvent;