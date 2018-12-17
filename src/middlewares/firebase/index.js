import firebase from 'firebase';

import * as AuthActions from './../../actions/auth';

const Firebase = (store) => {

    firebase.initializeApp({
        apiKey: 'AIzaSyAx67i7EsPyeuSNK06Hf7ZKxdSyWKHz4x4',
        authDomain: 'kadi-8aa47.firebaseapp.com',
        databaseURL: 'https://kadi-8aa47.firebaseio.com',
        projectId: 'kadi-8aa47',
        storageBucket: 'kadi-8aa47.appspot.com',
        messagingSenderId: '1087163692542'
    });

    firebase.auth().onAuthStateChanged((user) => {
        store.dispatch(AuthActions.setUser(user));
    });

    return (next) => (action) => {
        const { type, payload } = action;

        if (type === AuthActions.SET_AUTH) {
            const { email, password } = payload;

            return firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .catch(() => firebase
                    .auth()
                    .createUserWithEmailAndPassword(email,password))
                .then((user) => {
                    next(AuthActions.setUser(user));
                    next(AuthActions.setEmail(''));
                    next(AuthActions.setPassword(''));
                });
        }

        if (type === AuthActions.UNSET_AUTH) {
            firebase.auth().signOut();
            return;
        }

        return next(action);
    };
};

export default Firebase;
