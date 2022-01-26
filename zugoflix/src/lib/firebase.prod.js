import Firebase from 'firebase/app';
import 'firebase/firestore';
import '@firebase/auth';
//import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyDgad7hUTYuhiEGl89P277iwoKIEDwwwT4",
    authDomain: "netflix-clone-648a7.firebaseapp.com",
    projectId: "netflix-clone-648a7",
    storageBucket: "netflix-clone-648a7.appspot.com",
    messagingSenderId: "902705801557",
    appId: "1:902705801557:web:74ce7cfec5c17c6047e7dc",
    measurementId: "G-VRZBPYKR47"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };