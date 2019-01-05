import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Card, CardSection, Input, Button } from './../lib';

import * as UsersActions from './../../actions/users';

class UserInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            error: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        const { email } = this.state;

        this.setState({
            error: false
        });

        this.props.fetchUser({ email })
            .then(({ user, currentUser }) =>
                this.props.updateUser({
                    ...user,
                    partnerUserId: currentUser.id
                }).catch(() => {
                    throw 'USER_UPDATE_ERROR';
                })
            )
            .then(({ user, currentUser }) =>
                this.props.updateUser({
                    ...currentUser,
                    authorizedPartnerUserId: user.id
                }).catch(() => {
                    throw 'USER_UPDATE_ERROR';
                })
            )
            .catch(() => {
                this.setState({
                    error: true
                });
            });
    }

    render() {
        return (
            <Card error={this.state.error}>
                <CardSection>
                    <Input label="Email"
                        value={this.state.description}
                        onChangeText={(email) => this.setState({email})}
                        placeholder="Who is your partner?"/>
                </CardSection>

                <CardSection>
                    <Button onPress={this.handleSubmit}>
                        Save
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

UserInput.propTypes = {
    fetchUser: PropTypes.func.isRequired,
    updateUser: PropTypes.func.isRequired
};

const mapDispatchToProps = ({
    fetchUser: UsersActions.fetch,
    updateUser: UsersActions.update
});

export default connect(null, mapDispatchToProps)(UserInput);
