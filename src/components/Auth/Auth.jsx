import AsyncStorage from '@react-native-async-storage/async-storage';
export const SetSession = async (token, username, id) =>{
    await AsyncStorage.setItem('token', token);
    await AsyncStorage.setItem('Username', username);
    await AsyncStorage.setItem('id', id);
}

export const getUsername = async () => {
    pseudo = await AsyncStorage?.getItem('Username');
    return pseudo
}
