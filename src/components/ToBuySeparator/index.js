import React from 'react';
import { StyleSheet, View } from 'react-native';
import style from './../../style.json';

const ToBuySeparator = () => (
    <View style={styles.separator}/>
);

const styles = StyleSheet.create({
    separator: {
        borderBottomColor: style.color.border,
        borderBottomWidth: 2,
        marginHorizontal: 5
    }
});

export default ToBuySeparator;
