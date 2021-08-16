import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAjk_qJ7Bib8CrgnJq_1MEz-0tg5minkQM",
  authDomain: "crwn-db-8e7a1.firebaseapp.com",
  projectId: "crwn-db-8e7a1",
  storageBucket: "crwn-db-8e7a1.appspot.com",
  messagingSenderId: "241223092631",
  appId: "1:241223092631:web:2fe0978a68e9c82e5c9cd2",
  measurementId: "G-E4MJQ2WZ67"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if(!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      }, () => {console.log(userRef)});
    }catch(error) {
      console.log("error creando usuario", error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.default.auth();
export const firestore = firebase.default.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
