import * as ToBuysActions from './../../actions/toBuys';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ToBuysActions.SET_TOBUYS:
            return {
                ...state,
                ...action.payload
            };

        case ToBuysActions.CLEAR_TOBUYS:
            return {};

        case ToBuysActions.REMOVE_TOBUY:
            // eslint-disable-next-line no-case-declarations
            const newState = { ...state };
            delete newState[action.payload.id];
            return newState;

        default:
            return state;
    }
};

