import React from 'react';
import { View, Text, Image } from 'react-native';
import GradientText from "react-native-gradient-texts";
import AproposStyle from '../../styles/AproposStyle';

const AproposForm = ({ eventData }) => {
  const { title, description, address, date, time } = eventData;

  return (
    <View style={AproposStyle.infoCard}>
      <View style ={AproposStyle.gradContainer}>
        <GradientText
          text={title}
          fontSize={22}
          isGradientFill
          gradientColors={["#4983F6", "#FBACB7", "#C175F5"]}
          gradientLocations={[0, 0.4, 0.8]}
          style={AproposStyle.eventTitle}
          locations={{ x: "45%", y: "35%" }}
        />
      </View>
      <View style={AproposStyle.HeaderContainer}>
        <View style={AproposStyle.row}>
          <Text style={AproposStyle.eventD}>{description}</Text>
        </View>
        <View style={AproposStyle.row}>
          <Image 
            source={require("../../assets/icons/Location.png")} 
            style={AproposStyle.icon} 
          />
          <Text style={AproposStyle.eventAddress}>{address}</Text>
        </View>
        <View style={AproposStyle.dateTimeContainer}>
          <Text style={AproposStyle.dateTimeLabel}>Date - Heures</Text>
          <View style={{flexDirection: "row", gap: "3%"} }>
            <Text style={AproposStyle.dateTimeText}>{date} - {time}</Text>
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