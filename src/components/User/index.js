import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { CardSection } from './../lib';

import * as UsersSelectors from './../../selectors/users';

const User = ({ email, color }) => (
    <CardSection>
        <Text style={styles.text(color)}>
            {email}
        </Text>
    </CardSection>
);

User.propTypes = {
    email: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
};

const mapStateToProps = (state, { id }) => {
    const { email, color } = UsersSelectors.findById(state, id);

    return { email, color };
};

const styles = StyleSheet.create({
    text: (color) => ({
        padding: 10,
        color
    })
});

export default connect(mapStateToProps)(User);
