import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './../reducers';
import firebase from './../middlewares/firebase';

export default () => {
    const composeEnhancers =        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        reducers,
        composeEnhancers(applyMiddleware(firebase))
    );

    return store;
};
