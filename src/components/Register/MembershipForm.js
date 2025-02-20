import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import CustomInput from '../CustomInput';
import CustomButton from './Button/CustomButton';
import ImagePickerComponent from './ImagePicker';
import GradientText from "react-native-gradient-texts";
import CustomCountryCodeInput from './CustomCountryCodeInput';
import { membershipStyles } from '../../styles/membershipStyles';
import { useNavigation } from '@react-navigation/native'; 

const INITIAL_FORM_DATA = {
  lastName: '',
  firstName: '',
  address: '',
  phone: '',
  countryCode: '+261',
  gender: '',
};

const COUNTRIES = [
  { label: "MG +261", value: "+261" },
  { label: "FR +33", value: "+33" },
  { label: "US +1", value: "+1" },
];

const MembershipForm = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [selectedImage, setSelectedImage] = useState(null);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const navigation = useNavigation(); 

  const handleChange = (field, value) => setFormData({ ...formData, [field]: value });

  const handleSubmit = () => {
    if (validateForm()) {
      const fullPhoneNumber = `${formData.countryCode}${formData.phone}`;
      const formDataWithFullPhone = {
        ...formData,
        phone: fullPhoneNumber,
        profileImage: selectedImage,
      };

      console.log('Formulaire soumis:', formDataWithFullPhone);

      Alert.alert('Formulaire soumis', JSON.stringify(formDataWithFullPhone, null, 2));
    }
  };

  const validateForm = () => {
    if (!formData.lastName || !formData.firstName || !formData.address || !formData.phone) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs obligatoires');
      return false;
    }
    if (!formData.gender) {
      Alert.alert('Erreur', 'Veuillez sélectionner votre genre');
      return false;
    }
    if (!acceptedTerms) {
      Alert.alert('Erreur', 'Veuillez accepter les conditions et politiques');
      return false;
    }
    return true;
  };

  return (
    <View style={membershipStyles.BlocContainer}>
      {/* <TouchableOpacity
        style={membershipStyles.backButton}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={membershipStyles.backButtonText}>←</Text>
      </TouchableOpacity> */}

      <View style={membershipStyles.titleContainer}>
        <GradientText
          text={"Devenir membre"}
          fontSize={30}
          isGradientFill
          gradientColors={["#4983F6","#FBACB7", "#C175F5"]}
          gradientLocations={[0, 0.4, 0.8]}
        />
      </View>

      <Text style={membershipStyles.subtitle}>
        Si vous souhaitez devenir membre de l'église, nous sommes 
        heureux de vous accueillir! {' '}
        <Text style={membershipStyles.link}>Veuillez vous inscrire ici.</Text>
      </Text>

      <CustomInput
        label="Nom"
        placeholder="Votre Nom"
        value={formData.lastName}
        onChangeText={(text) => handleChange('lastName', text)}
      />
      <CustomInput
        label="Prénom"
        placeholder="Votre Prénom"
        value={formData.firstName}
        onChangeText={(text) => handleChange('firstName', text)}
      />
      <CustomInput
        label="Adresse"
        placeholder="Votre adresse"
        value={formData.address}
        onChangeText={(text) => handleChange('address', text)}
      />

      <View style={membershipStyles.phoneInputContainer}>
        <CustomCountryCodeInput
          label="Numéro téléphone"
          value={formData.countryCode}
          onValueChange={(value) => handleChange('countryCode', value)}
          countries={COUNTRIES}
        />
        <CustomInput
          placeholder="Votre numéro"
          value={formData.phone}
          onChangeText={(text) => handleChange('phone', text)}
          keyboardType="phone-pad"
        />
      </View>

      <View style={membershipStyles.genderContainer}>
        <Text style={membershipStyles.genderLabel}>Genre:</Text>
        {['homme', 'femme'].map(gender => (
          <TouchableOpacity
            key={gender}
            style={[
              membershipStyles.genderButton,
              formData.gender === gender && membershipStyles.genderButtonSelected
            ]}
            onPress={() => handleChange('gender', gender)}
          >
            <View style={membershipStyles.radioCircle}>
              {formData.gender === gender && <View style={membershipStyles.selectedRb} />}
            </View>
            <Text style={membershipStyles.genderButtonText}>
              {gender.charAt(0).toUpperCase() + gender.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ImagePickerComponent
        onImageSelected={setSelectedImage}
        selectedImage={selectedImage}
      />

      <View style={membershipStyles.termsContainer}>
        <TouchableOpacity
          style={acceptedTerms ? membershipStyles.checkboxSelected : membershipStyles.checkbox}
          onPress={() => setAcceptedTerms(!acceptedTerms)}
        >
          {acceptedTerms && <Text style={membershipStyles.checkmark}>✓</Text>}
        </TouchableOpacity>
        <Text style={membershipStyles.termsText}>
          J'ai compris les{' '}
          <Text style={membershipStyles.link}>conditions et politiques</Text>
        </Text>
      </View>

      <View style={membershipStyles.loginContainer}>
        <Text style={membershipStyles.loginText}>
          Vous avez un compte?{' '}
          <Text style={membershipStyles.link} onPress={() => navigation.navigate('Login')}>
            Se connecter
          </Text>
        </Text>
      </View>

      <CustomButton
        title="Souscrire"
        onPress={handleSubmit}
        disabled={!acceptedTerms}
      />
    </View>
  );
};

export default MembershipForm;