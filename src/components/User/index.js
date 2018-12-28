import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { CardSection } from './../lib';

import * as UsersSelectors from './../../selectors/users';

const User = ({ email }) => (
    <CardSection>
        <Text style={styles.text}>
            {email}
        </Text>
    </CardSection>
);

User.propTypes = {
    email: PropTypes.string.isRequired
};

const mapStateToProps = (state, { id }) => ({
    email: UsersSelectors.findById(state, id).email
});

const styles = StyleSheet.create({
    text: {
        padding: 10
    }
});

export default connect(mapStateToProps)(User);
