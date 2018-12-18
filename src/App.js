import React from 'react';
import { Provider } from 'react-redux';

import createStore from './store';
import Navigator from './navigator';

import Navigation from './middlewares/navigation';

const store = createStore();

const App = () => (
	<Provider store={store}>
		<Navigator ref={Navigation.setNavigator(store)}/>
	</Provider>
);

export default App;
