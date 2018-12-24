import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Card, CardSection, Input, Button } from './../lib';

import * as ToPaysActions from './../../actions/toPays';

class ToPayInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '',
            amount: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        const { description, amount } = this.state;

        this.props.createToPay({ description, amount })
            .then(() => {
                this.setState({
                    description: '',
                    amount: ''
                });
            });
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input label="Description"
                        value={this.state.description}
                        onChangeText={(description) => this.setState({description})}
                        placeholder="What we have to pay?"/>
                </CardSection>

                <CardSection>
                    <Input label="Amount"
                        value={this.state.amount}
                        onChangeText={(amount) => this.setState({amount})}
                        keyboardType="numeric"/>
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

ToPayInput.propTypes = {
    createToPay: PropTypes.func.isRequired
};

const mapDispatchToProps = ({
    createToPay: ToPaysActions.create
});

export default connect(null, mapDispatchToProps)(ToPayInput);
