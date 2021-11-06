import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyAtwJ7tZVAKLqzhWdfF67PfMgROCx6sD3Y",
  authDomain: "card2-85717.firebaseapp.com",
  databaseURL: "https://card2-85717-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "card2-85717",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;