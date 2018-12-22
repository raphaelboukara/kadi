import * as ToBuysActions from './../../actions/toBuys';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ToBuysActions.SET_TOBUYS:
            return {
                ...action.payload
            };

        case ToBuysActions.CLEAR_TOBUYS:
            return {};

        default:
            return state;
    }
};

