import { initializeApp } from 'firebase/app';
import firebaseApp from './firebase';

import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    GithubAuthProvider,
    onAuthStateChanged,
    signOut,
} from 'firebase/auth';

const fireBaseApp = firebaseApp;

const auth = getAuth();
class AuthService {
    login(providerName) {
        let provider;
        if (providerName === 'Google') provider = new GoogleAuthProvider()
        if (providerName === 'Github') provider = new GithubAuthProvider()
        const auth = getAuth()
        return signInWithPopup(auth, provider)
    }

    logout() {
        signOut(auth);
    }
    onAuthChange(onUserChanged) {
        onAuthStateChanged(auth, (user) => {
            onUserChanged(user);
        });
    }
}


export default AuthService;