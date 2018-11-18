import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyCBNbKaWlC2qc40DYqUvXnajpLwwOLlv6M",
    authDomain: "comwelfare-bfc42.firebaseapp.com",
    databaseURL: "https://comwelfare-bfc42.firebaseio.com",
    projectId: "comwelfare-bfc42",
    storageBucket: "comwelfare-bfc42.appspot.com",
    messagingSenderId: "1038046730534"
  };
  const app=firebase.initializeApp(config);
  
  export default app;