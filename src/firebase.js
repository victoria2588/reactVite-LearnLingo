import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCHTmc3Gh4W1XLIpMpgCM752wA_87tnpyE",
  authDomain: "learn-lingo.firebaseapp.com",
  projectId: "learn-lingo-e82db",
  storageBucket: "learn-lingo.appspot.com",
  messagingSenderId: "397520927845",
  appId: "1:501362930586:web:387ce46ec4671a8d3f4023",
  databaseURL:
    "https://learn-lingo-e82db-default-rtdb.europe-west1.firebasedatabase.app",
};

export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
