import {
	createSwitchNavigator,
	createBottomTabNavigator,
	createAppContainer
} from "react-navigation";

import Init from './../screens/InitScreen';
import Out from './../screens/OutScreen';
import ToBuys from './../screens/ToBuysScreen';
import Users from './../screens/UsersScreen';

const In = createBottomTabNavigator({
	Users,
	ToBuys
});

const initialRouteName = 'Init';

const Navigator = createAppContainer(
    createSwitchNavigator(
        { Init, Out, In },
        { initialRouteName }
    )
);

export default Navigator;
