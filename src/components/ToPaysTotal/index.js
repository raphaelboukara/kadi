import React from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Card, CardSection } from './../lib';

import ToPaysTotalForUser from './../ToPaysTotalForUser';

import * as UsersSelectors from './../../selectors/users';
import * as ToPaysSelectors from './../../selectors/toPays';

const ToPaysTotal = ({ amount, userIds }) => (
    <Card>
        <CardSection>
            <Text style={styles.label}>
                Total
            </Text>
            {
                userIds.map((userId) => (
                    <ToPaysTotalForUser key={userId} id={userId}/>
                ))
            }
            <Text style={styles.amount}>
                ₪ {amount}
            </Text>
        </CardSection>
    </Card>
);

ToPaysTotal.propTypes = {
    amount: PropTypes.number,
    userIds: PropTypes.arrayOf(PropTypes.string)
};

ToPaysTotal.defaultProps = {
    amount: 0,
    userIds: []
};

const styles = StyleSheet.create({
    label: {
        paddingLeft: 10,
        flex: 1,
        alignSelf: 'center'
    },
    amount: {
        padding: 10,
        color: 'red'
    }
});

const mapStateToProps = (state) => ({
    userIds: UsersSelectors.getIds(state),
    amount: ToPaysSelectors.totalAmount(state)
});

export default connect(mapStateToProps)(ToPaysTotal);
