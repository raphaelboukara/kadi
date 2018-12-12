import { createStore } from 'redux';
import reducers from './../reducers';

export default () => {
    const store = createStore(
        reducers,
        {
            toBuys: {
                'ABC': {
                    id: 'ABC',
                    text: 'couche culotte princesse keren'
                },
                'DEF': {
                    id: 'DEF',
                    text: 'shampoing et gel douche homme'
                },
                'GHI': {
                    id: 'GHI',
                    text: 'sucre'
                },
                'JKL': {
                    id: 'JKL',
                    text: 'pommes, fraises, poires'
                }
            }
        }
    );

    return store;
};
