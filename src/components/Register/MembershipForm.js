import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GradientText from "react-native-gradient-texts";
import { CountryPicker } from "react-native-country-codes-picker";
import CustomInput from '../CustomInput';
import CustomButton from './Button/CustomButton';
import ImagePickerComponent from './ImagePicker';
import { membershipStyles } from '../../styles/membershipStyles';
import { inputStyles } from '../../styles/inputStyles';
import {Axios} from "../api/axios";

const INITIAL_FORM_DATA = {
  lastName: '',
  firstName: '',
  address: '',
  phone: '',
  gender: '',
  countryCode: '+243'
};

const MembershipForm = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [selectedImage, setSelectedImage] = useState(null);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('+243');
  const [countryFlag, setCountryFlag] = useState('🇨🇩');
  const [phoneNumber, setPhoneNumber] = useState('');
  const axios = Axios();
  const handleChange = (field, value) => {
    setFormData(prevData => ({
      ...prevData,
      [field]: value
    }));
  };

  const handlePhoneChange = (text) => {
    const cleanedText = text.replace(/[^\d]/g, '');
    setPhoneNumber(cleanedText);
    handleChange('phone', countryCode + cleanedText);
  };

  const validateForm = () => {
    const requiredFields = ['lastName', 'firstName', 'address', 'gender'];
    const missingFields = requiredFields.filter(field => !formData[field]);

    if (missingFields.length > 0) {
      Alert.alert(
        'Erreur',
        'Veuillez remplir tous les champs obligatoires : ' + 
        missingFields.map(field => field.charAt(0).toUpperCase() + field.slice(1)).join(', ')
      );
      return false;
    }

    if (!phoneNumber) {
      Alert.alert('Erreur', 'Veuillez entrer un numéro de téléphone');
      return false;
    }

    if (!acceptedTerms) {
      Alert.alert('Erreur', 'Veuillez accepter les conditions et politiques');
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      const form = new FormData();

      form.append("Name", formData.lastName);
      form.append("First_name", formData.firstName);
      form.append("Adress", formData.address);
      form.append("Gender", formData.gender);
      form.append("Phone", formData.phone);
    
      if (selectedImage) {
        form.append("Image", {
          uri: selectedImage.uri,
          type: selectedImage.type || "image/jpeg",
          name: selectedImage.fileName || "photo.jpg",
        });
      }
   
    try{
        
        let response = await axios.post('/members/', form, {
          headers: {
            'Content-Type': 'multipart/form-data',
          }} )
        .then((response) =>{
            console.log(response)
            navigation.navigate('Login')
            Alert.alert("Vous êtes inscrit avec succès!")
        })
        .catch((error)=>{
            console.error(error)
        })
        .finally(() => {

        })
    }
    catch(error){
        console.error( error)
    }
    }
   
  };

  return (
    <View style={membershipStyles.BlocContainer}>
      <View style={membershipStyles.titleContainer}>
        <GradientText
          text="Devenir membre"
          fontSize={30}
          isGradientFill
          gradientColors={["#4983F6", "#FBACB7", "#C175F5"]}
          gradientLocations={[0, 0.4, 0.8]}
        />
      </View>
      <View style={membershipStyles.blocInput}>
        <Text style={membershipStyles.subtitle}>
          Si vous souhaitez devenir membre de l'église, nous sommes 
          heureux de vous accueillir!{' '}
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

        <View style={membershipStyles.phoneContainer}>
          <Text style={inputStyles.label}>Téléphone</Text>
            <View style={membershipStyles.phoneInputContainer}>
              <TouchableOpacity 
                style={membershipStyles.countryButton}
                onPress={() => setShow(true)}
              >
              <Text>{countryFlag}</Text>
              <Text>{countryCode}</Text>
            </TouchableOpacity>
            <TextInput 
              placeholder='Numéro de téléphone'
              style={membershipStyles.inputText}
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={handlePhoneChange}
            />
          </View>
        </View>

        <CountryPicker
          show={show}
          pickerButtonOnPress={(item) => {
            setCountryCode(item.dial_code);
            setCountryFlag(item.flag);
            setShow(false);
          }}
          onBackdropPress={() => setShow(false)}
          style={{
            modal:{
              height:"60%",
              width:"90%",
              alignSelf:"center"
            }
          }}
          lang={'fr'}
        />

        <View style={membershipStyles.genderContainer}>
          <Text style={membershipStyles.genderLabel}>Genre :</Text>
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
      </View>

      <View style={membershipStyles.loginContainer}>
        <Text style={membershipStyles.loginText}>
          Vous avez un compte?{' '}
          <Text 
            style={membershipStyles.link} 
            onPress={() => navigation.navigate('Login')}
          >
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