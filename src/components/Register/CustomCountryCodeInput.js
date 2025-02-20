
import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { View, Text } from 'react-native';
import { membershipStyles } from '../../styles/membershipStyles';

const CustomCountryCodeInput = ({ value, onValueChange, countries, label }) => (
    <View >
      <Text style={membershipStyles.label}>{label}</Text>
      <View style={membershipStyles.countryCodePicker}>
        <Picker selectedValue={value} onValueChange={onValueChange}>
          {countries.map(country => (
            <Picker.Item key={country.value} label={country.label} value={country.value} />
          ))}
        </Picker>
      </View>
    </View>
  );
  
  export default CustomCountryCodeInput;