import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVg1kxkHZFBvOf1KhtEMIqNHY39J_Yr48",
  authDomain: "smartform-30bd0.firebaseapp.com",
  databaseURL: "https://smartform-30bd0-default-rtdb.firebaseio.com",
  projectId: "smartform-30bd0",
  storageBucket: "smartform-30bd0.firebasestorage.app",
  messagingSenderId: "302101497358",
  appId: "1:302101497358:web:f0d40cb6b796af8ebc1e5f"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
