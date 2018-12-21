import firebase from 'firebase';

import * as AuthActions from './../../actions/auth';
import * as UsersActions from './../../actions/users';

const Firebase = (store) => {

    firebase.initializeApp({
        apiKey: 'AIzaSyAx67i7EsPyeuSNK06Hf7ZKxdSyWKHz4x4',
        authDomain: 'kadi-8aa47.firebaseapp.com',
        databaseURL: 'https://kadi-8aa47.firebaseio.com',
        projectId: 'kadi-8aa47',
        storageBucket: 'kadi-8aa47.appspot.com',
        messagingSenderId: '1087163692542'
    });

    let refCurrentUser;

    const onUserChange = (user) => {
        store.dispatch(UsersActions.add(user));
    };

    const handlerCurrentUser = (userSnapshot) => {
        onUserChange(userSnapshot.val());
    };

    const setCurrentUser = (id) => {
        store.dispatch(UsersActions.clear());

        refCurrentUser = firebase.database().ref(`users/${id}`);
        refCurrentUser.on('value', handlerCurrentUser);

        store.dispatch(AuthActions.setUser(id));
        store.dispatch(AuthActions.setEmail(''));
        store.dispatch(AuthActions.setPassword(''));
    };

    const clearCurrentUser = () => {
        store.dispatch(UsersActions.clear());

        if (refCurrentUser) {
            refCurrentUser.off('value', handlerCurrentUser);
        }

        store.dispatch(AuthActions.setUser(null));
        store.dispatch(AuthActions.setEmail(''));
        store.dispatch(AuthActions.setPassword(''));
    };

    firebase.auth().onAuthStateChanged((user) => {
        user
            ? setCurrentUser(user.uid)
            : clearCurrentUser();
    });

    return (next) => (action) => {
        const { type, payload } = action;

        if (type === AuthActions.SET_AUTH) {
            const { email, password } = payload;

            return firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .catch(
                    () => firebase.auth()
                        .createUserWithEmailAndPassword(email, password)
                        .then(({ user }) => {
                            const userToCreate = {
                                id: user.uid,
                                email: user.email
                            };

                            return firebase.database()
                                .ref(`users/${userToCreate.id}`)
                                .set(userToCreate);
                        })
                );
        }

        if (type === AuthActions.UNSET_AUTH) {
            firebase.auth().signOut();
            return;
        }

        return next(action);
    };
};

export default Firebase;
