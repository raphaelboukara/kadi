import React from 'react';
import PropTypes from 'prop-types';
import {
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    View
} from 'react-native';

const Screen = ({ children }) => {
    if (Platform.OS === 'ios' ) {
        return (
            <View style={styles.container}>
                <KeyboardAvoidingView style={styles.keyboard} behavior='padding'>
                    {children}
                </KeyboardAvoidingView>
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                {children}
            </View>
        );
    }
};

Screen.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 50 : 10,
        paddingHorizontal: 5
    },
    keyboard: {
        flex: 1
    }
});

export default Screen;
