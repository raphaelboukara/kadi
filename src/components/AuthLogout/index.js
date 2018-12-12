import React, { Component } from 'react';
import firebase from 'firebase';
import { Card, CardSection, Button } from './../lib';

class AuthLogout extends Component {
    constructor(props) {
        super(props);

        this.handlePress = this.handlePress.bind(this);
    }

    handlePress() {
        firebase.auth().signOut();
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Button onPress={this.handlePress}>
                        Log out
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default AuthLogout;
