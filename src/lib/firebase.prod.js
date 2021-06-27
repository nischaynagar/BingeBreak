import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyDqwhtC-YwEDxj63L13kw5NvA7eoCwflm4",
    authDomain: "netflix-1f47e.firebaseapp.com",
    databaseURL: "https://netflix-1f47e.firebaseio.com",
    projectId: "netflix-1f47e",
    storageBucket: "netflix-1f47e.appspot.com",
    messagingSenderId: "394272520980",
    appId: "1:394272520980:web:545912e130d2f1e826a001"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
