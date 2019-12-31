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

      
      export const createUserProfileDocument = async (userAuth, additionalData) => {
        if (!userAuth) return;
      
        const userRef = firestore.doc(`users/${userAuth.uid}`);
      
        const snapShot = await userRef.get();
      
        if (!snapShot.exists) {
          const { displayName, email } = userAuth;
          const createdAt = new Date();
          try {
            await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData
            });
          } catch (error) {
            console.log('error creating user', error.message);
          }
        }
      
        return userRef;
      };



      export const auth = firebase.auth();
      export const firestore = firebase.firestore();
      
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({ prompt: 'select_account' });
      export const signInWithGoogle = () => auth.signInWithPopup(provider);
      
      export default firebase;
