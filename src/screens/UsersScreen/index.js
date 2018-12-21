import React from 'react';

import Screen from './../Screen';

import AuthLogout from './../../components/AuthLogout';
import Users from './../../components/Users';

const UsersScreen = () => (
    <Screen>
        <Users/>
        <AuthLogout/>
    </Screen>
);

export default UsersScreen;