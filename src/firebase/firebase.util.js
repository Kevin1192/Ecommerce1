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


  export const createUserProfileDocument = async (userAuth, addditionalData) => {
      if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...addditionalData
            })

        } catch (err) {
            console.log('error creating user', err.message);
        }
    }

    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;