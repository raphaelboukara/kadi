import React, { Component } from 'react';
import firebase from 'firebase';
import { Card, CardSection, Button, Input, Spinner } from './../lib';

class AuthLogin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            error: '',
            loading: false
        };

        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.onLoginSuccess = this.onLoginSuccess.bind(this);
        this.onLoginError = this.onLoginError.bind(this);
    }

    handleChangeEmail(email) {
        this.setState({ email });
    }

    handleChangePassword(password) {
        this.setState({ password });
    }

    handleSubmit() {
        const { email, password } = this.state;

        this.setState({
            loading: true,
            error: ''
        });

        firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess)
            .catch(() => {
                firebase.auth()
                    .createUserWithEmailAndPassword(email,password)
                    .then(this.onLoginSuccess)
                    .catch(this.onLoginError);
            });
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        });
    }

    onLoginError() {
        this.setState({
            loading: false,
            error: 'Authentication Failed.'
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
            <Card error={!!this.state.error}>
                <CardSection>
                    <Input label="Email"
                        placeholder="user@gmail.com"
                        value={this.state.email}
                        onChangeText={this.handleChangeEmail}/>
                </CardSection>

                <CardSection>
                    <Input label="Password"
                        value={this.state.password}
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

export default AuthLogin;
