import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => (
    <View style={styles.container}>
        <ActivityIndicator size={size}/>
    </View>
);

Spinner.propTypes = {
    size: PropTypes.oneOf([
        'small',
        'large'
    ])
};

Spinner.defaultProps = {
    size: 'small'
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Spinner;