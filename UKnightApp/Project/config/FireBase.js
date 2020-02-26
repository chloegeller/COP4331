import firebase from 'firebase';
import {
    API_KEY,
    AUTH_DOMAIN,
    DATABASE_URL,
    PROJECT_ID,
    MESSAGE_SENDER_ID,
    APP_ID
} from 'react-native-dotenv'

// Initialize FireBase
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: "uknight.appspot.com",
  messagingSenderId: MESSAGE_SENDER_ID,
  appId: APP_ID,
  measurementId: "G-BM05JR5QE9"
};

const FireBase = firebase.initializeApp(firebaseConfig);

export default FireBase;
