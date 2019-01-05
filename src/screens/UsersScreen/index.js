import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

import Screen from './../Screen';

import AuthLogout from './../../components/AuthLogout';
import Users from './../../components/Users';
import UserInput from './../../components/UserInput';

const UsersScreen = () => (
    <Screen>
        <View style={styles.body}>
            <Users/>
            <AuthLogout/>
        </View>
        <View style={styles.footer}>
            <UserInput/>
        </View>
    </Screen>
);

const styles = StyleSheet.create({
    body: {
        flex: 1,
        paddingBottom: 5
    },
    footer: {
        paddingBottom: 10
    }
});

export default UsersScreen;