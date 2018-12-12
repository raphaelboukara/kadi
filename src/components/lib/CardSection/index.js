import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

const CardSection = ({ children }) => (
    <View style={styles.container}>
        {children}
    </View>
);

CardSection.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

CardSection.defaultProps = {
    children: null
};

const styles = {
    container: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};

export default CardSection;
