import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Card, CardSection, Input } from './../lib';

import * as ToBuysActions from './../../actions/toBuys';

class ToBuyInput extends Component {
    constructor(props) {
        super(props);
        this.state = { description: '' };

        this.handleSubmitEditing = this.handleSubmitEditing.bind(this);
    }

    handleSubmitEditing() {
        this.props.createToBuy({
            description: this.state.description
        }).then(() => {
            this.setState({ description: '' });
        });
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input value={this.state.description}
                        onChangeText={(description) => this.setState({description})}
                        onSubmitEditing={this.handleSubmitEditing}
                        autoFocus={true}
                        blurOnSubmit={false}
                        placeholder="What we have to buy?"/>
                </CardSection>
            </Card>
        );
    }
}

ToBuyInput.propTypes = {
    createToBuy: PropTypes.func.isRequired
};

const mapDispatchToProps = ({
    createToBuy: ToBuysActions.create
});

export default connect(null, mapDispatchToProps)(ToBuyInput);
