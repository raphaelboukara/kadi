import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Card, CardSection, Button, Input, Spinner } from './../lib';

import * as AuthActions from './../../actions/auth';
import * as AuthSelectors from './../../selectors/auth';

class AuthLogin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: false,
            loading: false
        };

        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.onError = this.onError.bind(this);
    }

    handleChangeEmail(email) {
        this.props.setEmail(email);
    }

    handleChangePassword(password) {
        this.props.setPassword(password);
    }

    handleSubmit() {
        const { email, password } = this.props;

        this.setState({
            loading: true,
            error: false
        });

        this.props
            .setAuth(email, password)
            .catch(this.onError);
    }

    onError(error) {
        this.setState({
            loading: false,
            error: true
        });
    }

    renderSubmit() {
        if (this.state.loading) {
            return <Spinner/>;
        }

        return (
            <Button onPress={this.handleSubmit}>
                Log in
            </Button>
        );
    }

    render() {
        return (
            <Card error={this.state.error}>
                <CardSection>
                    <Input label="Email"
                        placeholder="user@gmail.com"
                        value={this.props.email}
                        onChangeText={this.handleChangeEmail}
                        keyboardType="email-address"/>
                </CardSection>

                <CardSection>
                    <Input label="Password"
                        value={this.props.password}
                        onChangeText={this.handleChangePassword}
                        secureTextEntry/>
                </CardSection>

                <CardSection>
                    {this.renderSubmit()}
                </CardSection>
            </Card>
        );
    }
}

AuthLogin.propTypes = {
    email: PropTypes.string,
    setEmail: PropTypes.func,
    password: PropTypes.string,
    setPassword: PropTypes.func,
    setAuth: PropTypes.func.isRequired
};

AuthLogin.defaultProps = {
    email: '',
    setEmail: () => true,
    password: '',
    setPassword: () => true
};

const mapStateToProps = (state) => ({
    email: AuthSelectors.getEmail(state),
    password: AuthSelectors.getPassword(state)
});

const mapDispatchToProps = ({
    setEmail: AuthActions.setEmail,
    setPassword: AuthActions.setPassword,
    setAuth: AuthActions.setAuth
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthLogin);
