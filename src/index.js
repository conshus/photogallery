import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAMIS8sB3ZwlRuB7tVZry0Cxbv9YaoOp2A",
  authDomain: "tiyphotos.firebaseapp.com",
  databaseURL: "https://tiyphotos.firebaseio.com",
  projectId: "tiyphotos",
  storageBucket: "tiyphotos.appspot.com",
  messagingSenderId: "779546192092"
};
firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
