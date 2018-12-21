import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './../reducers';
import firebase from './../middlewares/firebase';
import navigation from './../middlewares/navigation';

export default () => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        reducers,
        composeEnhancers(
            applyMiddleware(
                firebase,
                navigation
            )
        )
    );

    return store;
};


// {
//     users: {
//         1: {
//             id: 1,
//             email: 'eden.boukara@gmail.com',
//             toBuyIds: [1, 2],
//             shareWithUserId: 2
//         },
//         2: {
//             id: 2,
//             email: 'raphael.boukara@gmail.com',
//             toBuyIds: [3, 4],
//             shareWithUserId: 1
//         }
//     },
//     toBuys: {
//         1: {
//             id: 1,
//             description: 'fleur'
//         },
//         2: {
//             id: 2,
//             description: 'sel'
//         },
//         3: {
//             id: 3,
//             description: 'habit keren'
//         },
//         4: {
//             id: 4,
//             description: 'sel'
//         }
//     }
// }
