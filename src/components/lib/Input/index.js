import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, TextInput } from 'react-native';

const Input = (props) => {
    const {
        label
    } = props;

    return (
        <View style={styles.container}>
            {
                label
                    ? <Text style={styles.label}>{label}</Text>
                    : null
            }
            <TextInput style={styles.input}
                autoCorrect={false}
                autoCapitalize="none"
                {...props}/>
        </View>
    );
};

Input.propTypes = {
    label: PropTypes.string
};

const styles = StyleSheet.create({
    container: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    label: {
        paddingLeft: 10,
        flex: 1
    },
    input: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        flex: 2
    }
});

export default Input;