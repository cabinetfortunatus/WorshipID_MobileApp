import axios from 'axios';
export const Axios = () => {

    const Instance = axios.create({
      baseURL: 'http://173.212.195.91:5001/',
      // baseURL: 'http://192.168.1.167:5000/',
      timeout: 10000,
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Accept": "application/json",
    //   },
    });
  
    return Instance ;
  };
  