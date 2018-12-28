import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = (props) => (
    <TouchableOpacity style={styles.button} {...props}>
        <Text style={styles.text}>
            {props.children}
        </Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff'
    },
    text: {
        alignSelf: 'center',
        color: '#007aff',
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
});

export default Button;
