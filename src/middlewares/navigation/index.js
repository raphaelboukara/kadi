import { NavigationActions } from 'react-navigation';

import * as AuthActions from './../../actions/auth';
import * as AuthSelectors from './../../selectors/auth';
import * as AuthConstants from './../../constants/auth';

const SET_NAVIGATOR = 'set_navigator';

const Navigation = (store) => {
    let _navigator;

    const navigate = (routeName) => {
        _navigator.dispatch(
            NavigationActions.navigate({
                routeName
            })
        );
    };

    return (next) => (action) => {
        const { type } = action;
        const result = next(action);

        if (type === SET_NAVIGATOR) {
            _navigator = action.payload;
            return;
        }

        if (type === AuthActions.SET_AUTH_USER) {
            switch (AuthSelectors.getStatus(store.getState())) {
                case AuthConstants.CONNECTED:
                    navigate('In');
                    break;

                case AuthConstants.DISCONNECTED:
                    navigate('Out');
                    break;

                default:
                    break;
            }
        }

        return result;
    };
};

Navigation.setNavigator = (store) => (navigatorRef) =>
    store.dispatch({
        type: SET_NAVIGATOR,
        payload: navigatorRef
    });

export default Navigation;
