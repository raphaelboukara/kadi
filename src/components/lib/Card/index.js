import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

const Card = ({ children, error }) => (
    <View style={[styles.container, error && styles.error]}>
        {children}
    </View>
);

Card.propTypes = {
    error: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

Card.defaultProps = {
    error: false,
    children: null
};

const styles = {
    container: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    },
    error: {
        borderColor: 'red'
    }
};

export default Card;