import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { CardSection } from './../lib';

import * as ToBuysSelectors from './../../selectors/toBuys';

const ToBuy = ({ description }) => (
    <CardSection>
        <Text style={styles.text}>
            {description}
        </Text>
    </CardSection>
);

ToBuy.propTypes = {
    description: PropTypes.string.isRequired
};

ToBuy.defaultProps = {
    description: ''
};

const mapStateToProps = (state, { id }) => ({
    description: ToBuysSelectors.findById(state, id).description
});

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        padding: 10
    }
});

export default connect(mapStateToProps)(ToBuy);
