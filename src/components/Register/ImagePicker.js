
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { membershipStyles } from '../../styles/membershipStyles';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const ImagePicker = ({ onImageSelected }) => {
  const takePhoto = () => {
    launchCamera(
      { mediaType: 'photo', quality: 0.8 },
      (response) => {
        if (response.didCancel) {
          console.log('Utilisateur a annulé la prise de photo');
        } else if (response.errorMessage) {
          console.log('Erreur ImagePicker : ', response.errorMessage);
        } else if (response.assets && response.assets.length > 0) {
          onImageSelected(response.assets[0]);
        }
      }
    );
  };

  const pickImage = () => {
    launchImageLibrary(
      { mediaType: 'photo', quality: 0.8 },
      (response) => {
        if (response.didCancel) {
          console.log('Utilisateur a annulé la sélection d’image');
        } else if (response.errorMessage) {
          console.log('Erreur ImagePicker : ', response.errorMessage);
        } else if (response.assets && response.assets.length > 0) {
          onImageSelected(response.assets[0]);
        }
      }
    );
  };

  return (
    <View style={membershipStyles.photoSection}>
      <View style={membershipStyles.photoButtons}>
      <TouchableOpacity style={membershipStyles.photoButton} onPress={pickImage}>
          <Image source={require('../../assets/icons/images.png')} style={membershipStyles.icon} />
        </TouchableOpacity>
        <Text style={membershipStyles.orText}>ou</Text>
        <TouchableOpacity style={membershipStyles.photoButton} onPress={takePhoto}>
          <Image source={require('../../assets/icons/camera.png')} style={membershipStyles.icon} />
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

export default ImagePicker;
