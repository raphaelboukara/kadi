import React from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as UsersSelectors from './../../selectors/users';
import * as ToPaysSelectors from './../../selectors/toPays';

const ToPaysTotalForUser = ({ amount, color }) => (
    <Text style={styles.amount(color)}>
        ₪ {amount}
    </Text>
);

ToPaysTotalForUser.propTypes = {
    amount: PropTypes.number,
    color: PropTypes.string.isRequired
};

ToPaysTotalForUser.defaultProps = {
    amount: 0
};

const styles = StyleSheet.create({
    amount: (color) => ({
        padding: 10,
        color
    })
});

const mapStateToProps = (state, { id }) => {
    const { color } = UsersSelectors.findById(state, id);
    const amount = ToPaysSelectors.totalAmountByUserId(state, id);

    return { amount, color };
};

export default connect(mapStateToProps)(ToPaysTotalForUser);
