import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCltkPqv2cJfv9bVhvKNOcDCtB_VYZdGBk",
    authDomain: "pr-dm-ca227.firebaseapp.com",
    databaseURL: "https://pr-dm-ca227-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "pr-dm-ca227",
    storageBucket: "pr-dm-ca227.appspot.com",
    messagingSenderId: "850246252978",
    appId: "1:850246252978:web:483f597754860eb6a48cab",
    measurementId: "G-9S2Y2LRNZ1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };