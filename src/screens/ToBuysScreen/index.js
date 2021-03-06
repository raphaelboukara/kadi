import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

import Screen from './../Screen';

import ToBuys from './../../components/ToBuys';
import ToBuyInput from './../../components/ToBuyInput';

const ToBuysScreen = () => (
    <Screen>
        <View style={styles.list}>
            <ToBuys/>
        </View>
        <View style={styles.input}>
            <ToBuyInput/>
        </View>
    </Screen>
);

const styles = StyleSheet.create({
    list: {
        flex: 1,
        paddingBottom: 5
    },
    input: {
        paddingBottom: 10
    }
});

export default ToBuysScreen;