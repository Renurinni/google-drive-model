import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyBnDHV8nUpSfrEeS2Cp4LE8PgmZ1C9Bmpc",
    authDomain: "drive-model.firebaseapp.com",
    projectId: "drive-model",
    storageBucket: "drive-model.appspot.com",
    messagingSenderId: "947286827115",
    appId: "1:947286827115:web:00fbacac891191a9bfd12e"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const storage=firebase.storage();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  export {db,storage,auth,provider}
