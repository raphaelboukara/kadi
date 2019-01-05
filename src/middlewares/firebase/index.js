import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';

import * as AuthActions from './../../actions/auth';
import * as UsersActions from './../../actions/users';
import * as ToBuysActions from './../../actions/toBuys';
import * as ToPaysActions from './../../actions/toPays';

import * as UsersSelectors from './../../selectors/users';

const Firebase = (store) => {

    firebase.initializeApp({
        apiKey: 'AIzaSyAx67i7EsPyeuSNK06Hf7ZKxdSyWKHz4x4',
        authDomain: 'kadi-8aa47.firebaseapp.com',
        databaseURL: 'https://kadi-8aa47.firebaseio.com',
        projectId: 'kadi-8aa47',
        storageBucket: 'kadi-8aa47.appspot.com',
        messagingSenderId: '1087163692542'
    });

    let refCurrentUser,
        refPartnerUserId,
        refPartnerUser,
        refCurrentUserToBuys,
        refCurrentUserToPays,
        refPartnerUserToBuys,
        refPartnerUserToPays;

    const handlerCurrentUser = (userSnapshot) => {
        store.dispatch(UsersActions.add(userSnapshot.val()));
    };

    const handlerPartnerUser = (userSnapshot) => {
        store.dispatch(UsersActions.add(userSnapshot.val()));
    };

    const handlerPartnerUserToBuys = (toBuysSnapshot) => {
        store.dispatch(ToBuysActions.set(toBuysSnapshot.val()));
    };

    const handlerPartnerUserToPays = (toPaysSnapshot) => {
        store.dispatch(ToPaysActions.set(toPaysSnapshot.val()));
    };

    const handlerCurrentUserToBuys = (toBuysSnapshot) => {
        store.dispatch(ToBuysActions.set(toBuysSnapshot.val()));
    };

    const handlerCurrentUserToPays = (toPaysSnapshot) => {
        store.dispatch(ToPaysActions.set(toPaysSnapshot.val()));
    };

    const handlerPartnerUserId = (partnerUserIdSnapshot) => {
        const partnerUserId = partnerUserIdSnapshot.val();

        if (refPartnerUser) {
            refPartnerUser.off('value', handlerPartnerUser);
        }

        if (refPartnerUserToBuys) {
            refPartnerUserToBuys.off('value', handlerPartnerUserToBuys);
        }

        if (refPartnerUserToPays) {
            refPartnerUserToPays.off('value', handlerPartnerUserToPays);
        }

        if (partnerUserId) {
            refPartnerUser = firebase.database().ref(`users/${partnerUserId}`);
            refPartnerUser.on('value', handlerPartnerUser);

            refPartnerUserToBuys = firebase.database()
                .ref('toBuys')
                .orderByChild('userId')
                .equalTo(partnerUserId);
            refPartnerUserToBuys.on('value', handlerPartnerUserToBuys);

            refPartnerUserToPays = firebase.database()
                .ref('toPays')
                .orderByChild('userId')
                .equalTo(partnerUserId);
            refPartnerUserToPays.on('value', handlerPartnerUserToPays);
        }
    };

    const setCurrentUser = (id) => {
        store.dispatch(UsersActions.clear());

        refCurrentUser = firebase.database().ref(`users/${id}`);
        refCurrentUser.on('value', handlerCurrentUser);

        refPartnerUserId = firebase.database().ref(`users/${id}/partnerUserId`);
        refPartnerUserId.on('value', handlerPartnerUserId);

        refCurrentUserToBuys = firebase.database()
            .ref('toBuys')
            .orderByChild('userId')
            .equalTo(id);
        refCurrentUserToBuys.on('value', handlerCurrentUserToBuys);

        refCurrentUserToPays = firebase.database()
            .ref('toPays')
            .orderByChild('userId')
            .equalTo(id);
        refCurrentUserToPays.on('value', handlerCurrentUserToPays);

        store.dispatch(AuthActions.setUser(id));
        store.dispatch(AuthActions.setEmail(''));
        store.dispatch(AuthActions.setPassword(''));
    };

    const clearCurrentUser = () => {
        store.dispatch(UsersActions.clear());
        store.dispatch(ToBuysActions.clear());
        store.dispatch(ToPaysActions.clear());

        if (refCurrentUser) {
            refCurrentUser.off('value', handlerCurrentUser);
        }

        if (refPartnerUserId) {
            refPartnerUserId.off('value', handlerPartnerUserId);
        }

        if (refPartnerUser) {
            refPartnerUser.off('value', handlerPartnerUser);
        }

        if (refPartnerUserToBuys) {
            refPartnerUserToBuys.off('value', handlerPartnerUserToBuys);
        }

        if (refPartnerUserToPays) {
            refPartnerUserToPays.off('value', handlerPartnerUserToPays);
        }

        if (refCurrentUserToBuys) {
            refCurrentUserToBuys.off('value', handlerCurrentUserToBuys);
        }

        if (refCurrentUserToPays) {
            refCurrentUserToPays.off('value', handlerCurrentUserToPays);
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
        const state = store.getState();

        if (type === ToPaysActions.CREATE_TOPAY) {
            const newToPayRef = firebase.database().ref('toPays').push();
            return newToPayRef.set({
                ...payload,
                id: newToPayRef.key,
                userId: firebase.auth().currentUser.uid,
                createdAt: firebase.database.ServerValue.TIMESTAMP
            });
        }

        if (type === ToPaysActions.REMOVE_TOPAY) {
            const { id } = payload;

            return firebase.database()
                .ref(`toPays/${id}`)
                .remove()
                .then(() => next(action));
        }

        if (type === ToBuysActions.CREATE_TOBUY) {
            const newToBuyRef = firebase.database().ref('toBuys').push();
            return newToBuyRef.set({
                ...payload,
                id: newToBuyRef.key,
                userId: firebase.auth().currentUser.uid
            });
        }

        if (type === ToBuysActions.REMOVE_TOBUY) {
            const { id } = payload;

            return firebase.database()
                .ref(`toBuys/${id}`)
                .remove()
                .then(() => next(action));
        }

        if (type === AuthActions.SET_AUTH) {
            const { email, password } = payload;

            return firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .catch(
                    () => firebase.auth()
                        .createUserWithEmailAndPassword(email, password)
                        .then(({ user }) =>
                            firebase.database()
                                .ref(`users/${user.uid}`)
                                .set({
                                    id: user.uid,
                                    email: user.email
                                })
                        )
                );
        }

        if (type === AuthActions.UNSET_AUTH) {
            firebase.auth().signOut();
            return;
        }

        if (type === UsersActions.FETCH_USER) {
            const { email } = payload;

            return firebase.database()
                .ref()
                .child('users')
                .orderByChild('email')
                .equalTo(email)
                .once('value')
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        return {
                            user: Object.values(snapshot.val())[0],
                            currentUser: UsersSelectors.findById(
                                state,
                                firebase.auth().currentUser.uid
                            )
                        };
                    } else {
                        throw 'USER_NOT_FOUND_ERROR';
                    }
                });
        }

        if (type === UsersActions.UPDATE_USER) {
            const user = payload;

            return firebase.database()
                .ref(`users/${user.id}`)
                .set(payload)
                .then(() => ({
                    user,
                    currentUser: UsersSelectors.findById(
                        state,
                        firebase.auth().currentUser.uid
                    )
                }));
        }

        return next(action);
    };
};

export default Firebase;
