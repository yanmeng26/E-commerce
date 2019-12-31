import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const config = {
        apiKey: "AIzaSyDM8G2TmXbyAoq5vOT1DxDjHCg9A2Bfmmc",
        authDomain: "meng-e-commerce.firebaseapp.com",
        databaseURL: "https://meng-e-commerce.firebaseio.com",
        projectId: "meng-e-commerce",
        storageBucket: "meng-e-commerce.appspot.com",
        messagingSenderId: "1004384520205",
        appId: "1:1004384520205:web:3506ecea4a09a1cc172d44",
        measurementId: "G-C9CXQXZ2B3"
      };
      firebase.initializeApp(config);

      export const auth = firebase.auth();
      export const firestore = firebase.firestore();
      
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({ prompt: 'select_account' });
      export const signInWithGoogle = () => auth.signInWithPopup(provider);
      
      export default firebase;
