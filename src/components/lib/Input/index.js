import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, TextInput } from 'react-native';

const Input = ({
    label,
    value,
    placeholder,
    secureTextEntry,
    onChangeText,
    onSubmitEditing,
    blurOnSubmit
}) => (
    <View style={styles.container}>
        {
            label
                ? <Text style={styles.label}>{label}</Text>
                : null
        }
        <TextInput style={styles.input}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
            secureTextEntry={secureTextEntry}
            autoCorrect={false}
            autoCapitalize="none"
            blurOnSubmit={blurOnSubmit}/>
    </View>
);

Input.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChangeText: PropTypes.func,
    onSubmitEditing: PropTypes.func,
    secureTextEntry: PropTypes.bool,
    blurOnSubmit: PropTypes.bool
};

Input.defaultProps = {
    onChangeText: () => true,
    onSubmitEditing: () => true,
    secureTextEntry: false,
    blurOnSubmit: true
};

const styles = StyleSheet.create({
    container: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    label: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    input: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    }
});

export default Input;