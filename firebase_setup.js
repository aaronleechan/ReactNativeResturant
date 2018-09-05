import * as firebase from 'firebase';


const firebaseConfigfig = {
    apiKey: "AIzaSyDoa_83Ig23ZJGMI9stARIx4AyjUdRDxRw",
    authDomain: "react-native-resturants.firebaseapp.com",
    databaseURL: "https://react-native-resturants.firebaseio.com",
    projectId: "react-native-resturants",
    storageBucket: "react-native-resturants.appspot.com",
    messagingSenderId: "181561591366"
    };

const firebaeApp = firebase.initializeApp(firebaseConfigfig);
export default firebaeApp;