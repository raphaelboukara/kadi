import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

const Screen = ({ children }) => (
    <View style={styles.container}>
        {children}
    </View>
);

Screen.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 5
    }
});

export default Screen;