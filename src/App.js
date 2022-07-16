/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {useAuthState} from 'react-firebase-hooks/auth';
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Games from './pages/Games/Games';
import Players from './pages/Players/Players';
import NoPage from './pages/NoPage/NoPage';


firebase.initializeApp({
  apiKey: "AIzaSyCTpFOjwU_KlaAX6O4rMVgncR2cMH9UlGc",
  authDomain: "teampub-29c01.firebaseapp.com",
  databaseURL: "https://teampub-29c01-default-rtdb.firebaseio.com",
  projectId: "teampub-29c01",
  storageBucket: "teampub-29c01.appspot.com",
  messagingSenderId: "692555159045",
  appId: "1:692555159045:web:17210c7fac0f686ce9ee6c",
  measurementId: "G-C258F3ZQXC"
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function SignIn() {
  const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
  }
  return (
      <div>
        <div className='btn'>
            <button onClick={signInWithGoogle} className='sign-in'>
                Sign In
            </button>
        </div>
      </div>
  )
}

function SignOut() {
    return auth.currentUser && (
        <button className='sign-out' onClick={() => auth.signOut()}>
            Sign Out
        </button>
    )
}

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <h1 className='title'>TeamPub</h1>
      <div className='btn'>
        <SignOut />
        <section>
          {user ? alert('Sucessfully Signed In!') : <SignIn />}
        </section>
      </div>
      <BrowserRouter>
        <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="games" element={<Games />} />
                <Route path="players" element={<Players />} />
                <Route path="*" element={<NoPage />} />
              </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
