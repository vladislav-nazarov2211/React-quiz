import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyAqSuhpcEP3FnbEk-n0uYE01XScgBf716c",
  authDomain: "quiz-dbf2d.firebaseapp.com",
  databaseURL: "https://quiz-dbf2d-default-rtdb.firebaseio.com",
  projectId: "quiz-dbf2d",
  storageBucket: "quiz-dbf2d.appspot.com",
  messagingSenderId: "676780901647",
  appId: "1:676780901647:web:b2b1b8f6b65986a307aa7a"
};



const app = initializeApp(firebaseConfig)
export const db = getDatabase(app)



