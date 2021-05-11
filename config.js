import firebase from "firebase"
require("@firebase/firestore")
  var firebaseConfig = {
    apiKey: "AIzaSyAlbVdWC7UMibCj8m5-A_D9wifvAoJwJSo",
    authDomain: "quote-app-f5114.firebaseapp.com",
    projectId: "quote-app-f5114",
    storageBucket: "quote-app-f5114.appspot.com",
    messagingSenderId: "100744670029",
    appId: "1:100744670029:web:f7bb2d0e2e28b06983a504",
    measurementId: "G-KFFG82PQJ3"
  };
 
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);

}

export default firebase.firestore()
