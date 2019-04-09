import firebase from 'firebase'


const config = {
    apiKey: "AIzaSyB54pEV5HVf-vhD2-3df8qijOnvbPth7eI",
    authDomain: "jfddl7-api-f4680.firebaseapp.com",
    databaseURL: "https://jfddl7-api-f4680.firebaseio.com",
    projectId: "jfddl7-api-f4680",
    storageBucket: "jfddl7-api-f4680.appspot.com",
    messagingSenderId: "590421861489"
  }

 const app = firebase.initializeApp(config)

 export const db = app.database()