import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyC_Dd77dpP1VE1Kx8uI7UEJDtSnv5m0-JU",
  authDomain: "blog-app-802dd.firebaseapp.com",
  projectId: "blog-app-802dd",
  storageBucket: "blog-app-802dd.appspot.com",
  messagingSenderId: "332452920802",
  appId: "1:332452920802:web:3b179d55f5f6c82be88dbb",
  measurementId: "G-5ZRTZX4ZMZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

