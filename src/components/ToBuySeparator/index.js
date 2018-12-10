import React from 'react';
import { StyleSheet, View } from 'react-native';
import style from './../../style.json';

const ToBuySeparator = () => (
    <View style={styles.separator}/>
);

const styles = StyleSheet.create({
    separator: {
        borderBottomColor: style.color.border,
        borderBottomWidth: 1,
        marginHorizontal: 15
    }
});

export default ToBuySeparator;
