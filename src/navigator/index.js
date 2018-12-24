import {
	createSwitchNavigator,
	createBottomTabNavigator,
	createAppContainer
} from "react-navigation";

import Init from './../screens/InitScreen';
import Out from './../screens/OutScreen';
import ToBuys from './../screens/ToBuysScreen';
import ToPays from './../screens/ToPaysScreen';
import Users from './../screens/UsersScreen';

const In = createBottomTabNavigator(
	{ Users, ToBuys, ToPays },
	{ initialRouteName: 'ToPays' }
);

const Navigator = createAppContainer(
    createSwitchNavigator(
        { Init, Out, In },
        { initialRouteName: 'Init' }
    )
);

export default Navigator;
