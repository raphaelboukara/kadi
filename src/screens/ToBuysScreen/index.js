import React from 'react';
import {
    Platform,
    KeyboardAvoidingView,
    StyleSheet,
    View
} from 'react-native';

import Screen from './../Screen';

import ToBuys from './../../components/ToBuys';
import ToBuyInput from './../../components/ToBuyInput';

const ToBuysScreenIOS = () => (
    <Screen>
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <View style={styles.list}>
                <ToBuys/>
            </View>
            <View style={styles.input}>
                <ToBuyInput/>
            </View>
        </KeyboardAvoidingView>
    </Screen>
);

const ToBuysScreenANDROID = () => (
    <Screen>
        <View style={styles.list}>
            <ToBuys/>
        </View>
        <View style={styles.input}>
            <ToBuyInput/>
        </View>
    </Screen>
);

const ToBuysScreen = () => (
    Platform.OS === 'ios'
    ? <ToBuysScreenIOS/>
    : <ToBuysScreenANDROID/>
);

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    list: {
        flex: 1,
        paddingBottom: 5
    },
    input: {
        paddingBottom: 10
    }
});

export default ToBuysScreen;