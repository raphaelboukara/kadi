/* eslint-disable react/prop-types */
import React from 'react';
import { SectionList, Text } from 'react-native';
import { connect } from 'react-redux';

import { Card } from './../lib';

import * as ToPaysSelectors from './../../selectors/toPays';

import ToPay from './../ToPay';

const ToPays = ({ sections }) => {
    const renderItem = ({ item }) => (
        <ToPay id={item}/>
    );

    const renderSectionHeader = ({ section: { title } }) => (
        <Text style={{
            padding: 5,
            backgroundColor: 'lightgrey'
        }}>{title}</Text>
    );

    const keyExtractor = (id, index) => `${index}-${id}`;

    return (
        <Card>
            <SectionList
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
                sections={sections}
                keyExtractor={keyExtractor}/>
        </Card>
    );
};

const mapStateToProps = (state) => ({
    sections: ToPaysSelectors.formatForSectionList(state)
});

export default connect(mapStateToProps)(ToPays);
