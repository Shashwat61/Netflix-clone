import firebase from 'firebase';



const firebaseConfig = {
    apiKey: "AIzaSyCDUAOlxSyRQLADBgwaHu7Y7joz1xJgwGY",
    authDomain: "netflix-clone-54cde.firebaseapp.com",
    projectId: "netflix-clone-54cde",
    storageBucket: "netflix-clone-54cde.appspot.com",
    messagingSenderId: "886661084051",
    appId: "1:886661084051:web:2a6b9ed39d5bf0ea126e66"
  };



  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  export {auth}
  export default db;