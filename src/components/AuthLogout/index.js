import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Card, CardSection, Button } from './../lib';

import * as AuthActions from './../../actions/auth';

const AuthLogout = ({ unsetAuth }) => (
    <Card>
        <CardSection>
            <Button onPress={unsetAuth}>
                Log out
            </Button>
        </CardSection>
    </Card>
);

AuthLogout.propTypes = {
    unsetAuth: PropTypes.func.isRequired
};

const mapDispatchToProps = ({
    unsetAuth: AuthActions.unsetAuth
});

export default connect(null, mapDispatchToProps)(AuthLogout);
