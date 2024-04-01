
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBRaxpVimrIIag54KoDKikJDpVzUHpH0WI",
  authDomain: "module-51-90389.firebaseapp.com",
  projectId: "module-51-90389",
  storageBucket: "module-51-90389.appspot.com",
  messagingSenderId: "774224318018",
  appId: "1:774224318018:web:4050796060d23b300667db"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

