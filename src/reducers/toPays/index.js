import * as ToPaysActions from './../../actions/toPays';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ToPaysActions.SET_TOPAYS:
            return {
                ...state,
                ...action.payload
            };

        case ToPaysActions.CLEAR_TOPAYS:
            return {};

        case ToPaysActions.REMOVE_TOPAY:
            // eslint-disable-next-line no-case-declarations
            const newState = { ...state };
            delete newState[action.payload.id];
            return newState;

        default:
            return state;
    }
};

