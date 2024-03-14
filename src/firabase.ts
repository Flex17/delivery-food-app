import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import initializeApp = firebase.initializeApp;

const config = {
	apiKey: "AIzaSyB3q_WvA5Xct-kx8vnnVau9Fwp9nBMuh4g",
	authDomain: "delivery-food-db.firebaseapp.com",
	databaseURL: "https://delivery-food-db-default-rtdb.firebaseio.com",
	projectId: "delivery-food-db",
	storageBucket: "delivery-food-db.appspot.com",
	messagingSenderId: "570771496995",
	appId: "1:570771496995:web:8b31b21b7a5712b500d196"
};

export const firebaseApp = initializeApp(config);
