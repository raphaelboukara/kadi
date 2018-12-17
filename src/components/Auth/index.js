import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AuthLogin from './../AuthLogin';
import AuthLogout from './../AuthLogout';
import AuthInit from './../AuthInit';

import * as AuthSelectors from './../../selectors/auth';
import * as AuthConstants from './../../constants/auth';

const Auth = ({ status }) => {
    switch (status) {
        case AuthConstants.CONNECTED:
            return <AuthLogout/>;

        case AuthConstants.DISCONNECTED:
            return <AuthLogin/>;

        default:
            return <AuthInit/>;
    }
};

Auth.propTypes = {
    status: PropTypes.oneOf([
        AuthConstants.LOADING,
        AuthConstants.CONNECTED,
        AuthConstants.DISCONNECTED
    ])
};

Auth.defaultProps = {
    status: AuthConstants.LOADING
};

const mapStateToProps = (state) => ({
    status: AuthSelectors.getStatus(state)
});

export default connect(mapStateToProps)(Auth);
