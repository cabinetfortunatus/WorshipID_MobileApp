import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import loginStyles from '../../styles/LoginStyles';

const ForgotPasswordScreen = () => {
  const [username, setUsername] = useState('');
  const navigation = useNavigation();

  const handleResetPassword = () => {
    if (!username) {
      Alert.alert('Erreur', 'Veuillez entrer votre Username');
      return;
    }
    Alert.alert('Succès', 'Un lien de réinitialisation a été envoyé.');
  };

  return (
    <View style={loginStyles.container}>
      <Text style={loginStyles.title}>Réinitialisation du mot de passe</Text>
      
      <TextInput
        style={loginStyles.input}
        placeholder="Votre Username"
        value={username}
        onChangeText={setUsername}
        keyboardType="email-address"
      />
      
      <TouchableOpacity style={loginStyles.button} onPress={handleResetPassword}>
        <Text style={loginStyles.buttonText}>Envoyer</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={loginStyles.backToLogin}>← Retour à la connexion</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPasswordScreen;
