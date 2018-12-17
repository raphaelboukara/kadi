import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import createStore from './store';
import Auth from './components/Auth';

const store = createStore();

const App = () => (
	<Provider store={store}>
		<View style={styles.container}>
			<Auth/>
		</View>
	</Provider>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
		paddingTop: 50
    }
});

export default App;
