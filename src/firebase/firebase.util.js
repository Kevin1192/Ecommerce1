import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCeGtlavTbgLRHfVPh6QB5kZWQtWhXw2fc",
    authDomain: "ecommerce-50711.firebaseapp.com",
    databaseURL: "https://ecommerce-50711.firebaseio.com",
    projectId: "ecommerce-50711",
    storageBucket: "ecommerce-50711.appspot.com",
    messagingSenderId: "785326953502",
    appId: "1:785326953502:web:0e6bee303926c09de9ca0f",
    measurementId: "G-YNQR2H79WC"
  };


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;