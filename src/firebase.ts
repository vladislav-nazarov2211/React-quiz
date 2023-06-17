import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyA1qWlH3YgcUIrEjblLRssucMJDw6VxDjk",
  authDomain: "quiz-react-46f8f.firebaseapp.com",
  databaseURL: "https://quiz-react-46f8f-default-rtdb.firebaseio.com",
  projectId: "quiz-react-46f8f",
  storageBucket: "quiz-react-46f8f.appspot.com",
  messagingSenderId: "1082625746637",
  appId: "1:1082625746637:web:84ca2f056b923f707e6b84"
};



const app = initializeApp(firebaseConfig)
export const db = getDatabase(app)



