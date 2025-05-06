import React from 'react';
import { View, Text, Image } from 'react-native';
import GradientText from "react-native-gradient-texts";
import AproposStyle from '../../styles/AproposStyle';


const AproposForm = ({eventData }) => {

  return (
    <View style={AproposStyle.infoCard}>
      <View style ={AproposStyle.gradContainer}>
        <GradientText
          text={eventData.Name_event}
          fontSize={22}
          isGradientFill
          gradientColors={["#4983F6", "#FBACB7", "#C175F5"]}
          gradientLocations={[0, 0.4, 0.8]}
          style={AproposStyle.eventTitle}
          locations={{ x: "43%", y: "35%" }}
        />
      </View>
      <View style={AproposStyle.HeaderContainer}>
        <View style={AproposStyle.row}>
          <Text style={AproposStyle.eventD}>{eventData.Theme}</Text>
        </View>
        <View style={AproposStyle.row}>
          <Image 
            source={require("../../assets/icons/group.png")} 
            style={AproposStyle.icon} 
          />
          <Text style={AproposStyle.eventAddress}>{eventData.target_type}</Text>
        </View>
        <View style={AproposStyle.dateTimeContainer}>
          <Text style={AproposStyle.dateTimeLabel}>Heures - Date</Text>
          <View style={{flexDirection: "row", gap: "3%"} }>
            <Text style={AproposStyle.dateTimeText}>{eventData.Duration} : {eventData.Date}</Text>
            <Image 
              source={require("../../assets/icons/clock.png")} 
              style={AproposStyle.icon} 
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default AproposForm;