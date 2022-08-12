import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from './serviceAccountKey.js';

const firebaseApp = initializeApp(
    {"projectId": "vuepokemonapp",
    ...firebaseConfig
})
export const db = getFirestore(firebaseApp)
