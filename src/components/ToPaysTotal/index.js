import React from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Card, CardSection } from './../lib';

import * as ToPaysSelectors from './../../selectors/toPays';

const ToPaysTotal = ({ amount }) => (
    <Card>
        <CardSection>
            <Text style={styles.label}>
                Total
            </Text>
            <Text style={styles.amount}>
                ₪ {amount}
            </Text>
        </CardSection>
    </Card>
);

ToPaysTotal.propTypes = {
    amount: PropTypes.number
};

ToPaysTotal.defaultProps = {
    amount: 0
};

const styles = StyleSheet.create({
    label: {
        fontSize: 18,
        paddingLeft: 10,
        flex: 1,
        alignSelf: 'center'
    },
    amount: {
        fontSize: 16,
        padding: 10,
        color: 'red'
    }
});

const mapStateToProps = (state) => ({
    amount: ToPaysSelectors.totalAmount(state)
});

export default connect(mapStateToProps)(ToPaysTotal);
