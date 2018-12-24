import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

import Screen from './../Screen';

import ToPays from './../../components/ToPays';
import ToPaysTotal from './../../components/ToPaysTotal';
import ToPayInput from './../../components/ToPayInput';

const ToPaysScreen = () => (
    <Screen>
        <View style={styles.list}>
            <ToPays/>
        </View>
        <View style={styles.total}>
            <ToPaysTotal/>
        </View>
        <View style={styles.input}>
            <ToPayInput/>
        </View>
    </Screen>
);

const styles = StyleSheet.create({
    list: {
        flex: 1,
        paddingBottom: 5
    },
    total: {
        paddingBottom: 5
    },
    input: {
        paddingBottom: 10
    }
});

export default ToPaysScreen;