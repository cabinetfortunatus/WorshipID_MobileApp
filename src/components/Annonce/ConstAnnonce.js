
import { View, Text, Image } from 'react-native';
import AnnonceStyle from '../../styles/AnnonceStyles';
const ConstAnnonce = ({ icon, title, subtitle}) => (

  <View style={AnnonceStyle.menuItemAnnonce}>
        <View style={AnnonceStyle.menuIconContainerAnnonce}>
            <Image source={icon} style={AnnonceStyle.menuIconAnnonce} />
        </View>
        <View style={AnnonceStyle.menuTextContainerAnnonce}>
            <Text style={AnnonceStyle.menuTitleAnnonce}>{title}</Text>
            <Text style={AnnonceStyle.menuSubtitleAnnonce}>{subtitle}</Text>
        </View>
    </View>

);

export default ConstAnnonce;