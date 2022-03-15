import logo from './logo.svg';
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import './App.css';
import React, { useState, useEffect } from "react";
import Navbar from "./components/NavBar";
import NoteAdd from "./components/NoteAdd";
import NoteBook from './components/NoteBook';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import NavBar from './components/NavBar';
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
firebase.initializeApp(firebaseConfig);

const App = () => {
  const [noteBookData, setNoteBookData] = useState([]);

  const updateNotes = () => {
    firebase
      .database()
      .ref("notebook")
      .on("child_added", (snapshot) => {
        let note = {
          id: snapshot.key,
          title: snapshot.val().title,
          description: snapshot.val().description,
        };
        let notebook = noteBookData;
        notebook.push(note);
        setNoteBookData([...noteBookData]);
      });

    firebase
      .database()
      .ref("notebook")
      .on("child_removed", (snapshot) => {
        let notebook = noteBookData;
        notebook = noteBookData.filter((note) => note.id !== snapshot.key);
        setNoteBookData(notebook);
      });
  };

  useEffect(() => {
    updateNotes();
  }, []);

  return (
    <div className="app">
      <NavBar />
      <div className="note-section">
        <NoteAdd />
        <NoteBook notebook={noteBookData} />
      </div>
    </div>
  );
};

export default App;