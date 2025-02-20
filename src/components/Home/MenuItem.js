
import { View, Text, TouchableOpacity, Image } from 'react-native';
import HomeStyles from '../../styles/HomeStyle';

const MenuItem = ({ icon, title, subtitle, onPress }) => (
  <TouchableOpacity style={HomeStyles.menuItem} onPress={onPress}>
    <View style={HomeStyles.menuIconContainer}>
     <Image source={icon} style={HomeStyles.menuIcon} />
    </View>
    <View style={HomeStyles.menuTextContainer}>
      <Text style={HomeStyles.menuTitle}>{title}</Text>
      <Text style={HomeStyles.menuSubtitle}>{subtitle}</Text>
    </View>
  </TouchableOpacity>
);

export default MenuItem;