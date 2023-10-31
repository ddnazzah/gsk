// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyBxqy0eeHobQTNyFiX8W1AnLw5S792VMzE',
    authDomain: 'vote-gsk.firebaseapp.com',
    projectId: 'vote-gsk',
    storageBucket: 'vote-gsk.appspot.com',
    messagingSenderId: '226960193793',
    appId: '1:226960193793:web:c691edb8f0325bd8fd8300',
    measurementId: 'G-2XK0D8D04R',
}

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)
// Export firestore database
export const db = getFirestore()

export const analytics = getAnalytics()
