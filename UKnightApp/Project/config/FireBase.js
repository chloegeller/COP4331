import firebase from 'firebase';
import 'firebase/database'
import {
    API_KEY,
    AUTH_DOMAIN,
    DATABASE_URL,
    PROJECT_ID,
    MESSAGE_SENDER_ID,
    APP_ID
} from 'react-native-dotenv'
import "firebase/firestore"

// Initialize FireBase
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: "uknight-g17.appspot.com",
  messagingSenderId: MESSAGE_SENDER_ID,
  appId: APP_ID,
  measurementId: "G-SSLDJ6CE1Y"
};

const FireBase = firebase.initializeApp(firebaseConfig);

export const db = firebase.database();

export const firestore = firebase.firestore()

export default FireBase;
