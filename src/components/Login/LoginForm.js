import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../CustomInput';
import CustomButton from '../Register/Button/CustomButton';
import loginStyles from '../../styles/LoginStyles';
import GradientText from "react-native-gradient-texts";

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const navigation = useNavigation();

  const handleLogin = () => {
    if (validateForm()) {
     
      if (username && password) {
        Alert.alert(
          'Connexion réussie',
          'Vous êtes maintenant connecté.',
          [
            {
              text: 'OK',
              onPress: () => {
                navigation.navigate('Home');
              }
            }
          ]
        );
      } else {
        Alert.alert('Erreur', 'Identifiants incorrects');
      }
    }
  };

  const handlePasswordReset = () => {
    if (validateForm()) {
      Alert.alert(
        'Réinitialisation réussie',
        'Votre mot de passe a été réinitialisé avec succès.',
        [
          {
            text: 'OK',
            onPress: () => {
              setIsForgotPassword(false); 
            }
          }
        ]
      );
    }
  };

  const validateForm = () => {
    if (!username || !password) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs');
      return false;
    }
    if (isForgotPassword && (!oldPassword || !newPassword)) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs de réinitialisation');
      return false;
    }
    return true;
  };

  return (
    <View style={loginStyles.container}>

      <TouchableOpacity
        style={loginStyles.backButton}
        onPress={() => navigation.navigate("Membership")}
      >
        <Text style={loginStyles.backButtonText}>←</Text>
      </TouchableOpacity>

      <Image 
        source={require('../../assets/images/church.png')} 
        style={loginStyles.Images} 
      />

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

        {!isForgotPassword ? (
          <View style={loginStyles.bloc_input}>
            <CustomInput
              label="Username"
              placeholder="Votre username"
              value={username}
              onChangeText={setUsername}
            />
            
            <CustomInput
              label="Mot de passe"
              secureTextEntry
              placeholder="Votre mot de passe"
              value={password}
              onChangeText={setPassword}
            />

            <TouchableOpacity 
              onPress={() => setIsForgotPassword(true)}
            >
              <Text style={loginStyles.forgotPasswordText}>
                Mot de passe oublié ?
              </Text>
            </TouchableOpacity>

            <CustomButton
              title="Se connecter"
              onPress={handleLogin}
            />
          </View>
          ) : (
          <View style={loginStyles.bloc_input}>
            <CustomInput
              label="Username"
              placeholder="Entrez votre username"
            />
            <CustomInput
              label ="Nouveau mot de passe"
              secureTextEntry
              placeholder="Entrez votre nouveau mot de passe"
              value={newPassword}
              onChangeText={setNewPassword}
            />

           
            <CustomInput
              label ="Nouveau mot de passe"
              secureTextEntry
              placeholder="Confirmé votre nouveau mot de passe"
              value={newPassword}
              onChangeText={setNewPassword}
            />

            <CustomButton
              title="Réinitialiser"
              onPress={handlePasswordReset}
            />

            <TouchableOpacity 
              onPress={() => setIsForgotPassword(false)} 
            >
              <Text style={loginStyles.forgotPasswordText}>
                Retour à la connexion
              </Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={loginStyles.signupContainer}>
          <Text style={loginStyles.signupText}>
            Vous n'avez pas de compte?{' '}
            <Text 
              style={loginStyles.link} 
              onPress={() => navigation.navigate('Membership')}
            >
              S'inscrire
            </Text>
          </Text>
        </View>

      </View>
    </View>
  );
};

export default LoginForm;
