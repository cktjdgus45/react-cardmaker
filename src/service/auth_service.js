import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    GithubAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAC7jxqGCYQZTP_Li_lSRN3j6TrXYJkb8k",
    authDomain: "card-c901a.firebaseapp.com",
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    databaseURL: process.env.REACT_APP_DATABASE_URL
};

const firebaseApp = initializeApp(firebaseConfig);

class AuthService {
    login(providerName) {
        let provider;
        if (providerName === 'Google') provider = new GoogleAuthProvider()
        if (providerName === 'Github') provider = new GithubAuthProvider()
        const auth = getAuth()
        return signInWithPopup(auth, provider)
    }
}

export default AuthService;