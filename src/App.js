import logo from './logo.svg';
import './App.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6uVN9ss9yoa9rFlAt4NY3eKrIT9RuAUw",
  authDomain: "notebook-b2bf0.firebaseapp.com",
  projectId: "notebook-b2bf0",
  storageBucket: "notebook-b2bf0.appspot.com",
  messagingSenderId: "780846036583",
  appId: "1:780846036583:web:3df8cf5546e50277c286c2",
  measurementId: "G-W5WLH4JKCJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
function App() {
  return (
<div>
  <h2>App</h2>
    </div>
  );
}

export default App;
