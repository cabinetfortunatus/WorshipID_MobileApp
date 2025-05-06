import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../CustomInput';
import CustomButton from '../Register/Button/CustomButton';
import loginStyles from '../../styles/LoginStyles';
import GradientText from "react-native-gradient-texts";
import { Axios } from '../api/axios';
import { SetSession } from '../Auth/Auth';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const navigation = useNavigation();
  const axios =  Axios();
  

  const handleLogin = async  () => {
    if (!username || !password) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs de connexion');
      return;
    }
    try {
      const response = await axios.post('/users/Login', { Username:username, Password: password });
      console.log(response)
      const Data = response.data;
      const id_member = Data.id_member.toString();
      await SetSession(Data.access_token, username, id_member);
     
     
      navigation.navigate('Home');
  
    } 
    catch (error) {
      Alert.alert('Erreur', 'Nom d’utilisateur ou mot de passe incorrect');
      console.error('Erreur de connexion', error);
    }
  };

  const handlePasswordReset = () => {
    if (!username || !newPassword || !confirmPassword) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs de réinitialisation');
      return;
    }
    if (newPassword !== confirmPassword) {
      Alert.alert('Erreur', 'Les mots de passe ne correspondent pas');
      return;
    }
    Alert.alert('Réinitialisation réussie', 'Votre mot de passe a été réinitialisé avec succès.', [
      { text: 'OK', onPress: () => setIsForgotPassword(false) }
    ]);
  };

  return (
    <View style={loginStyles.container}>
      <TouchableOpacity style={loginStyles.backButton} onPress={() => navigation.navigate("Membership")}>
        <Text style={loginStyles.backButtonText}>←</Text>
      </TouchableOpacity>

      <Image source={require('../../assets/images/church.png')} style={loginStyles.Images} />

      <View style={loginStyles.blocLogin}>
        <View style={loginStyles.title}>
          <GradientText
            text="Connectez-vous"
            fontSize={35}
            isGradientFill
            gradientColors={["#4983F6", "#FBACB7", "#C175F5"]}
            gradientLocations={[0, 0.4, 0.8]}
          />
        </View>

        <View style={loginStyles.bloc_input}>
          <CustomInput label="Username" placeholder="Votre username" value={username} onChangeText={setUsername} />

          {!isForgotPassword ? (
            <>
              <CustomInput label="Mot de passe" placeholder="Votre mot de passe" value={password} onChangeText={setPassword} isPassword secureTextEntry />
              <TouchableOpacity onPress={() => setIsForgotPassword(true)}>
                <Text style={loginStyles.forgotPasswordText}>Mot de passe oublié ?</Text>
              </TouchableOpacity>
              <CustomButton title="Se connecter" onPress={handleLogin} />
            </>
          ) : (
            <>
              <CustomInput label="Nouveau mot de passe" placeholder="Entrez votre nouveau password" value={newPassword} onChangeText={setNewPassword} isPassword secureTextEntry />
              <CustomInput label="Confirmez votre mot de passe" placeholder="Confirmez votre nouveau password" value={confirmPassword} onChangeText={setConfirmPassword} isPassword secureTextEntry />
              <CustomButton title="Réinitialiser" onPress={handlePasswordReset} />
              <TouchableOpacity onPress={() => setIsForgotPassword(false)}>
                <Text style={loginStyles.forgotPasswordText}>Retour à la connexion</Text>
              </TouchableOpacity>
            </>
          )}
        </View>

        <View style={loginStyles.signupContainer}>
          <Text style={loginStyles.signupText}>
            Vous n'avez pas de compte?{' '}
            <Text style={loginStyles.link} onPress={() => navigation.navigate('Membership')}>
              S'inscrire
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LoginForm;
