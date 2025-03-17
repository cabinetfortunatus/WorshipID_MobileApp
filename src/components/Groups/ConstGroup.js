
import { View, Text, Image } from 'react-native';

import GroupStyle from '../../styles/GroupStyle';

const ConstGroup = ({ icon, title, subtitle}) => (

  <View style={GroupStyle.menuItem}>
        <View style={GroupStyle.menuIconContainer}>
            <Image source={icon} style={GroupStyle.menuIcon} />
        </View>
        <View style={GroupStyle.menuTextContainer}>
            <Text style={GroupStyle.menuTitle}>{title}</Text>
            <Text style={GroupStyle.menuSubtitle}>{subtitle}</Text>
        </View>
    </View>

);

export default ConstGroup;