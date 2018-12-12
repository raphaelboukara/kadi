import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import createStore from './store';

import AuthLogin from './components/AuthLogin';
import AuthLogout from './components/AuthLogout';
import AuthInit from './components/AuthInit';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			loggedIn: null
		};

		firebase.initializeApp({
			apiKey: 'AIzaSyAx67i7EsPyeuSNK06Hf7ZKxdSyWKHz4x4',
			authDomain: 'kadi-8aa47.firebaseapp.com',
			databaseURL: 'https://kadi-8aa47.firebaseio.com',
			projectId: 'kadi-8aa47',
			storageBucket: 'kadi-8aa47.appspot.com',
			messagingSenderId: '1087163692542'
		});

		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		});
	}

	renderAuth() {
		switch (this.state.loggedIn) {
			case true:
				return <AuthLogout/>;

			case false:
				return <AuthLogin/>;

			default:
				return <AuthInit/>;
		}
	}

	render() {
		return (
			<Provider store={createStore()}>
				<View style={styles.container}>
					{this.renderAuth()}
				</View>
			</Provider>
		);
	}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
		paddingTop: 50
    }
});

export default App;
