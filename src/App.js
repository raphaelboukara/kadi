import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import ToBuys from './components/ToBuys';
import ToBuyInput from './components/ToBuyInput';
import style from './style.json';

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

const App = () => (
	<Provider store={store}>
		<View style={styles.container}>
			<ToBuys/>
			<ToBuyInput/>
		</View>
	</Provider>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: style.color.background
    }
});

export default App;
