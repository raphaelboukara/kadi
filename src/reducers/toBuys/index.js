import * as ToBuysActions from './../../actions/toBuys';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ToBuysActions.ADD_TOBUYS:
            return {
                ...state,
                ...action.payload
            };

        case ToBuysActions.CLEAR_TOBUYS:
            return {};

        default:
            return state;
    }
};

